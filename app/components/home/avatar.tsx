import Image from "next/image";

type AvatarProps = {
  readonly src: string;
  readonly alt: string;
  readonly height?: number;
  readonly width?: number;
};

/**
 * A component that displays an avatar.
 * @param {string} [props.src] - The source of the avatar image.
 * @param {string} [props.alt] - The alternative text for the avatar image.
 * @param {number} [props.height=128] - The height of the avatar in pixels.
 * @param {number} [props.width=128] - The width of the avatar in pixels.
 */
export default function Avatar({ src, alt, height = 128, width = 128 }: AvatarProps) {
  return (
    <div
      style={{ height, width }}
      className="m-3 shrink-0 relative overflow-hidden rounded-full"
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-full"
      />
    </div>
  );
}
