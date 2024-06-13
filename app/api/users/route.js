import { connectDB } from "@/lib/db";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const { username, password } = await request.json();
    User.create({ username, password });
    return NextResponse.json({ message: "User created" });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
export async function GET() {
  try {
    await connectDB();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
