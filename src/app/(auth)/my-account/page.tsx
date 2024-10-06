import SignInForm from "@/components/form/sign-in-form";
import SignUpForm from "@/components/form/sign-up-form";
import Chatbot from "@/components/landing-page/chatbot";
import Navbar from "@/components/landing-page/navbar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const MyAccount = () => {
  return (
    <div className="flex relative min-h-screen w-full flex-col">
      <Chatbot />
      <Navbar />
      <div className="px-4 md:px-60 py-14">
        <Card className="rounded-none">
          <CardContent className="p-10">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <p className="font-bold text-xl border-b border-[#437634] pb-3">
                  Login
                </p>
                <p className="font-semibold mt-5">Registered Customers</p>
                <p className="text-muted-foreground text-sm mb-5">
                  If you have an account with us, log in using username or your
                  email address.
                </p>
                {/* SIGN IN FORM */}
                <SignInForm />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-xl border-b border-[#437634] pb-3">
                  Create an Account
                </p>
                <p className="font-semibold mt-5">New Customers</p>
                <p className="text-muted-foreground text-sm mb-5">
                  By creating an account, you will be able to
                  move through the checkout process faster and more.
                </p>
                {/* REGISTER FORM */}
                <SignUpForm />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyAccount;
