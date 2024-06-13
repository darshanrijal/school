import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import tailwindcss from "@/public/tailwind.svg";
import mongodb from "@/public/mongodb.svg";
import Image from "next/image";
import nextjs from "@/public/nextjs.svg";
import vercel from "@/public/vercel.svg";
export const metadata = {
  title: "About",
  description: "About page",
};
import Link from "next/link";
const About = () => {
  return (
    <div id="container" className="flex flex-col gap-[29rem]">
      <div className="mx-1 md:mx-5 md:mt-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is this project made using?
            </AccordionTrigger>
            <AccordionContent>
              The project is made using
              <a
                href="http://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:underline"
              >
                NextJS
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is this project about?</AccordionTrigger>
            <AccordionContent>
              This project is about school management system, student records,
              marks are recorded and stored
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              When will the project be completed?
            </AccordionTrigger>
            <AccordionContent>
              jindagi bada chhoto cha, bhaihalcha ni.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Source code?</AccordionTrigger>
            <AccordionContent>
              <a
                href="https://github.com/darshanrijal/school"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 underline"
              >
                yeta....
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div id="images" className="grid place-items-center">
        <code className="text-lg">made using</code>
        <div className="flex justify-center items-center gap-5">
          <Link href="https://tailwindcss.com" legacyBehavior>
            <a>
              <Image
                alt="tailwind"
                src={tailwindcss}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Link>
          <Link href="https://www.mongodb.com" legacyBehavior>
            <a>
              <Image
                alt="mongodb"
                src={mongodb}
                height={40}
                className="cursor-pointer"
              />
            </a>
          </Link>
          <Link href="https://vercel.com" legacyBehavior>
            <a>
              <Image
                alt="vercel"
                src={vercel}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Link>
          <Link href="https://nextjs.org" legacyBehavior>
            <a>
              <Image
                alt="nextjs"
                src={nextjs}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
