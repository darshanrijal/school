"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { poppins } from "./ui/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
const StudentsList = () => {
  const router = useRouter();
  const [students, setStudents] = useState([]);
  async function getStudents() {
    try {
      const res = await fetch("http://localhost:3000/api/students", {
        cache: "no-store",
      });
      if (!res.ok) {
        console.log("Error fetching data");
      }
      const data = await res.json();
      setStudents(data.students);
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div className="grid gap-2">
      {students.map((student) => {
        return (
          <div
            key={student._id}
            className={` py-4 mx-1 px-2 flex border-slate-400 border-2 justify-between gap-9 items-center rounded ${poppins.className}`}
          >
            <div>
              <label htmlFor="name" className="flex gap-1">
                Name:
                <p id="name">{student.name}</p>
              </label>
              <label htmlFor="roll" className="flex gap-1">
                Roll:
                <p id="name">{student.roll}</p>
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="text-xl text-red-500"
                onClick={async () => {
                  const confirmed = confirm("Are you sure?");
                  if (confirmed) {
                    await fetch(`/api/students?id=${student._id}`, {
                      method: "DELETE",
                    });
                    confirmed && router.push("/dashboard");
                  }
                }}
              >
                <MdDelete />
              </button>
              <button className="text-xl">
                <Link href={`/dashboard/editstudent/${student._id}`}>
                  <MdEdit />
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentsList;
