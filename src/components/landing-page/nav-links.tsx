import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const items = [
    "Medicines & Treatments",
    "Personal Care",
    "Medical Supplies",
    "Baby & Kids",
    "Groceries",
  ];
  const subItems = [
    "Specialty Medicines",
    "Track Your Order",
    "FAQs",
    "Blogs & Announcements",
  ];
  return (
    <div className="flex items-center gap-10">
      {items.map((item, index) => (
        <Link key={index} className="flex items-center font-semibold gap-2" href="/">
          <span>{item}</span>
          <IconChevronDown color="black" size={14} />
        </Link>
      ))}
      {subItems.map((item, index) => (
        <Link key={index} className="flex items-center gap-2 font-semibold" href="/">
          <span>{item}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
