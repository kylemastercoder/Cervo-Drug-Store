/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Link from "next/link";

export type PromotionColumn = {
  id: string;
  promotion: string;
  isFeatured: boolean;
  createdAt: string;
};

export const columns: ColumnDef<PromotionColumn>[] = [
  {
    accessorKey: "promotion",
    header: "Promotion",
    cell: ({ row }) => (
      <Link className="cursor-pointer font-semibold text-orange-600" href={row.original.promotion}>{row.original.promotion}</Link>
  )
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
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
