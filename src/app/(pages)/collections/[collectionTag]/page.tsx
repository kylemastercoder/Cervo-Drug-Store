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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  IconColumns2,
  IconColumns3,
  IconLayoutBottombar,
} from "@tabler/icons-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductsContent from "@/components/landing-page/products";
import Footer from "@/components/landing-page/footer";

const Collection = () => {
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
                Anti-Diarrhea Medicines
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-4 gap-10 mt-5">
          <div className="col-span-1">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Filter:</p>
              <p className="text-sm font-semibold underline">Reset</p>
            </div>
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">
                  AVAILABILITY
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        In stock (3)
                      </label>
                    </div>
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Out of stock (0)
                    </label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md">PRICE</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">The highest price is ₱180.00</p>
                  <div className="flex items-center gap-3 px-1">
                    <div>
                      <Label>From:</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div>
                      <Label>To:</Label>
                      <Input type="number" placeholder="180.00" />
                    </div>
                  </div>
                  <Slider
                    className="mt-5"
                    defaultValue={[33]}
                    max={100}
                    step={1}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-span-3">
            <div className="bg-[#EEEEEE] flex justify-between items-center rounded-lg py-2 px-5 shadow-md border">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <IconColumns3 color="black" />
                </Button>
                <Button variant="ghost" size="sm">
                  <IconColumns2 color="gray" />
                </Button>
                <Button variant="ghost" size="sm">
                  <IconLayoutBottombar color="gray" />
                </Button>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  <Label>Sort by:</Label>
                  <Select>
                    <SelectTrigger className="bg-white w-[180px]">
                      <SelectValue placeholder="Featured" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Featured">Featured</SelectItem>
                      <SelectItem value="Best Selling">Best Selling</SelectItem>
                      <SelectItem value="Alphabetically, A-Z">Alphabetically, A-Z</SelectItem>
                      <SelectItem value="Alphabetically, Z-A">Alphabetically, Z-A</SelectItem>
                      <SelectItem value="Price, Low to High">Price, Low to High</SelectItem>
                      <SelectItem value="Price, High to Low">Price, High to Low</SelectItem>
                      <SelectItem value="Date, Old to New">Date, Old to New</SelectItem>
                      <SelectItem value="Date, New to Old">Date, New to Old</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="font-semibold text-muted-foreground">4 Products</p>
              </div>
            </div>
            <ProductsContent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
