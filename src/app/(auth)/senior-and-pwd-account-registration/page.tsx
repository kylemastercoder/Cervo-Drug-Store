import PWDSeniorForm from "@/components/form/senior-pwd-form";
import SignInForm from "@/components/form/sign-in-form";
import Chatbot from "@/components/landing-page/chatbot";
import Navbar from "@/components/landing-page/navbar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const SeniorPwdRegistration = () => {
  return (
    <div className="flex relative min-h-screen w-full flex-col">
      <Chatbot />
      <Navbar />
      <div className="px-4 md:px-60 py-14">
        <Card className="rounded-none">
          <CardContent className="p-10">
            <div className="flex flex-col">
              <p className="font-bold text-xl border-b border-[#437634] pb-3 mb-4">
                Senior & PWD Account Registration
              </p>
              {/* PWD/SENIOR FORM */}
              <PWDSeniorForm />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SeniorPwdRegistration;
