"use client";

import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";

import Image from "next/image";
import logo from "../../../public/logo.jpg";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: <RiShoppingCart2Line />,
    href: "/admin/products",
  },
  {
    title: "Products",
    icon: <MdManageAccounts />,
    href: "#",
  },
  {
    title: "Transctions",
    icon: <GrTransaction />,
    href: "#",
  },
  {
    title: "Products",
    icon: <IoAnalytics />,
    href: "#",
  },
  {
    title: "Products",
    icon: <IoSettings />,
    href: "#",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="w-[300px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Company Logo" className="size-12 rounded-lg" />
        <h2 className="text-[20px] font-semibold">Brave Coder bd</h2>
      </div>
      <ul className="space-y-4 mt-6">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover: bg-orange-600 hover:text-white ${
              pathName === menu.href
                ? "bg-orange-600 hover:text-white"
                : "bg-lime-500"
            }`}
          >
            <div className="text-[20px] font-semibold">{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
