import BadgeIcon from "../icons/badge-icon";

/**
 * A component that displays a list of development tools.
 * @param {string} [className] - Additional CSS classes for the component.
 * @returns The JSX element representing the component.
 */
export default function DevTools({ className }: { className?: string }) {
  const ulStyle = "m-5 flex flex-wrap justify-center gap-6 max-w-[600px] mx-auto";
  const liStyle = "min-w-[80px] flex justify-center";

  return (
    <section className={className}>
      <h3 className="m-5 mt-20 font-mono text-3xl text-center glow-0.5">Dev Tools</h3>

      <ul className={ulStyle}>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/vscode.svg" text="VSCode" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/git.svg" text="Git" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/github.svg" text="GitHub" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/sqlite.svg" text="SQLite" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/postgresql.svg" text="PostgreSQL" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/docker.svg" text="Docker" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/maven.svg" text="Maven" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/react.svg" text="React" />
        </li>
      </ul>
    </section>
  );
}
