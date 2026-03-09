import BadgeIcon from "../icons/badge-icon";

/**
 * A component that displays a list of programming languages.
 *
 * @param {string} [className] - Additional CSS classes for the component.
 *
 * @returns The JSX element representing the component.
 */
export default function Languages({ className }: { className?: string }) {
  const ulStyle = "m-5 flex justify-center gap-6";

  return (
    <section className={className}>
      <h3 className="m-5 mt-20 font-mono text-3xl text-center glow-0.5">Languages</h3>

      <ul className={ulStyle}>
        <li>
          <BadgeIcon imgSrc="/icons/badges/python.svg" text="Python" />
        </li>
        <li>
          <BadgeIcon imgSrc="/icons/badges/java.svg" text="Java" />
        </li>
        <li>
          <BadgeIcon imgSrc="/icons/badges/c.svg" text="C" />
        </li>
        <li>
          <BadgeIcon imgSrc="/icons/badges/rust.svg" text="Rust" />
        </li>
        <li>
          <BadgeIcon imgSrc="/icons/badges/lua.svg" text="Lua" />
        </li>
        <li>
          <BadgeIcon imgSrc="/icons/badges/luau.svg" text="Luau" />
        </li>
      </ul>

      <ul className={ulStyle}>
        <li>
          <BadgeIcon imgSrc="/icons/badges/html.svg" text="HTML" />
        </li>
        <li>
          <BadgeIcon imgSrc="/icons/badges/css.svg" text="CSS" />
        </li>
        <li>
          <BadgeIcon imgSrc="/icons/badges/javascript.svg" text="JavaScript" />
        </li>
        <li>
          <BadgeIcon imgSrc="/icons/badges/typescript.svg" text="TypeScript" />
        </li>
      </ul>
    </section>
  );
}
