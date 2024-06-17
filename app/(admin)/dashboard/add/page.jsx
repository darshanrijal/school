import StudentDetailsForm from "@/components/StudentDetailsForm";
import React from "react";
export const metadata = {
  title: "Add Students",
};
const page = () => {
  return (
    <div className="mt-6">
      <StudentDetailsForm />
    </div>
  );
};

export default page;
