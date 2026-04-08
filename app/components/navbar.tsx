export default function Navbar() {
  return (
    <nav className="flex justify-center">
      <ul className="m-5 flex flex-wrap justify-center gap-6 max-w-[600px] mx-auto">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
