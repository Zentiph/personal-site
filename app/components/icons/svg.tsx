import * as React from "react";

export type IconProps = {
  color?: string; // icon color
  title?: string; // accessability label
  className?: string; // additional outside control
} & Omit<React.SVGProps<SVGSVGElement>, "color">;

type IconBaseProps = IconProps & {
  viewBox?: string;
  children: React.ReactNode;
};

/**
 * A base icon component that provides common props and attributes for all icons.
 *
 * @param {IconBaseProps} props - The props for the icon.
 * @param {string} [props.color="currentColor"] - The color of the icon.
 * @param {string} [props.title] - The accessibility label for the icon.
 * @param {string} [props.className] - Additional CSS classes for the icon.
 * @param {string} [props.viewBox="0 0 24 24"] - The viewBox of the icon.
 * @param {React.ReactNode} props.children - The children of the icon.
 * @param {React.SVGProps<SVGSVGElement>} props.rest - Additional props for the icon.
 *
 * @returns A JSX element representing the icon.
 */
export function IconBase({
  color = "currentColor",
  title,
  className,
  viewBox = "0 0 24 24",
  children,
  ...rest
}: IconBaseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
      style={{ color, ...(rest.style ?? {}) }}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : "presentation"}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}
