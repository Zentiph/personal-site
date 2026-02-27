export default function About({ className }: { className?: string }) {
  const p_style = "m-2 text-xl";

  return (
    <section className={className}>
      <h2 className="m-3 mt-20 font-mono text-5xl text-center glow-1">About</h2>

      <p className={p_style}>
        Hi there, I'm <strong>Gavin</strong>. I'm a computer science student at RIT,
        though I started coding long before that. I'm primarily interested in backend
        development, but I also enjoy frontend and fullstack development. I've worked
        with a wide range of languages and tools, and I'm always eager to learn new
        ones.
      </p>

      <p className={p_style}>
        All of my projects and programming work traces back to a love of learning and
        exploration. I enjoy not just the technical aspects of programming, but also the
        creative and architectural aspects of it as well. The task of not just coding
        but designing the shape and structure of a project, and how individual pieces,
        when arranged effectively, can come together to build a whole, is what I love.
      </p>
    </section>
  );
}
