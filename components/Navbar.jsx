import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { poppins } from "./ui/fonts";
import Link from "next/link";
const Navbar = () => {
  const links = [
    {
      head: "About",
      href: "/about",
    },
    {
      head: "Contact",
      href: "/contact",
    },
    {
      head: "Login",
      href: "/login",
    },
  ];
  return (
    <nav className="sticky top-0 shadow-md p-2 backdrop-blur-sm ">
      <ul className="flex justify-between items-center mx-4">
        <li
          className={`${poppins.className} text-xl font-medium hover:text-gray-500 transition-colors cursor-pointer`}
        >
          <Link href={"/"}>School Logo</Link>
        </li>
        <li className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GiHamburgerMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Navigate to</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {links.map((link) => {
                return (
                  <DropdownMenuItem key={link.head} asChild>
                    <Link href={link.href}>{link.head}</Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="hidden md:flex gap-6 ">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-slate-400 transition-colors ${poppins.className} text-lg`}
              >
                {link.head}
              </Link>
            );
          })}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
