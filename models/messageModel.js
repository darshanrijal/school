import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  name: { type: String },
  message: { type: String },
});
const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
