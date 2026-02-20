import { GitHubIcon } from "@/app/components/icons/github-icon";
import { PDFIcon } from "@/app/components/icons/pdf-icon";
import { EmailIcon } from "@/app/components/icons/email-icon";
import { LinkedInIcon } from "@/app/components/icons/linkedin-icon";

export default function Home() {
  return (
    <main>
      <h1 className="m-3 mt-20 font-mono text-6xl text-center">Gavin Borne</h1>
      <p className="m-3 text-[1.75rem] text-center text-foreground-dim">Computer Science Student</p>

      <ul className="m-8 flex justify-center gap-6">
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
