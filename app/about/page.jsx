import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="mx-1 md:mx-5 md:mt-6">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this project made using?</AccordionTrigger>
          <AccordionContent>
            The project is made using{" "}
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
  );
};

export default About;
