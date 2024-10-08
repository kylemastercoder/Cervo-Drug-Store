"use client";

import { DataTable } from "@/components/ui/data-table";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { columns, PromotionColumn } from "./column";
import { format } from "date-fns";
import { useGetPromotions } from "@/data/promotion";

const PromotionClient = () => {
  const { data: promotionData, error, isLoading } = useGetPromotions();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "An error occurred");
    }
  }, [error]);

  const formattedData: PromotionColumn[] =
    promotionData?.data?.map((item) => ({
      id: item.id,
      promotion: item.image,
      isFeatured: item.isFeatured,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    })) || [];

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <DataTable
        loading={isLoading}
        searchKey="promotion"
        columns={columns}
        data={formattedData}
      />
    </>
  );
};

export default PromotionClient;
