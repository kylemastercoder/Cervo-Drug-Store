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
import CheckoutForm from "@/components/form/checkout-form";
import { Checkbox } from "@/components/ui/checkbox";

const Checkout = () => {
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
              <BreadcrumbPage className="text-[16px]">Checkout</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="bg-[#eeeeee] flex justify-between mt-5 items-center rounded-lg py-3 px-5 shadow-md border">
          <p className="font-semibold text-lg">
            Returning Customer?{" "}
            <span className="font-semibold underline text-[#437634] cursor-pointer">
              Click here to login
            </span>
          </p>
        </div>
        <p className="mt-4 mb-2 text-sm">
          If you have a coupon code, please apply it below.
        </p>
        <div className="flex items-center gap-2">
          <Input placeholder="Coupon Code" className="w-[200px]" />
          <Button variant="primary">Apply Coupon</Button>
        </div>
        <CheckoutForm />
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
