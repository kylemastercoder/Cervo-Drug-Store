import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const items = [
  {
    imageUrl: "/categories/cough.webp",
    title: "Cough & Cold",
  },
  {
    imageUrl: "/categories/pain.webp",
    title: "Pain Relievers, Fever & Flu",
  },
  {
    imageUrl: "/categories/baby.webp",
    title: "Baby & Kids",
  },
  {
    imageUrl: "/categories/vitamins.webp",
    title: "Vitamins & Supplements",
  },
  {
    imageUrl: "/categories/skin.webp",
    title: "Personal Care",
  },
  {
    imageUrl: "/categories/condom.webp",
    title: "Condoms & Lubricants",
  },
  {
    imageUrl: "/categories/home.webp",
    title: "Home Remedies",
  },
  {
    imageUrl: "/categories/antifungal.webp",
    title: "Antifungal",
  },
];

const CategoriesCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-6">
        {items.map((item, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-[15%]">
            <div className="p-3">
              <Image
                src={item.imageUrl}
                alt="Category"
                width={300}
                height={300}
              />
              <p className="text-center font-semibold">{item.title}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CategoriesCarousel;
