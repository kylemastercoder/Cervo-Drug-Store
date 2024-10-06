import Chatbot from "@/components/landing-page/chatbot";
import Navbar from "@/components/landing-page/navbar";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IconHeart, IconTrashXFilled, IconX } from "@tabler/icons-react";
import ProductsContent from "@/components/landing-page/products";
import Footer from "@/components/landing-page/footer";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const Cart = () => {
  return (
    <div className="flex relative min-h-screen w-full flex-col">
      <Chatbot />
      <Navbar />
      <div className="px-4 md:px-60 py-5 mt-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-[16px]" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[16px]">
                Your Shopping Cart
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="bg-[#eeeeee] flex justify-between mt-5 items-center rounded-lg py-3 px-5 shadow-md border">
          <p className="font-semibold text-lg">Shopping Cart</p>
        </div>
        <div className="flex justify-between mt-5 items-center rounded-lg py-3">
          <Table className="border">
            <TableHeader>
              <TableRow className="border border-zinc-400">
                <TableHead className="w-[100px] border-r border-zinc-400"></TableHead>
                <TableHead className="w-[100px] border-r border-zinc-400"></TableHead>
                <TableHead className="border-r border-zinc-400">
                  Product
                </TableHead>
                <TableHead className="border-r border-zinc-400">
                  Price
                </TableHead>
                <TableHead className="border-r border-zinc-400">
                  Quantity
                </TableHead>
                <TableHead className="border-r border-zinc-400">
                  Subtotal
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border border-zinc-400">
              <TableRow>
                <TableCell>
                  <IconTrashXFilled color="red" />
                </TableCell>
                <TableCell>
                  <Image
                    src="/featured/forti.webp"
                    alt="Product"
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell className="flex flex-col">
                  <p className="font-semibold">Forti-D 800 - 30s IU Capsule</p>
                  <p className="font-semibold text-sm text-muted-foreground">
                    Vitamins / Supplements
                  </p>
                </TableCell>
                <TableCell>₱172.50</TableCell>
                <TableCell>
                  <div className="flex items-center border w-40 bg-white py-2.5 px-5 gap-5">
                    <MinusIcon color="gray" />
                    <input
                      type="text"
                      value={4}
                      className="border-none outline-none text-center w-10"
                    />
                    <PlusIcon color="gray" />
                  </div>
                </TableCell>
                <TableCell>₱690.00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter className="border border-zinc-400">
              <TableRow>
                <TableCell colSpan={5}>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Coupon Code" className="w-[200px]" />
                    <Button variant="primary">Apply Coupon</Button>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="primary" className="w-full">
                    Update Cart
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div className="flex justify-between mt-2 w-[30%] items-center rounded-lg py-3">
          <Table className="border">
            <TableBody className="border border-zinc-400">
              <TableRow className="border border-zinc-400">
                <TableCell className="font-semibold">Subtotal</TableCell>
                <TableCell>₱690.00</TableCell>
              </TableRow>
              <TableRow className="border border-zinc-400">
                <TableCell className="text-[#437634] font-semibold">Total</TableCell>
                <TableCell className="text-[#437634] font-semibold">₱690.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Button variant="primary">Proceed To Checkout</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
