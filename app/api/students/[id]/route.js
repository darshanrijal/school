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

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectDB();
    const student = await Student.findOne({ _id: id });
    return NextResponse.json({ student }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Student not found" });
  }
}
