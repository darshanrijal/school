"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const EditStudent = ({ id, name, roll }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [newName, setNewName] = useState(name);
  const [newRoll, setNewRoll] = useState(roll);

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!newName || !newRoll) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }
    try {
      const res = await fetch(`/api/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: newName, roll: newRoll }),
      });
      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to update student",
        });
        return;
      }
      toast({
        variant: "success",
        title: "Success",
        description: "Student updated successfully",
      });
      router.push("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
      });
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
            placeholder="Update student name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Input
            type="number"
            name="roll"
            id="roll"
            placeholder="Update student roll"
            value={newRoll}
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
