export default function Navbar() {
  const aStyle =
    "text-[var(--color-foreground-dim)] " +
    "transition-[filter,color] duration-200 " +
    "hover:text-[var(--color-foreground)] " +
    "hover:glow-1";

  return (
    <nav className="flex justify-center text-3xl font-mono">
      <ul className="m-5 flex flex-wrap justify-center gap-6 mx-auto">
        <li>
          <a href="#home" className={aStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={aStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={aStyle}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className={aStyle}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className={aStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
