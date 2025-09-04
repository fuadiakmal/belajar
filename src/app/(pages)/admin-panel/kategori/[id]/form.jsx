"use client";

import { InputText } from "@/components/input";
import { useState, useTransition } from "react";
import { saveData } from "./action";
import { toastAlert } from "@/lib/utils";
import { LoaderSpinner } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Form({ data }) {
   const [form, setForm] = useState(data);
   const [errors, setErrors] = useState({});
   const [isPending, startTransition] = useTransition();
   const router = useRouter();
   return (
      <form action={submit}>
         <LoaderSpinner show={isPending} />
         <input type="hidden" name="id" value={data?.id || ""} />
         <InputText
            label="Nama Kategori"
            name="nama"
            value={form?.nama}
            setValue={setForm}
            errors={errors}
         />
         <Button>Simpan</Button>
      </form>
   );

   async function submit(formData) {
      startTransition(async () => {
         const result = await saveData(formData);
         if (!result.success) {
            setErrors(result?.errors);
            toastAlert("error", "Gagal diperbaharui");
         } else {
            toastAlert("success", result?.data);
            setErrors({});
            router.push("/admin-panel/kategori");
         }
      });
   }
}
