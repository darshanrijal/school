"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";

const Login = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  function handleLoginFormSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }
  }
  return (
    <div className="flex justify-center">
      <form
        className="grid place-items-center gap-2 mt-6"
        onSubmit={handleLoginFormSubmit}
      >
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" className="grid gap-2">
          <Input
            type={isPassword ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="grid place-items-center">
            {password && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPassword(!isPassword)}
              >
                {isPassword ? "Show" : "Hide"}
              </Button>
            )}
          </div>
        </label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
