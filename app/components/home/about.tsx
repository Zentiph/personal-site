type AboutProps = {
  readonly className?: string;
};

/**
 * The about section of the page.
 *
 * @param {string} [props.className] - Additional CSS classes for the component.
 *
 * @returns A JSX element representing the component.
 */
export default function About({ className }: AboutProps) {
  const p_style = "m-3 text-[1.3rem] text-center";

  return (
    <section className={className} id="about">
      <h2 className="m-5 mt-50 font-mono text-5xl text-center glow-1">About</h2>

      <p className={p_style}>
        Hi there! I'm <strong>Gavin</strong>, and I'm a second year computer
        science student at RIT, though I started programming long before my
        enrollment. I've primarily focused on <strong>back-end</strong>{" "}
        development, but I enjoy <strong>front-end</strong> and{" "}
        <strong>full-stack</strong> development as well. I've worked with a wide
        range of languages and tools, and I'm always eager to learn new ones.
      </p>

      <p className={p_style}>
        All of my projects and programming work traces back to a{" "}
        <strong>love of learning</strong> and <strong>exploration</strong>. I
        enjoy not just the technical aspects of programming, but also the
        creative and architectural aspects of it as well. The task of not just
        writing code but designing the shape and structure of a project, and how
        individual pieces, when arranged effectively, can come together to build
        a whole, is what I love.
      </p>
    </section>
  );
}
