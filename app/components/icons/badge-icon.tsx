type BadgeIconProps = {
  imgSrc: string;
  text: string;
  className?: string;
};

export default function BadgeIcon({ imgSrc, text, className }: BadgeIconProps) {
  return (
    <div className={className}>
      <img src={imgSrc} alt={text} className="h-12 w-12 object-contain" />
      <span className="text-base">{text}</span>
    </div>
  );
}
