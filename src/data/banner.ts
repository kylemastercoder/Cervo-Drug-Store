/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createBanner,
  deleteBanner,
  getAllBanner,
  updateBanner,
} from "@/actions/banner";
import { BannerValidation } from "@/lib/validators";
import { z } from "zod";
import { toast } from "sonner";

export function useGetBanners() {
  return useQuery({
    queryFn: async () => getAllBanner(),
    queryKey: ["banners"],
  });
}

export function useSaveBanner(initialData?: any) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: z.infer<typeof BannerValidation>) => {
      if (initialData) {
        return updateBanner(values, initialData.id);
      } else {
        return createBanner(values);
      }
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["banners"] });
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}

export function useDeleteBanner() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: string) => {
      return deleteBanner(userId);
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.success);
        queryClient.invalidateQueries({ queryKey: ["banners"] });
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred");
    },
  });
}
