import Image from "next/image";
import { REPO_FILTER_TOPIC } from "../config";

export type Language = {
  name: string;
  color: string;
};

export type Repo = {
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

type RepoCardProps = {
  readonly repo: Repo;
};

const PLACEHOLDER_IMAGE = "/project_banner_placeholder.png";
const REPO_IMAGE_WIDTH = 640;
const REPO_IMAGE_HEIGHT = 320;

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="min-w-[80px] flex justify-center">
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "flex flex-col rounded-md overflow-hidden border border-white/10 " +
          "hover:border-white/30 focus-visible:border-white/30 " +
          "transition-colors items-center justify-start bg-card"
        }
      >
        <Image
          src={
            repo.usesCustomOpenGraphImage
              ? repo.openGraphImageUrl
              : PLACEHOLDER_IMAGE
          }
          alt={repo.name}
          width={REPO_IMAGE_WIDTH}
          height={REPO_IMAGE_HEIGHT}
          className="w-full aspect-[2/1] object-cover rounded-t-md"
        />

        <div className="p-3 w-full flex flex-col gap-2">
          <h3 className="font-mono text-2xl">{repo.name}</h3>
          <p className="text-sm text-foreground-dim">
            {repo.description || "No description provided."}
          </p>

          <div
            className={
              "flex items-center gap-3 text-xs text-foreground-dim mt-1"
            }
          >
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
                .filter((node) => node.topic.name !== REPO_FILTER_TOPIC)
                .map((node) => (
                  <span
                    key={node.topic.name}
                    className="px-2 py-0.5 rounded text-xs bg-white/10 text-foreground-dim"
                  >
                    {node.topic.name}
                  </span>
                ))}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
