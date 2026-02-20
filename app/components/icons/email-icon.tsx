import { IconBase, IconProps } from "./svg";

/**
 * An icon representing an email.
 *
 * @param {IconProps} props - The props for the icon.
 *
 * @returns A JSX element representing the icon.
 */
export function EmailIcon(props: IconProps) {
  return (
    <IconBase {...props} viewBox="2 4 20 16">
      <path
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IconBase>
  );
}
