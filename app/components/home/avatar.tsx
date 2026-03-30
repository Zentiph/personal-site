import Image from "next/image";

/**
 * A component that displays an avatar.
 * @param {string, string, number, number} props - The source of the avatar image, its alternative text, height, and width.
 */
export default function Avatar({
  src,
  alt,
  height = 128,
  width = 128,
}: {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}) {
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
