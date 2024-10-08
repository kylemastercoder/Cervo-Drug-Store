/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ item }: { item: any }) => {
    const pathname = usePathname();
  return (
    <Link className={`py-3 px-5 flex items-center my-2 rounded-lg gap-2 hover:bg-zinc-100 ${pathname === item.path ? "bg-zinc-200 hover:bg-zinc-200" : ""}`} href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
