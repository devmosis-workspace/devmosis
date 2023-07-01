import { usePathname } from "next/navigation";
import { Typography } from "./Typography";
import { navigationItems } from "@/constants/navigationItems";

export const Header = () => {
  const pathname = usePathname();

  const currentPageName = navigationItems.find(
    (item) => item.href === pathname
  )?.name;

  return (
    <div className="flex items-center px-6 w-full h-16 bg-white border-b border-[#E8ECEF]">
      <Typography.H3 className="text-[#252631]">{currentPageName}</Typography.H3>
    </div>
  );
};
