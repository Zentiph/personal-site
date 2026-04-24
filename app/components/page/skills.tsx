import {
  DEFAULT_H2,
  DEFAULT_P,
  VERTICAL_CONTAINER,
} from "@/app/tailwind-styles";
import DevTools from "./dev-tools";
import Frameworks from "./frameworks";
import Languages from "./languages";

export default function Skills() {
  return (
    <section id="skills" className={VERTICAL_CONTAINER}>
      <h2 className={DEFAULT_H2}>Skills</h2>

      <p className={DEFAULT_P}>
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
