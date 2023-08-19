import React from "react";
import AdminNav from "../nav/AdminNav";
import Footer from "./Footer";

export default function AdminLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <div className="flex flex-col rounded-none items-center bg-base-100 gap-12 min-h-screen">
      <AdminNav />
      <div className="flex items-center flex-col w-11/12 md:w-11/12 gap-10 grow pb-12 rounded-xl">
        {children}
      </div>
      <Footer />
    </div>
  );
}
