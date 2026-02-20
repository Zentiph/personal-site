import { EmailIcon } from "@/app/components/icons/email-icon";
import { GitHubIcon } from "@/app/components/icons/github-icon";
import { LinkedInIcon } from "@/app/components/icons/linkedin-icon";
import { ResumeIcon } from "../components/icons/resume-icon";

export default function Home() {
  const iconLinkStyle =
    "flex flex-col items-center gap-2" +
    "text-[var(--color-foreground-dim)] " +
    "transition-[filter,color] duration-250 " +
    "hover:text-[var(--color-foreground)] " +
    "hover:[filter:drop-shadow(0_0_4px_currentColor)]";

  return (
    <main>
      <h1
        className="m-3 mt-20 font-mono text-6xl text-center
                   [filter:drop-shadow(0_0_16_currentColor)]"
      >
        Gavin Borne
      </h1>
      <p className="m-3 text-[1.75rem] text-center text-foreground-dim">
        Computer Science Student
      </p>

      <ul className="m-8 flex justify-center gap-6">
        <li>
          <a
            href="https://github.com/Zentiph"
            className={iconLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-12 w-12" />
            <span className="text-sm">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf"
            className={iconLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ResumeIcon className="h-12 w-12" />
            <span className="text-sm">Resume</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/gavin-borne"
            className={iconLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-12 w-12" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:gavin.bor0925@gmail.com"
            className={iconLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="h-12 w-12" />
            <span className="text-sm">Email</span>
          </a>
        </li>
      </ul>

      <p className="text-[1.25rem]">The</p>
    </main>
  );
}
