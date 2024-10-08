import { Heading } from "@/components/ui/heading";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "@/actions/product";
import ProductClient from "./_components/client";
import AddProduct from "./_components/add-product";

const AdminProducts = async () => {
  const queryClient = new QueryClient();

  // Prefetch the data from the server
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  // Hydrate the query data for the client
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className="grid flex-1 py-5 items-start gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <Heading
          title="Manage Products"
          description="Easily manage and organize your pharmacy's products. Add new products, view existing listings, and keep your stock updated to ensure customers have access to the medications and health products they need."
        />
        <AddProduct />
      </div>
      <HydrationBoundary state={dehydratedState}>
        <ProductClient />
      </HydrationBoundary>
    </div>
  );
};

export default AdminProducts;
