"use client";

import { Typography } from "./Typography";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { HomeIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: <HomeIcon />,
  },
  // {
  //   name: "Ongoing TXs",
  //   href: "/txs/ongoing",
  //   icon: <RocketLaunchIcon />,
  // },
];

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col w-[240px] shrink-0 border-r bg-white border-[#E8ECEF]">
      <div className="flex items-center pl-4 w-full h-16">
        <Image src="/logo.svg" alt="logo" width={138} height={36} />
      </div>
      <div className="flex flex-col">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={twMerge(
              "flex w-full h-16 items-center text-[#778CA2] relative",
              item.href === pathname ? "bg-[#F8FAFB]" : "hover:bg-[#F8FAFB]"
            )}
          >
            {item.href === pathname ? (
              <div className="absolute w-1 h-full bg-[#4D7CFE] left-0" />
            ) : null}
            <div className="flex w-4 h-4 ml-7">{item.icon}</div>
            <Typography.SMText
              className={twMerge(
                "ml-2",
                item.href === pathname && "font-medium"
              )}
            >
              {item.name}
            </Typography.SMText>
          </Link>
        ))}
      </div>
    </nav>
  );
};
