"use client";

import { getCategoriesNavbar } from "@/actions/category";
import { Categories } from "@prisma/client";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const NavLinks = () => {
  const [items, setItems] = useState<Categories[]>([]);
  useEffect(() => {
    const fetchPromotions = async () => {
      const response = await getCategoriesNavbar();
      if (response.data) {
        setItems(response.data);
      } else {
        toast.error(response.error || "An error occurred");
      }
    };

    fetchPromotions();
  }, []);
  const subItems = [
    "Specialty Medicines",
    "Track Your Order",
    "FAQs",
    "Blogs & Announcements",
  ];
  return (
    <div className="flex items-center gap-10">
      {items.map((item) => (
        <Link
          key={item.id}
          className="flex items-center font-semibold gap-2"
          href="#"
        >
          <span>{item.name}</span>
          <IconChevronDown color="black" size={14} />
        </Link>
      ))}
      {subItems.map((item, index) => (
        <Link
          key={index}
          className="flex items-center gap-2 font-semibold"
          href="/"
        >
          <span>{item}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
