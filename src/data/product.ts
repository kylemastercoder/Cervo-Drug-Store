import { getAllProducts } from "@/actions/product";
import { useQuery } from "@tanstack/react-query";

export function useGetProducts() {
  return useQuery({
    queryFn: async () => getAllProducts(),
    queryKey: ["products"],
  });
}
