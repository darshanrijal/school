import mongoose from "mongoose";
export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "School",
    });
    console.log("connected");
  } catch (error) {
    console.log(`Cannot connect ${error}`);
  }
}
