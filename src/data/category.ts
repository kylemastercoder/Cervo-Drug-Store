/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CategoryValidation } from "@/lib/validators";
import { z } from "zod";
import { toast } from "sonner";
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "@/actions/category";

export function useGetCategories() {
  return useQuery({
    queryFn: async () => getAllCategories(),
    queryKey: ["categories"],
  });
}

export function useSaveCategory(initialData?: any) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: z.infer<typeof CategoryValidation>) => {
      if (initialData) {
        return updateCategory(values, initialData.id);
      } else {
        return createCategory(values);
      }
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["categories"] });
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (categoryId: string) => {
      return deleteCategory(categoryId);
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["categories"] });
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}
