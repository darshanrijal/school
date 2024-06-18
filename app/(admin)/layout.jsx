import DashboardNav from "@/components/DashboardNav";
import "@/app/globals.css";
import { Inter } from "next/font/google";
export const metadata = {
  title: "Dashboard",
  description: "Generated by Next.js",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <div>
      <DashboardNav />
      {children}
    </div>
  );
}
