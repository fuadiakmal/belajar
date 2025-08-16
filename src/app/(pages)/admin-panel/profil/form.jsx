"use client";

import { InputText } from "@/components/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Form({ profil }) {
  const [form, setForm] = useState(profil);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-2">
          <InputText
            label="Nama"
            name="name"
            value={form?.name}
            setValue={setForm}
            errors={errors}
          />

          <InputText
            label="Email"
            placeholder="email@web.com"
            name="email"
            value={form?.email}
            setValue={setForm}
            errors={errors}
          />
          <InputText
            label="Password Baru"
            name="password"
            type="password"
            value={form?.password}
            setValue={setForm}
            errors={errors}
          />
        </div>
        <Button>Simpan</Button>
      </form>
    </div>
  );

  async function submit(e) {
    e.preventDefault();
  }
}
