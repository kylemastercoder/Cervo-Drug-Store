"use client";

import CategoryForm from "@/components/form/category-form";
import { Button } from "@/components/ui/button";
import { IconCirclePlus } from "@tabler/icons-react";
import React, { useState } from "react";

const AddCategory = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpenCategoryModal(true)}
        size="sm"
        className="h-7 gap-1"
      >
        <IconCirclePlus className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Category
        </span>
      </Button>

      {openCategoryModal && (
        <CategoryForm
          initialData={null}
          onClose={() => setOpenCategoryModal(false)}
        />
      )}
    </>
  );
};

export default AddCategory;
