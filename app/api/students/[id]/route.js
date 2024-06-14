import { connectDB } from "@/lib/db";
import Student from "@/models/studentModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const { newName: name, newRoll: roll } = await request.json();
    await connectDB();
    await Student.findByIdAndUpdate(id, { name, roll });
    return NextResponse.json({ message: "Student updated" });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
