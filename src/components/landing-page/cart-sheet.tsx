import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconShoppingBag } from "@tabler/icons-react";
import { Button } from "../ui/button";
import Link from "next/link";

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center gap-3">
          <IconShoppingBag size={30} color="black" />
          <div className="flex flex-col items-start justify-start">
            <p className="font-semibold">Cart Items (0)</p>
            <p className="text-sm text-muted-foreground">₱0.00</p>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart Items (0)</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-40 items-center justify-center">
          <p className="text-3xl font-semibold text-center">Your cart is empty</p>
          <Button variant="primary" className="mt-10">Continue Shopping</Button>
          <p className="text-muted-foreground mt-5">Already have an account?</p>
          <p className="font-semibold mt-1"><Link className="underline font-bold" href="/login">Login</Link> to checkout faster.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
