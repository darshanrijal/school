"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const EditStudent = ({ id, name, roll }) => {
  const router = useRouter();
  const [newName, setNewName] = useState(name);
  const [newRoll, setNewRoll] = useState(roll);
  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newRoll }),
      });
      if (!res.ok) {
        throw new Error("Cannot fetch");
      }
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <form
          className="grid place-items-center gap-1"
          onSubmit={handleFormSubmit}
        >
          <Input
            type="text"
            name="name"
            id="name"
            className="font-semibold"
            placeholder="Update student name"
            value={newName}
            required
            onChange={(e) => setNewName(e.target.value)}
          />
          <Input
            type="number"
            name="roll"
            id="roll"
            className="font-semibold"
            placeholder="Update student roll"
            value={newRoll}
            required
            min={1}
            max={999}
            onChange={(e) => setNewRoll(e.target.value)}
          />
          <Button type="submit">Update</Button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
