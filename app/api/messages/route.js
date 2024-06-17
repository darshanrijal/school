import { connectDB } from "@/lib/db";
import Message from "@/models/messageModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find();
    return NextResponse.json({ messages });
  } catch (error) {
    return NextResponse.json("Cannot find messages");
  }
}
export async function POST(request) {
  try {
    await connectDB();
    const { name, message } = await request.json();
    Message.create({ name, message });
    return NextResponse.json({ message: "Message created" });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  try {
    await connectDB();
    const deletedMessage = await Message.findByIdAndDelete(id);
    if (!deletedMessage) {
      return NextResponse.json({ error: "Message not found" }, { status: 500 });
    }
    return NextResponse.json({ message: "Message deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `${error}` });
  }
}
