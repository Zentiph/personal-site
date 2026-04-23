import { Suspense } from "react";
import About from "./components/page/about";
import Avatar from "./components/page/avatar";
import LinksList from "./components/page/links-list";
import Projects from "./components/page/projects";
import Skills from "./components/page/skills";
import Navbar from "./components/navbar";

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
    <>
      <Navbar />
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <main>
          <section id="home">
            <div className="m-3 mt-30 flex flex-col items-center text-center">
              <Avatar src="/me.jpeg" alt="Gavin Borne" />
              <h1 className="m-3 font-mono text-8xl text-center glow-4">
                Gavin Borne
              </h1>
              <p className="m-3 text-[1.75rem] text-center text-foreground-dim">
                Full-Stack Developer
              </p>
            </div>

            <LinksList className="m-8 flex justify-center gap-6" />
          </section>

          <About />

          <Suspense
            fallback={
              <div className="m-3 mt-30 text-[1.3rem] text-center">
                (Fetching project data from GitHub, please wait...)
              </div>
            }
          >
            <Projects />
          </Suspense>

          <Skills />
        </main>

        <footer className="m-3 mt-20 text-[1rem] text-center text-foreground-dim">
          <p>&copy; {new Date().getFullYear()} Gavin Borne</p>
          <p>
            Dev icons primarily obtained from{" "}
            <a href="https://devicon.dev/" className="link">
              devicon.dev
            </a>
            {""}. Other icons obtained from various sources.
          </p>
        </footer>
      </div>
    </>
  );
}
