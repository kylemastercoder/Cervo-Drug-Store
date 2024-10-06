/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import db from "@/lib/db";

export const createUser = async (data: any, userId: string) => {
  try {
    await db.user.create({
      data: {
        id: userId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        contactNumber: data.phoneNumber,
        zipCode: data.zipCode,
        password: data.password,
        userType: "User",
        seniorPwdId: data.seniorPwdId || null,
        seniorPwdBookletImage: data.seniorPwdBookletImage || null,
        seniorPwdIdImage: data.seniorPwdIdImage || null,
      },
    });

    return { success: "User created successfully." };
  } catch (error: any) {
    console.error(JSON.stringify(error, null, 2));
    return { error: error.message || "Failed to create user." };
  }
};
