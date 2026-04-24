import { DEFAULT_H3 } from "@/app/tailwind-styles";
import BadgeList from "../badge-list";

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
  return (
    <section className={className}>
      <h3 className={DEFAULT_H3}>Frameworks</h3>

      <BadgeList
        badgeIcons={[
          {
            imgSrc: "/icons/badges/pytest.svg",
            text: "Pytest",
          },
          {
            imgSrc: "/icons/badges/pillow.png",
            text: "PIL (Pillow)",
          },
          {
            imgSrc: "/icons/badges/discord_py.png",
            text: "discord.py",
          },
          {
            imgSrc: "/icons/badges/duke.png",
            text: "JavaFX",
          },
          {
            imgSrc: "/icons/badges/junit.svg",
            text: "Junit 5",
          },
          {
            imgSrc: "/icons/badges/spring_boot.svg",
            text: "Spring Boot",
          },
          {
            imgSrc: "/icons/badges/angular.svg",
            text: "Angular",
          },
        ]}
      />
    </section>
  );
}
