"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  IconBellRinging,
  IconBrandHipchat,
  IconLogout,
  IconSearch,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between py-3.5 px-5 rounded-lg bg-zinc-50 items-center">
      <div className="capitalize font-bold text-lg">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="relative ml-auto flex-1 md:grow-0">
          <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <div className="flex items-center gap-5">
          <IconBellRinging />
          <IconBrandHipchat />
          <Button variant="ghost" size="sm">
            <IconLogout className="mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
