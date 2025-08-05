"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  return (
    <div className="max-w-lg w-full mx-auto p-8 bg-amber-50 shadow-lg rounded-lg space-y-6">
      <div className="text-xl font-semibold text-center">Login Page</div>
      <form onSubmit={submitForm} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            value={form?.email}
            onChange={handleChange}
            className="py-2 px-4 border rounded-lg"
            placeholder="Masukkan email"
          />
          <input
            type="password"
            name="password"
            value={form?.password}
            onChange={handleChange}
            className="py-2 px-4 border rounded-lg"
            placeholder="Masukkan Password"
          />
        </div>

        <button
          disabled={loading}
          className="bg-amber-500/30 text-gray-800 py-3 px-5 rounded-lg cursor-pointer duration-500 hover:bg-amber-500 hover:text-white"
        >
          {loading ? "Login in..." : "Login"}
        </button>
      </form>
      <div className="text-gray-600 flex gap-1">
        Belum memiliki akun? Daftar
        <Link href="/register" className="underline text-blue-700">
          Disini
        </Link>
      </div>
    </div>
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function submitForm(event) {
    event.preventDefault();
    // aksi loginnya...
    setLoading(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }
}
