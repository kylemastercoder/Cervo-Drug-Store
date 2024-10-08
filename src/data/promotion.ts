/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PromotionValidation } from "@/lib/validators";
import { z } from "zod";
import { toast } from "sonner";
import {
  createPromotion,
  deletePromotion,
  getAllPromotion,
  updatePromotion,
} from "@/actions/promotion";

export function useGetPromotions() {
  return useQuery({
    queryFn: async () => getAllPromotion(),
    queryKey: ["promotions"],
  });
}

export function useSavePromotion(initialData?: any) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: z.infer<typeof PromotionValidation>) => {
      if (initialData) {
        return updatePromotion(values, initialData.id);
      } else {
        return createPromotion(values);
      }
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["promotions"] });
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}

export function useDeletePromotion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: string) => {
      return deletePromotion(userId);
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["promotions"] });
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}
