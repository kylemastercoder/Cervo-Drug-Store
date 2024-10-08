import React from "react";
import Sidebar from "../_components/sidebar";
import Navbar from "../_components/navbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="flex-1 p-5 h-screen bg-zinc-50 border-r">
        <Sidebar />
      </div>
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
