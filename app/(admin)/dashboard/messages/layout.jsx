import React from "react";
import { roboto } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
export default function MessageLayout({ children }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className={`${roboto.className} text-center font-medium  `}>
        Messages List{" "}
      </h1>
      <div>{children}</div>
    </div>
  );
}
