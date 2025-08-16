"use client";

import { logout } from "@/lib/db/actions/auth";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useTransition } from "react";

export function LogoutButton() {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      logout();
    });
  };

  return (
    <Button onClick={handleClick}>{pending ? "Loading..." : <LogOut />}</Button>
  );
}
