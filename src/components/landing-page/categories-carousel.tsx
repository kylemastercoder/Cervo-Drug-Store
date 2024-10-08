"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Categories } from "@prisma/client";
import { toast } from "sonner";
import { getAllCategories } from "@/actions/category";

const CategoriesCarousel = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    const fetchPromotions = async () => {
      const response = await getAllCategories();
      if (response.data) {
        setCategories(response.data);
      } else {
        toast.error(response.error || "An error occurred");
      }
    };

    fetchPromotions();
  }, []);
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-6">
        {categories.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-4 md:basis-1/2 lg:basis-[15%]"
          >
            <div className="p-3">
              <Image src={item.image} alt="Category" width={300} height={300} />
              <p className="text-center font-semibold">{item.name}</p>
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
