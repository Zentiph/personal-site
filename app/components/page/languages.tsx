import BadgeList from "../badge-list";

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
  return (
    <section className={className}>
      <h3 className="m-5 mt-20 font-mono text-3xl text-center glow-0.5">
        Languages
      </h3>

      <BadgeList
        badgeIcons={[
          {
            imgSrc: "/icons/badges/python.svg",
            text: "Python",
          },
          {
            imgSrc: "/icons/badges/java.svg",
            text: "Java",
          },
          {
            imgSrc: "/icons/badges/c.svg",
            text: "C",
          },
          {
            imgSrc: "/icons/badges/rust.svg",
            text: "Rust",
          },
          {
            imgSrc: "/icons/badges/lua.svg",
            text: "Lua",
          },
          {
            imgSrc: "/icons/badges/luau.svg",
            text: "Luau",
          },
          {
            imgSrc: "/icons/badges/html.svg",
            text: "HTML",
          },
          {
            imgSrc: "/icons/badges/css.svg",
            text: "CSS",
          },
          {
            imgSrc: "/icons/badges/javascript.svg",
            text: "JavaScript",
          },
          {
            imgSrc: "/icons/badges/typescript.svg",
            text: "TypeScript",
          },
        ]}
      />
    </section>
  );
}
