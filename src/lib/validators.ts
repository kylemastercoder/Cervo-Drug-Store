import { z } from "zod";

export const SigninValidation = z.object({
  email: z
    .string()
    .email({ message: "Enter a valid email address" })
    .min(1, { message: "Email address is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const OTPValidation = z.object({
  otpCode: z
    .string()
    .min(1, { message: "OTP Code is required" })
    .max(6, { message: "OTP Code must be 6 characters long" }),
});

export const SignupValidation = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phoneNumber: z.string().min(1, { message: "Mobile number is required" }),
  zipCode: z.string().min(1, { message: "Postal code is required" }),
  acceptPolicy: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
  email: z
    .string()
    .email({ message: "Enter a valid email address" })
    .min(1, { message: "Email address is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
});

export const SeniorPwdRegistration = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phoneNumber: z.string().min(1, { message: "Mobile number is required" }),
  zipCode: z.string().min(1, { message: "Postal code is required" }),
  acceptPolicy: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
  email: z
    .string()
    .email({ message: "Enter a valid email address" })
    .min(1, { message: "Email address is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
  seniorPwdId: z.string().min(1, { message: "Senior/PWD is required" }),
  seniorPwdIdImage: z
    .string()
    .min(1, { message: "Senior/PWD ID image is required" }),
  seniorPwdBookletImage: z
    .string()
    .min(1, { message: "Senior/PWD booklet image is required" }),
});

export const CheckoutValidation = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phoneNumber: z.string().min(1, { message: "Mobile number is required" }),
  email: z
    .string()
    .email({ message: "Enter a valid email address" })
    .min(1, { message: "Email address is required" }),
  region: z.string().min(1, { message: "Region is required" }),
  province: z.string().min(1, { message: "Province is required" }),
  municipality: z.string().min(1, { message: "Municipality is required" }),
  barangay: z.string().min(1, { message: "Barangay is required" }),
  houseNo: z.string().min(1, { message: "Complete address is required" }),
  acceptPolicy: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
  zipCode: z.string().min(1, { message: "Postal / ZIP code is required" }),
  prescription: z.string().optional(),
});

export const BannerValidation = z.object({
  image: z.string().min(1, { message: "Banner image is required" }),
});

export const PromotionValidation = z.object({
  image: z.string().min(1, { message: "Promotional image is required" }),
  isFeatured: z.boolean().optional(),
});

export const CategoryValidation = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  image: z.string().min(1, { message: "Category image is required" }),
});
