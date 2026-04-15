import BadgeIcon from "../icons/badge-icon";

type FrameworksProps = {
  readonly className?: string;
};

/**
 * A component that displays a list of programming frameworks.
 *
 * @param {string} [props.className] - Additional CSS classes for the component.
 *
 * @returns The JSX element representing the component.
 */
export default function Frameworks({ className }: FrameworksProps) {
  const ulStyle = "m-5 flex flex-wrap justify-center gap-6 max-w-[600px] mx-auto";
  const liStyle = "min-w-[80px] flex justify-center";

  return (
    <section className={className}>
      <h3 className="m-5 mt-20 font-mono text-3xl text-center glow-0.5">Frameworks</h3>

      <ul className={ulStyle}>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/pytest.svg" text="Pytest" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/pillow.png" text="PIL (Pillow)" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/discord_py.png" text="discord.py" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/duke.png" text="JavaFX" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/junit.svg" text="Junit 5" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/spring_boot.svg" text="Spring Boot" />
        </li>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/angular.svg" text="Angular" />
        </li>
      </ul>
    </section>
  );
}
