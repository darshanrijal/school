import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import "@/app/globals.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NextTopLoader showSpinner={false} color="#708090" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
