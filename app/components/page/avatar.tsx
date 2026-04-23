import Image from "next/image";

type AvatarProps = {
  readonly src: string;
  readonly alt: string;
  readonly size?: number;
};

/**
 * A component that displays an avatar.
 * @param {string} props.src - The source of the avatar image.
 * @param {string} props.alt - The alternative text for the avatar image.
 * @param {number} [props.size=256] - The size of the avatar in pixels.
 */
export default function Avatar({ src, alt, size = 256 }: AvatarProps) {
  return (
    <div
      style={{ width: size + "px", height: size + "px" }}
      className="m-3 shrink-0 relative overflow-hidden rounded-full"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={size + "px"}
        style={{ objectFit: "cover" }}
        className="rounded-full"
      />
    </div>
  );
}
