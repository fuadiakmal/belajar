"use client";
import { useRouter } from "next/navigation";

export default function WebLogo() {
  const router = useRouter();
  return (
    <div className="cursor-pointer" onClick={() => router.push("/")}>
      WebLogo
    </div>
  );
}
