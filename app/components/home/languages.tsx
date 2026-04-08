import BadgeIcon from "../icons/badge-icon";

type LanguagesProps = {
  readonly className?: string;
};

/**
 * A component that displays a list of programming languages.
 *
 * @param {string} [props.className] - Additional CSS classes for the component.
 *
 * @returns The JSX element representing the component.
 */
export default function Languages({ className }: LanguagesProps) {
  const ulStyle =
    "m-5 flex flex-wrap justify-center gap-6 max-w-[600px] mx-auto";
  const liStyle = "min-w-[80px] flex justify-center";

  return (
    <section className={className}>
      <h3 className="m-5 mt-20 font-mono text-3xl text-center glow-0.5">
        Languages
      </h3>

      <ul className={ulStyle}>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/python.svg" text="Python" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/java.svg" text="Java" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/c.svg" text="C" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/rust.svg" text="Rust" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/lua.svg" text="Lua" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/luau.svg" text="Luau" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/html.svg" text="HTML" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/css.svg" text="CSS" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/javascript.svg" text="JavaScript" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/typescript.svg" text="TypeScript" />
        </li>
      </ul>
    </section>
  );
}
