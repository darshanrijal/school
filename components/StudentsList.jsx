"use client";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { poppins } from "./ui/fonts";
import Link from "next/link";
import StudentLoadingSkeleton from "./StudentLoadingSkeleton";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  async function getStudents() {
    try {
      const res = await fetch("/api/students", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      setStudents(data.students);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false); // Update loading state
    }
  }

  useEffect(() => {
    getStudents();
  }, []);

  if (loading) {
    return (
      <div className="grid place-items-center">
        <StudentLoadingSkeleton />
      </div>
    ); // Show loading state
  }

  return (
    <div className="grid gap-2">
      {students.map((student) => (
        <div
          key={student._id}
          className={`py-4 mx-1 px-2 flex border-slate-400 border-2 justify-between gap-9 items-center rounded ${poppins.className}`}
        >
          <div>
            <label htmlFor="name" className="flex gap-1">
              Name:
              <p id="name">{student.name}</p>
            </label>
            <label htmlFor="roll" className="flex gap-1">
              Roll:
              <p id="roll">{student.roll}</p>
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
                  getStudents(); // Fetch the updated list after deletion
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
      ))}
    </div>
  );
};

export default StudentsList;
