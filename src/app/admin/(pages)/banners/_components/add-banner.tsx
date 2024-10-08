"use client";

import BannerForm from "@/components/form/banner-form";
import { Button } from "@/components/ui/button";
import { IconCirclePlus } from "@tabler/icons-react";
import React, { useState } from "react";

const AddBanner = () => {
  const [openBannerModal, setOpenBannerModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpenBannerModal(true)}
        size="sm"
        className="h-7 gap-1"
      >
        <IconCirclePlus className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Banner
        </span>
      </Button>

      {openBannerModal && (
        <BannerForm
          initialData={null}
          onClose={() => setOpenBannerModal(false)}
        />
      )}
    </>
  );
};

export default AddBanner;
