import Image from "next/image";

type BadgeIconProps = {
  readonly imgSrc: string;
  readonly text: string;
  readonly className?: string;
  readonly width: number;
  readonly height: number;
};

/**
 * A component that displays a badge icon with an image and text.
 * @param {string} props.imgSrc - The source of the image.
 * @param {string} props.text - The text to display below the image.
 * @param {string} [props.className] - Additional CSS classes for the component.
 * @param {number} props.width - The width of the image in pixels.
 * @param {number} props.height - The height of the image in pixels.
 * @returns A JSX element representing the badge icon.
 */
export default function BadgeIcon({
  imgSrc,
  text,
  className,
  width = 48,
  height = 48,
}: BadgeIconProps) {
  const cls = `flex flex-col items-center gap-2 ${className}`;
  return (
    <div className={cls}>
      <Image
        src={imgSrc}
        width={width}
        height={height}
        alt={text}
        className="h-12 w-12 object-contain"
      />
      <span className="text-base">{text}</span>
    </div>
  );
}
