import BadgeIcon from "../icons/badge-icon";

/**
 * A component that displays a list of programming frameworks.
 *
 * @param {string} [className] - Additional CSS classes for the component.
 *
 * @returns The JSX element representing the component.
 */
export default function Frameworks({ className }: { className?: string }) {
  const ulStyle = "m-5 flex flex-wrap justify-center gap-6 max-w-[600px] mx-auto";
  const liStyle = "min-w-[80px] flex justify-center";

  return (
    <section className={className}>
      <h3 className="m-5 mt-20 font-mono text-3xl text-center glow-0.5">Frameworks</h3>

      <ul className={ulStyle}>
        <li className={liStyle}>
          <BadgeIcon imgSrc="/icons/badges/" text="" />
        </li>
      </ul>
    </section>
  );
}
