"use client"

import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";



function SideNav () {
    const MenuOptions = [
        {
            id: 1,
            name: "Dashboard",
            icon:PanelsTopLeft,
            path: "/dashboard"
        },
        {
            id: 2,
            name: "Create New",
            icon:FileVideo,
            path: "/dashboard/create-new"
        },
        {
            id: 3,
            name: "Upgrade",
            icon:ShieldPlus,
            path: "/dashboard/upgrade"
        },
        {
            id: 4,
            name: "Account",
            icon:CircleUser,
            path: "/dashboard/account"
        },
    ]
    const pathname = usePathname();
  return(
    <div className="w-64 h-screen shadow-md p-5">
        <div className="grid gap-5">
            {MenuOptions.map((item,index) => (
                <Link href={item.path} key={index}>
                <div className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${pathname === item.path ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`} key={item.id}>
                    <item.icon/>
                    <h2>{item.name}</h2>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
};

export default SideNav;
