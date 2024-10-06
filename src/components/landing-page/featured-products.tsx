import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { IconHeart } from "@tabler/icons-react";

const items = [
  {
    imageUrl: "/featured/lotion.webp",
    name: "Myra Lotion Whitening 400 ml",
    price: "₱365.80",
    discountedPrice: "₱326.50",
    sale: "10",
  },
  {
    imageUrl: "/featured/decolgen.webp",
    name: "Decolgen Forte Caplet - 500 mg",
    price: "₱150.00",
    discountedPrice: "₱120.00",
    sale: "20",
  },
  {
    imageUrl: "/featured/myra.webp",
    name: "Myra E 400 - 20s IU Capsule",
    price: "₱367.25",
    discountedPrice: "₱293.75",
    sale: "20",
  },
  {
    imageUrl: "/featured/forti.webp",
    name: "Forti-D 800 - 30s IU Capsule",
    price: "₱217.50",
    discountedPrice: "₱172.50",
    sale: "20",
  },
  {
    imageUrl: "/featured/alaxan.webp",
    name: "Alaxan FR Capsule - 200 mg/325 mg",
    price: "₱170.00",
    discountedPrice: "₱135.00",
    sale: "20",
  },
];
const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {items.map((item, index) => (
        <div className="pt-5" key={index}>
          <div className="bg-white shadow-lg relative w-full h-[300px]">
            <Image
              src={item.imageUrl}
              alt="Featured"
              fill
              className="w-full h-full"
            />
            <div className="absolute top-3 flex items-start gap-1 left-2 px-2.5 py-4 rounded-full bg-[#437634]">
              <p className="text-white font-black text-xl">
                {item.sale}
              </p>
              <div className="flex gap-0 mt-1 flex-col">
                <p className="m-0 text-[9px] text-white">%</p>
                <p className="m-0 text-[9px] font-semibold text-white">OFF</p>
              </div>
            </div>
          </div>
          <p className="mt-3 font-semibold">{item.name}</p>
          <div className="flex items-center gap-1 mt-2 text-sm">
            <p className="font-semibold">{item.discountedPrice}</p>
            <p className="text-muted-foreground line-through">{item.price}</p>
          </div>
          <div className="flex items-center mt-2">
            <Button variant="primary" className="w-full">
              Add To Cart
            </Button>
            <Button variant="ghost" size="icon" className="w-14 p-0">
              <IconHeart color="#437634" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
