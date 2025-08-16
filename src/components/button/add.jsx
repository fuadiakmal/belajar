import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export function AddButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <Plus />
    </Button>
  );
}
