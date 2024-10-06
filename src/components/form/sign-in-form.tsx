"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SigninValidation } from "@/lib/validators";
import { Form } from "../ui/form";
import CustomFormField from "../globals/custom-formfield";
import { FormFieldType } from "@/lib/constants";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SigninValidation>) => {
    setIsLoading(true);
    // createMenu(values)
    //   .then((data) => {
    //     if (data.success) {
    //       toast.success(data.success);
    //       router.push("/admin/menus");
    //     } else {
    //       toast.error(data.error);
    //     }
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-3">
          <div className="grid gap-3">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              label="Email Address"
              name="email"
              placeholder="jdelacruz@gmail.com"
              type="email"
              isRequired={true}
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-3">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              label="Password"
              name="password"
              placeholder="--------"
              type="password"
              isRequired={true}
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-3 mt-2">
            <CustomFormField
              name=""
              control={form.control}
              fieldType={FormFieldType.CHECKBOX}
              label="Remember me"
              isRequired={false}
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-20" variant="primary" disabled={isLoading} size="sm">
            {isLoading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            LOGIN
          </Button>
          <Link href="#" className="text-[#437634] hover:underline font-semibold text-sm">Forgot your password?</Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
