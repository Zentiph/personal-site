type BadgeIconProps = {
  imgSrc: string;
  text: string;
  className?: string;
};

export default function BadgeIcon({ imgSrc, text, className }: BadgeIconProps) {
  const cls = `flex flex-col items-center gap-2 ${className}`;
  return (
    <div className={cls}>
      <img src={imgSrc} alt={text} className="h-12 w-12 object-contain" />
      <span className="text-base">{text}</span>
    </div>
  );
}
