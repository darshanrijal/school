import EditStudent from "@/components/EditStudentForm";
import React from "react";
const getStudentbyID = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const page = async ({ params }) => {
  const { id } = params;
  const { student } = await getStudentbyID(id);
  const { name, roll } = student;
  return (
    <div>
      <EditStudent id={id} name={name} roll={roll} />
    </div>
  );
};

export default page;
