import { HomeIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export const navigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Ongoing TXs",
    href: "/txs/ongoing",
    icon: <RocketLaunchIcon />,
  },
];
