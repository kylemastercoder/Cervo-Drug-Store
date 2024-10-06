import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";
import { Input } from "../ui/input";

const WishlistModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src="/icons/WishlistIcon.png"
          alt="Wishlist"
          className="mr-3"
          width={50}
          height={50}
        />
      </DialogTrigger>
      <DialogContent className="max-w-7xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black">My Wishlist</DialogTitle>
          <DialogDescription>
            <form className="flex-1 mt-2 sm:flex-initial">
              <div className="relative">
                <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 w-full"
                />
              </div>
            </form>
            <p className="text-2xl font-bold text-black mt-3">Health Essentials For You</p>
            <p className="text-center">Discover health essentials and more on your wishlist! Start adding items now.</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default WishlistModal;
