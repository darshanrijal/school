import { IoMdCheckmark } from "react-icons/io";
import { useToast } from "./ui/use-toast";

export default function Checkmark({ id, onMessageDeleted }) {
  const { toast } = useToast();

  async function deleteMessage(id) {
    const res = await fetch(`/api/messages?id=${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      toast({
        variant: "destructive",
        message: "Cannot delete message",
      });
      return;
    }
    // Call the parent component callback to signal message deletion
    onMessageDeleted();
  }

  return <IoMdCheckmark onClick={() => deleteMessage(id)} />;
}
