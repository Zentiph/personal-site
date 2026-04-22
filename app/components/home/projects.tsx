type Language = {
  name: string;
  color: string;
};

type GQLRepo = {
  name: string;
  description: string;
  url: string;
  openGraphImageUrl: string;
  usesCustomOpenGraphImage: boolean;
  stargazerCount: number;
  primaryLanguage: Language | null;
  repositoryTopics: {
    nodes: { topic: { name: string } }[];
  };
};

const PLACEHOLDER_IMAGE =
  "https://dummyimage.com/640x320/000/ffffff&text=[+no+image+]";

const USERNAME = "Zentiph";

const GRAPHQL_REPO_FETCH_COUNT = 50;
const GRAPHQL_TOPICS_FETCH_COUNT = 10;
const GRAPHQL_QUERY = `#graphql
  query {
    user(login: "${USERNAME}") {
      repositories(first: ${GRAPHQL_REPO_FETCH_COUNT}) {
        nodes {
          name
          description
          url
          openGraphImageUrl
          usesCustomOpenGraphImage
          stargazerCount
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: ${GRAPHQL_TOPICS_FETCH_COUNT}) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Gets all repos for a user.
 * @returns A promise that resolves to an array of repos.
 */
async function getRepos(): Promise<GQLRepo[]> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GRAPHQL_QUERY }),
    next: { revalidate: 3600 },
  });

  const { data } = await res.json();
  const repos: GQLRepo[] = data.user.repositories.nodes;

  return repos.filter((repo) =>
    repo.repositoryTopics.nodes.some((node) => node.topic.name === "portfolio"),
  );
}

/**
 * A component that displays projects dynamically through GitHub's API.
 *
 * @returns The JSX element representing the component.
 */
export default async function Projects() {
  const repos = await getRepos();

  return (
    <section id="projects">
      <h2 className="m-5 mt-50 font-mono text-5xl text-center glow-1">
        Featured Projects
      </h2>

      <ul
        className={
          "m-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px] mx-auto"
        }
      >
        {repos.map((repo) => (
          <li key={repo.name} className="min-w-[80px] flex justify-center">
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "flex flex-col rounded-md overflow-hidden " +
                "border border-white/10 hover:border-white/30 " +
                "transition-colors items-center justify-start bg-card"
              }
            >
              <img
                src={
                  repo.usesCustomOpenGraphImage
                    ? repo.openGraphImageUrl
                    : PLACEHOLDER_IMAGE
                }
                alt={repo.name}
                className="w-full aspect-[2/1] object-cover rounded-t-md"
              />
              <div className="p-3 w-full flex flex-col gap-2">
                <h3 className="font-mono text-2xl">{repo.name}</h3>
                <p className="text-sm text-foreground-dim">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center gap-3 text-xs text-foreground-dim mt-1">
                  {repo.primaryLanguage && (
                    <span className="flex items-center gap-1">
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.primaryLanguage.color }}
                      />
                      {repo.primaryLanguage.name}
                    </span>
                  )}
                  {repo.stargazerCount > 0 && (
                    <span className="flex items-center gap-1">
                      ★ {repo.stargazerCount}
                    </span>
                  )}
                </div>
                {repo.repositoryTopics.nodes.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {repo.repositoryTopics.nodes
                      .filter((n) => n.topic.name !== "portfolio")
                      .map((n) => (
                        <span
                          key={n.topic.name}
                          className="px-2 py-0.5 rounded text-xs bg-white/10 text-foreground-dim"
                        >
                          {n.topic.name}
                        </span>
                      ))}
                  </div>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
