import BadgeIcon, { BadgeIconProps } from "./icons/badge-icon";

type BadgeListProps = {
  readonly badgeIcons?: BadgeIconProps[];
};

export default function BadgeList({ badgeIcons }: BadgeListProps) {
  const liStyle = "min-w-[80px] flex justify-center";

  return (
    <ul className="m-5 flex flex-wrap justify-center gap-6 max-w-[600px] mx-auto">
      {badgeIcons?.map((badgeIcon) => (
        <li key={badgeIcon.imgSrc} className={liStyle}>
          <BadgeIcon {...badgeIcon} />
        </li>
      ))}
    </ul>
  );
}
