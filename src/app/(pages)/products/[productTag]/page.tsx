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
import { IconHeart } from "@tabler/icons-react";
import ProductsContent from "@/components/landing-page/products";
import Footer from "@/components/landing-page/footer";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const ViewProduct = () => {
  return (
    <div className="flex relative min-h-screen w-full flex-col">
      <Chatbot />
      <Navbar />
      <div className="px-4 md:px-60 py-10">
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
                Forti-D 800 - 30s IU Capsule
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-2 gap-10 mt-5">
          <div className="relative w-full h-[700px]">
            <Image
              src="/featured/forti.webp"
              alt="Forti"
              fill
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="border-b pb-5 border-zinc-300">
              <div className="flex items-center justify-between">
                <p className="text-3xl font-semibold">
                  Forti-D 800 - 30s IU Capsule
                </p>
                <Button
                  variant="outline"
                  className="border-[#437634] hover:text-[#437634] text-[#437634]"
                >
                  <IconHeart className="mr-2" color="#437634" />
                  Add To Wishlist
                </Button>
              </div>
              <p className="text-2xl font-semibold mt-2">₱172.50</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Shipping calculated at checkout.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-10">
              <div className="flex items-center border py-2.5 px-5 gap-5">
                <MinusIcon color="gray" />
                <input
                  type="text"
                  value={1}
                  className="border-none outline-none text-center w-10"
                />
                <PlusIcon color="gray" />
              </div>
              <Button variant="primary" className="w-full py-6">
                Add To Cart
              </Button>
            </div>
            <p className="my-4 font-semibold text-xl">About the Product</p>
            <p>
              Forti-D is the vital vitamin because it can help keep all your 36
              vital organs healthy. How? Because our body is full of Vitamin D
              receptors which are found in cells. This allows us to process
              Vitamin D we get from the sun, food, and supplements and thereby
              helps our body organs with their functions. As such, it is
              extremely important to have a sufficient amount of Vitamin D in
              your body.
            </p>
            <p className="mt-2">
              For the prevention and treatment of Vitamin D deficiency.
            </p>
            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
              <li>Cholecalciferol</li>
              <li>Vitamin D3</li>
              <li>800 IU</li>
              <li>Vitamins / Minerals</li>
              <li>30 pcs capsules</li>
            </ul>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Senior Citizen / PWD Discount
                </AccordionTrigger>
                <AccordionContent>
                  Senior Citizen and PWD discounts are now being offered to
                  qualified customers. Documents such as Senior Citizen/PWD ID,
                  booklet and valid prescriptions are required to avail the
                  discount. Please note that the discount will not be
                  automatically applied upon checkout. Final discounted amount
                  will be sent via email or SMS once we have validated your
                  submitted requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p className="mt-4">
              Visit our{" "}
              <Link href="/faq" className="font-semibold underline">
                FAQs
              </Link>{" "}
              page for further details
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#eeeeee]">
        <div className="px-4 md:px-60 py-5 mt-5">
          <div className="bg-white flex justify-between items-center rounded-lg py-3 px-5 shadow-md border">
            <p className="font-semibold text-lg">
              You may also like this products
            </p>
          </div>
          <ProductsContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewProduct;
