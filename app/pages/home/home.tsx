import "./home.css";

export default function Home() {
  return (
    <main>
      <h1>Gavin Borne</h1>
      <ul className="icon-links">
        <li>
          <a href="/resume.pdf">
            <img src="/resume.svg" alt="Resume" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Zentiph">
            <img src="/github.svg" alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/gavinborne">
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
        </li>
      </ul>
      <p>Portfolio site (WIP)</p>
    </main>
  );
}
