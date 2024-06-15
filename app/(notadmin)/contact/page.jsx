"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  async function handleMessageSubmit(e) {
    e.preventDefault();
    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });
      setName("");
      setMessage("");
      toast({
        title: "Mesage has been sent",
        description: "You may be contacted by the administration",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Database occured a problem check console for details",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center mt-6">
      <form
        className="grid place-items-center gap-1"
        onSubmit={handleMessageSubmit}
      >
        <Input
          type="text"
          name="name"
          id="name"
          className=""
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="textarea"
          name="message"
          id="message"
          className=""
          placeholder="Leave your message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
