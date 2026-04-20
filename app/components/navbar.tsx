export default function Navbar() {
  const aStyle =
    "text-[var(--color-foreground-dim)] " +
    "transition-[filter,color] duration-200 " +
    "hover:text-[var(--color-foreground)] " +
    "hover:glow-1";

  return (
    <nav
      className={
        "flex justify-center text-3xl font-mono w-full " +
        "sticky top-0 z-50 backdrop-filter backdrop-blur-[2px] " +
        "[text-shadow:0_2px_16px_rgba(0,0,0,0.8)] bg-black/40"
      }
    >
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
