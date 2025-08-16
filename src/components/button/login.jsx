"use client";

import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export function LoginButton() {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>{pending ? "Loading..." : "Login"}</Button>;
}
