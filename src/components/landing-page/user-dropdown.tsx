"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconLockFilled, IconUser, IconUserFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const UserDropdown = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 mr-14 cursor-pointer">
          <IconUser color="black" size={30} />
          <div className="flex flex-col">
            <p className="text-muted-foreground text-xs">Hello, Get Started!</p>
            <p className="font-semibold">Sign In or Create Account</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("/my-account")}>
          <IconLockFilled size={20} color="black" />
          <span className="ml-2">Sign In</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/my-account")}>
          <IconUserFilled size={20} color="black" />
          <span className="ml-2">Create Account</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
