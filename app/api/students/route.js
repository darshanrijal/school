import { connectDB } from "@/lib/db";
import Student from "@/models/studentModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const students = await Student.find().sort({ roll: 1 });
    return NextResponse.json({ students });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}

export async function POST(request) {
  try {
    const { name, roll } = await request.json();
    Student.create({ name, roll });
    return NextResponse.json({ message: "Student created" });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  try {
    await connectDB();

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Student deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
