import { GitHubIcon } from "@/app/components/icons/github-icon";
import "./home.css";
import { PDFIcon } from "@/app/components/icons/pdf-icon";
import { EmailIcon } from "@/app/components/icons/email-icon";
import { LinkedInIcon } from "@/app/components/icons/linkedin-icon";

export default function Home() {
  return (
    <main>
      <h1>Gavin Borne</h1>
      <p className="subtitle">Computer Science Student</p>

      <ul className="icon-links">
        <li>
          <a href="/resume.pdf">
            <PDFIcon className="h-12 w-12" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Zentiph">
            <GitHubIcon className="h-12 w-12" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/gavin-borne">
            <LinkedInIcon className="h-12 w-12" />
          </a>
        </li>
        <li>
          <a href="mailto:gavin.bor0925@gmail.com">
            <EmailIcon className="h-12 w-12" />
          </a>
        </li>
      </ul>
      <p>Portfolio site (WIP)</p>
    </main>
  );
}
