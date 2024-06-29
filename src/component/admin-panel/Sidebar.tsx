"use client";

import { MdDashboard } from "react-icons/md";
import Image from "next/image";
import logo from "../../../public/logo.jpg";

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-slate-500 w-[300px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Company Logo" className="size-12 rounded-lg" />
        <h2 className="text-[20px] font-semibold">Brave Coder bd</h2>
      </div>
    </div>
  );
};

export default Sidebar;
