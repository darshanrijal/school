import Link from "next/link";
import { poppins } from "./ui/fonts";
const DashboardNav = () => {
  return (
    <nav
      className={`sticky ${poppins.className} top-0  list-none backdrop-blur-sm shadow-md w-screen p-2`}
    >
      <ul className="flex justify-between items-center mx-6">
        <li className="font-medium text-xl">
          <Link
            href={"/dashboard"}
            className="hover:text-gray-500 transition-colors
          "
          >
            Dashboard
          </Link>
        </li>
        <li className="font-medium ">
          <Link href={"/"}>Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
