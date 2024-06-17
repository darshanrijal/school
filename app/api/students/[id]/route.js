import { connectDB } from "@/lib/db";
import Student from "@/models/studentModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const { name, roll } = await request.json();

    if (!name || !roll) {
      return NextResponse.json(
        { error: "Name and Roll are required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, roll },
      { new: true }
    );

    if (!updatedStudent) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Student updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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
