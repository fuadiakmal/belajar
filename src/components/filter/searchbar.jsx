"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Searchbar({ url }) {
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="search"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Cari disini..."
          className="border rounded-lg py-2 px-4"
        />
      </form>
    </div>
  );
  function submit(e) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("search", value);
    router.replace(`${url || pathname}?${params.toString()}`);
  }
}
