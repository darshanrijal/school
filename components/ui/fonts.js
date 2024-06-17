import { Poppins, Roboto } from "next/font/google";
export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "vietnamese",
  ],
});
