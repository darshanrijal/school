import EditStudent from "@/components/EditStudentForm";
import React from "react";

const getStudentbyID = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/students/${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const data = await getStudentbyID(id);

  if (!data || !data.student) {
    return (
      <div className="grid place-items-center mt-40">
        <code>Error fetching student data or student not found.</code>
      </div>
    );
  }

  const { student } = data;
  const { name, roll } = student;

  return (
    <div>
      <EditStudent id={id} name={name} roll={roll} />
    </div>
  );
};

export default page;
