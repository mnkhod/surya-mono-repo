import React from "react";
import TutorNav from "../nav/TutorNav";
import Footer from "./Footer";

export default function TutorLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <div className="flex flex-col rounded-none items-center bg-base-100 gap-12 min-h-screen">
      <TutorNav />
      <div className="flex items-center flex-col w-11/12 md:full gap-10 grow pb-12 rounded-xl">
        {children}
      </div>
      <Footer />
    </div>
  );
}
