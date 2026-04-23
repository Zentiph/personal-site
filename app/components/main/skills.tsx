import DevTools from "./dev-tools";
import Frameworks from "./frameworks";
import Languages from "./languages";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="m-5 mt-30 font-mono text-5xl text-center glow-1">
        Skills
      </h2>

      <p className="m-3 text-[1.3rem] text-center">
        I've worked with a wide range of languages and tools, and I'm always
        eager to learn new ones. Below is a list of my familiar languages,
        frameworks, and developer tools.
      </p>

      <Languages />
      <Frameworks />
      <DevTools />
    </section>
  );
}
