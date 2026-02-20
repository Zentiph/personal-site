import About from "../components/home/about";
import LinksList from "../components/home/links-list";

/**
 * The homepage component.
 *
 * This component renders the homepage content, including the
 * heading, subheading, and links list.
 *
 * @returns A JSX element representing the homepage content.
 */
export default function Home() {
  return (
    <main>
      <h1 className="m-3 mt-20 font-mono text-8xl text-center glow-4">Gavin Borne</h1>
      <p className="m-3 text-[1.75rem] text-center text-foreground-dim">
        Computer Science Student
      </p>

      <LinksList className="m-8 flex justify-center gap-6" />

      <About />

      <p className="text-[1.25rem]">The</p>
    </main>
  );
}
