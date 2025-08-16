"use client";

import { logout } from "@/lib/db/actions/auth";

export default function Page() {
  return (
    <div>
      <h1>User tidak valid. Silahkan ulang.</h1>
      <button className="underline" onClick={logout}>
        Login disini
      </button>
    </div>
  );
}
