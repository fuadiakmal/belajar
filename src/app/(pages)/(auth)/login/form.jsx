"use client";

import { LoginButton } from "@/components/button";
import { InputText } from "@/components/input";
import { LoaderSpinner } from "@/components/loader";
import { action } from "@/lib/db/actions/auth";
import { toastAlert } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const router = useRouter();

  return (
    <div className="max-w-lg w-full mx-auto bg-primary/5 shadow-lg rounded-lg relative">
      <LoaderSpinner show={loading} />
      <div className="p-8 space-y-6">
        <div className="text-xl font-semibold text-center">Login Page</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative">
          <div className="flex flex-col gap-4">
            <InputText
              label="Email"
              placeholder="email@web.com"
              name="email"
              value={form?.email}
              setValue={setForm}
              errors={errors}
            />
            <InputText
              label="Password"
              type="password"
              name="password"
              value={form?.password}
              setValue={setForm}
              errors={errors}
            />
          </div>

          <LoginButton />
        </form>
        <div className="text-gray-600 flex gap-1">
          Belum memiliki akun? Daftar
          <Link href="/register" className="underline text-blue-700">
            Disini
          </Link>
        </div>
      </div>
    </div>
  );

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const result = await action(formData);

      if (result.success) {
        router.push("/admin-panel/dashboard");
        toastAlert("success", `${result?.data?.nama} berhasil login`);
      } else {
        setErrors(result.errors || {});
        setLoading(false);
      }
    } catch (error) {
      console.log("Gagal:", error);
      toastAlert("error", "Terjadi kesalahan. Silakan coba lagi.");
      setLoading(false);
    }
  }
}
