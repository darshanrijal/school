"use client";
import React, { useEffect, useState } from "react";
import Loading from "./loading";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3000/api/students", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setStudents(data.students);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student._id}>
              {student.roll}. {student.name}
            </li>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
