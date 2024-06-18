"use client";
import { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import Checkmark from "./Checkmark";
import StudentLoadingSkeleton from "./StudentLoadingSkeleton";
import { Button } from "./ui/button";

const StudentMessagesList = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMessages() {
    try {
      const res = await fetch("/api/messages", {
        cache: "no-store",
      });
      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch messages",
        });
        return;
      }
      const body = await res.json();
      setMessages(body.messages);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed",
        message: "Failed to fetch data",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDeleteMessage() {
    // Reload messages after deletion
    getMessages();
  }

  if (loading) {
    return (
      <div className="grid place-items-center">
        <StudentLoadingSkeleton />
      </div>
    );
  }
  if (messages.length === 0) {
    return (
      <div className="grid place-items-center">
        <Button onClick={getMessages} variant="outline">
          Refresh
        </Button>
        <code className="my-40">No messages found</code>
      </div>
    );
  }

  return (
    <div className="grid place-items-center gap-3">
      <Button onClick={getMessages} variant="outline">
        Refresh
      </Button>
      {messages.map((message) => (
        <div
          className="flex flex-col w-full max-w-md p-2 border-slate-500 rounded border-2"
          key={message._id}
        >
          <div className="flex gap-1">
            <p>Message:</p>
            <p>&quot;{message.message}&quot;</p>
          </div>
          <div className="flex gap-1">
            <p>by:</p>
            <p>{message.name}</p>
          </div>
          <button className="flex justify-end text-green-500 text-xl">
            <Checkmark
              id={message._id}
              onMessageDeleted={handleDeleteMessage}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentMessagesList;
