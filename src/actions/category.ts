/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import db from "@/lib/db";
import { CategoryValidation } from "@/lib/validators";
import { z } from "zod";

export const getAllCategories = async () => {
  try {
    const data = await db.categories.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!data) {
      return { error: "No categories found." };
    }

    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};

export const createCategory = async (
  values: z.infer<typeof CategoryValidation>
) => {
  const validatedField = CategoryValidation.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const { name, image } = validatedField.data;

  try {
    const data = await db.categories.create({
      data: {
        name,
        image,
      },
    });

    return { success: "Category created successfully", data };
  } catch (error: any) {
    return {
      error: `Failed to create category. Please try again. ${
        error.message || ""
      }`,
    };
  }
};

export const updateCategory = async (
  values: z.infer<typeof CategoryValidation>,
  categoryId: string
) => {
  if (!categoryId) {
    return { error: "Category ID is required." };
  }

  const validatedField = CategoryValidation.safeParse(values);

  if (!validatedField.success) {
    const errors = validatedField.error.errors.map((err) => err.message);
    return { error: `Validation Error: ${errors.join(", ")}` };
  }

  const { name, image } = validatedField.data;

  try {
    const data = await db.categories.update({
      where: {
        id: categoryId,
      },
      data: {
        name,
        image,
      },
    });

    return { success: "Category updated successfully", data };
  } catch (error: any) {
    return {
      error: `Failed to update category. Please try again. ${
        error.message || ""
      }`,
    };
  }
};

export const deleteCategory = async (categoryId: string) => {
  if (!categoryId) {
    return { error: "Category ID is required." };
  }

  try {
    const data = await db.categories.delete({
      where: {
        id: categoryId,
      },
    });

    return { success: "Category deleted successfully", data };
  } catch (error: any) {
    return {
      error: `Failed to delete category. Please try again. ${
        error.message || ""
      }`,
    };
  }
};
