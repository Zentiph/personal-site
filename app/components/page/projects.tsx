import {
  DEFAULT_H2,
  DEFAULT_P,
  GITHUB_USERNAME,
  REPO_FILTER_TOPIC,
  VERTICAL_CONTAINER,
} from "@/app/config";
import RepoCard, { Repo } from "../repo-card";

const MINUTES = 60;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

const REVALIDATE_EVERY = 1 * DAYS;

const GRAPHQL_REPO_FETCH_COUNT = 50;
const GRAPHQL_TOPICS_FETCH_COUNT = 10;
const GRAPHQL_QUERY = `#graphql
  query {
    search(
      query: "user:${GITHUB_USERNAME} topic:${REPO_FILTER_TOPIC}",
      type: REPOSITORY,
      first: ${GRAPHQL_REPO_FETCH_COUNT}
    ) {
      nodes {
        ... on Repository {
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

// some hard-coded repo info in case the API call fails.
const FIZZBUZZ_REPO_INFO: Repo = {
  name: "FizzBuzz",
  description:
    "User-focused Discord bot made for fun and interactive activities.",
  url: "https://github.com/Zentiph/FizzBuzz",
  openGraphImageUrl:
    "https://repository-images.githubusercontent.com/884610230/274191cf-2f8a-48bf-9268-8b3df606270a",
  usesCustomOpenGraphImage: true,
  primaryLanguage: {
    name: "Python",
    color: "#3572A5",
  },
  // placeholders
  stargazerCount: 0,
  repositoryTopics: {
    nodes: [],
  },
};
const IRONCLAD_REPO_INFO: Repo = {
  name: "ironclad",
  description:
    "ironclad helps developers write defensive, self-documenting Python code.",
  url: "https://github.com/Zentiph/ironclad",
  openGraphImageUrl:
    "https://repository-images.githubusercontent.com/1051859165/81bfe995-0630-4a23-a9f5-16c2b37a5816",
  usesCustomOpenGraphImage: true,
  primaryLanguage: {
    name: "Python",
    color: "#3572A5",
  },
  // placeholders
  stargazerCount: 0,
  repositoryTopics: {
    nodes: [],
  },
};
const PERSONAL_SITE_REPO_INFO: Repo = {
  name: "personal-site",
  description:
    "My portfolio site, showcasing some featured projects and my developer skillset.",
  url: "https://github.com/Zentiph/personal-site",
  openGraphImageUrl:
    "https://repository-images.githubusercontent.com/1161987468/20cd10c8-d1f0-4ba2-9fd0-fa7b605dbddf",
  usesCustomOpenGraphImage: true,
  primaryLanguage: {
    name: "TypeScript",
    color: "#3178C6",
  },
  // placeholders
  stargazerCount: 0,
  repositoryTopics: {
    nodes: [],
  },
};

/**
 * Gets all repos for a user.
 * @returns A promise that resolves to an array of repos.
 */
async function getRepos(): Promise<Repo[] | null> {
  const token = process.env.GITHUB_API_TOKEN;
  if (!token) {
    console.error("Missing GITHUB_API_TOKEN");
    return null;
  }

  let res: Response;
  try {
    res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GRAPHQL_QUERY }),
      next: { revalidate: REVALIDATE_EVERY },
    });
  } catch (error) {
    console.error(error);
    return null;
  }

  if (!res.ok) {
    console.error(res.status, res.statusText);
    return null;
  }

  const { data } = await res.json();
  if (!data?.search?.nodes) {
    console.error(
      "Missing repository nodes data from GitHub API;" +
        " Likely caused by invalid token",
    );
    return null;
  }

  return data.search.nodes;
}

/**
 * A component that displays projects dynamically through GitHub's API.
 *
 * @returns The JSX element representing the component.
 */
export default async function Projects() {
  const repos = await getRepos();

  return (
    <section id="projects" className={VERTICAL_CONTAINER}>
      <h2 className={DEFAULT_H2}>Featured Projects</h2>

      <p className={DEFAULT_P}>
        Here are some of my favorite projects I've worked on in my free time.
      </p>

      <ul
        className={
          "m-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px] mx-auto"
        }
      >
        {repos ? (
          repos.map((repo) => (
            <li key={repo.name}>
              <RepoCard repo={repo} />
            </li>
          ))
        ) : (
          <>
            <li>
              <RepoCard repo={FIZZBUZZ_REPO_INFO} />
            </li>
            <li>
              <RepoCard repo={IRONCLAD_REPO_INFO} />
            </li>
            <li>
              <RepoCard repo={PERSONAL_SITE_REPO_INFO} />
            </li>
          </>
        )}
      </ul>
    </section>
  );
}
