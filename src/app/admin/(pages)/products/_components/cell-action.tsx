"use client";

import { Button } from "@/components/ui/button";
import { CategoryColumn } from "./column";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useState } from "react";
import AlertModal from "@/components/ui/alert-modal";
import { useDeleteCategory } from "@/data/category";
import BannerForm from "@/components/form/banner-form";

interface CellActionProps {
  data: CategoryColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [initialData, setInitialData] = useState<CategoryColumn | null>(null);
  const { mutate: deleteCategory, isPending: isDeleting } = useDeleteCategory();

  const onDelete = async () => {
    deleteCategory(data.id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  const onUpdate = () => {
    setInitialData(data);
    setFormOpen(true);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        loading={isDeleting}
        onConfirm={onDelete}
      />
      {formOpen && (
        <BannerForm
          initialData={initialData}
          onClose={() => setFormOpen(false)}
        />
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={onUpdate}>
            <Edit className="w-4 h-4 mr-2" />
            Update
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
