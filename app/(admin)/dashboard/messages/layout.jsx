import React from "react";
import { roboto } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const metadata = {
  title: "Messages",
};
export default function MessageLayout({ children }) {
  return (
    <div>
      <h1 className={`${roboto.className} text-center font-medium  `}>
        Messages List{" "}
        <Button variant="outline">
          <a href={""}>Refresh</a>
        </Button>
      </h1>
      {children}
    </div>
  );
}
