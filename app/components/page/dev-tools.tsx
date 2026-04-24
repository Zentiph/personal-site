import { DEFAULT_H3 } from "@/app/tailwind-styles";
import BadgeList from "../badge-list";

type DevToolsProps = {
  readonly className?: string;
};

/**
 * A component that displays a list of development tools.
 * @param {string} [props.className] - Additional CSS classes for the component.
 * @returns The JSX element representing the component.
 */
export default function DevTools({ className }: DevToolsProps) {
  return (
    <section className={className}>
      <h3 className={DEFAULT_H3}>Dev Tools</h3>

      <BadgeList
        badgeIcons={[
          {
            imgSrc: "/icons/badges/vscode.svg",
            text: "VSCode",
          },
          {
            imgSrc: "/icons/badges/windows11.svg",
            text: "Windows",
          },
          {
            imgSrc: "/icons/badges/linux.svg",
            text: "Linux",
          },
          {
            imgSrc: "/icons/badges/git.svg",
            text: "Git",
          },
          {
            imgSrc: "/icons/badges/github.svg",
            text: "GitHub",
          },
          {
            imgSrc: "/icons/badges/docker.svg",
            text: "Docker",
          },
          {
            imgSrc: "/icons/badges/react.svg",
            text: "React",
          },
          {
            imgSrc: "/icons/badges/maven.svg",
            text: "Maven",
          },
          {
            imgSrc: "/icons/badges/sqlite.svg",
            text: "SQLite",
          },
          {
            imgSrc: "/icons/badges/postgresql.svg",
            text: "PostgreSQL",
          },
          {
            imgSrc: "/icons/badges/datagrip.svg",
            text: "DataGrip",
          },
        ]}
      />
    </section>
  );
}
