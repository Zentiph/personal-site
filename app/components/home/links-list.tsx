import { EmailIcon } from "../icons/email-icon";
import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { ResumeIcon } from "../icons/resume-icon";

/**
 * A component that renders a list of links with icons.
 *
 * @param {string} [className] - Additional CSS classes for the component.
 *
 * @returns A JSX element representing the component.
 */
export default function LinksList({ className }: { className?: string }) {
  const iconLinkStyle =
    "flex flex-col items-center gap-2" +
    "text-[var(--color-foreground-dim)] " +
    "transition-[filter,color] duration-250 " +
    "hover:text-[var(--color-foreground)] " +
    "hover:[filter:drop-shadow(0_0_4px_currentColor)]";

  return (
    <ul className={className}>
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
  );
}
