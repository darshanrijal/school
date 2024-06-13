"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);

  return (
    <div className="flex justify-center">
      <form
        className="grid place-items-center gap-2 mt-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter the username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" className="grid gap-2">
          <Input
            type={isPassword ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Enter the password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="grid place-items-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsPassword(!isPassword)}
            >
              {isPassword ? "Show" : "Hide"}
            </Button>
          </div>
        </label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
