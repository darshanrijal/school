import React from "react";
import { roboto } from "@/components/ui/fonts";
export const metadata = {
  title: "Messages",
};
export default function MessageLayout({ children }) {
  return (
    <div>
      <h1 className={`${roboto.className} text-center font-medium  `}>
        Messages List
      </h1>
      {children}
    </div>
  );
}
