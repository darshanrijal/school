import { connectDB } from "@/lib/db";
import Student from "@/models/studentModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { roll } = await request.json();
    await connectDB();
    const student = Student.findOne({ roll });
    return NextResponse.json({ exists: !!student });
  } catch (error) {
    console.error(error);
  }
}
