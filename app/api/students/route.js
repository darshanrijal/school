import { connectDB } from "@/lib/db";
import Student from "@/models/studentModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const students = await Student.find();
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
    await Student.findByIdAndDelete(id);
    return NextResponse.json({ message: "Student deleted" });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
