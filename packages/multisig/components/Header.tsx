import { usePathname } from "next/navigation";
import { Typography } from "./Typography";
import Image from "next/image";

const items = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Ongoing TXs",
    href: "/txs/ongoing",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const currentPageName = items.find((item) => item.href === pathname)?.name;

  return (
    <div className="flex items-center px-6 w-full h-16 bg-white border-b border-[#E8ECEF]">
      <Image src="/menu.svg" alt="menu" width={24} height={24} />
      <Typography.H3 className="text-[#252631] ml-4">
        {currentPageName}
      </Typography.H3>
    </div>
  );
};
