import React from "react";
import { roboto } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
export default function MessageLayout({ children }) {
  return (
    <div>
      <h1 className={`${roboto.className} text-center font-medium  `}>
        Messages List{" "}
        <a href={""}>
          <Button variant="outline">Refresh</Button>
        </a>
      </h1>
      {children}
    </div>
  );
}
