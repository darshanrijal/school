"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";

const StudentDetailsForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!name || !roll) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }
    try {
      const checkStudent = await fetch("/api/checkstudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roll }),
      });
      const { exists } = await checkStudent.json();
      if (exists) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Student already exists with that roll",
        });
        return;
      }

      await fetch(`/api/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, roll }),
      });
      setName("");
      setRoll("");
      toast({
        title: "Added",
        description: "Student has been added to the database",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Database encountered a problem. Check console for details",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="grid place-items-center gap-1"
        onSubmit={handleFormSubmit}
      >
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          name="roll"
          id="roll"
          placeholder="Enter student roll"
          value={roll}
          min={1}
          max={999}
          onChange={(e) => setRoll(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default StudentDetailsForm;
