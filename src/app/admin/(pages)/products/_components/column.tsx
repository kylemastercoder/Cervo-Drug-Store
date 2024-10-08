/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Link from "next/link";

export type ProductColumn = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: any;
  isFeatured: boolean;
  isPrescription: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Link
        className="cursor-pointer font-semibold text-orange-600"
        href={row.original.image}
      >
        {row.original.image}
      </Link>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
