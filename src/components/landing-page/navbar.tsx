"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import UserDropdown from "./user-dropdown";
import WishlistModal from "./wishlist-modal";
import CartSheet from "./cart-sheet";
import NavLinks from "./nav-links";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 inset-x-0 bg-white">
      <div className="flex items-center border-b border-zinc-300 px-4 py-6 md:px-60 justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={180} height={180} />
          </Link>
          <div className="flex items-center gap-3">
            <Input
              placeholder="Search Products..."
              type="search"
              className="sm:w-[300px] md:w-[500px] py-5"
            />
            <Button onClick={() => router.push("/collections/anti-diarrhea-medicines")} variant="primary" size="sm" className="py-5 px-4">
              <IconSearch color="white" size={25} />
            </Button>
          </div>
        </div>
        <div className="flex items-center">
          <UserDropdown />
          <WishlistModal />
          <CartSheet />
        </div>
      </div>
      <div className="py-5 w-full justify-center flex px-4 bg-[#f5f5f5] shadow-md">
        <NavLinks />
      </div>
    </header>
  );
};

export default Navbar;
