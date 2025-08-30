"use client";

import { InputText } from "@/components/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { saveProfile } from "./action";
import { Input } from "@/components/ui/input";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { toastAlert } from "@/lib/utils";
import { LoaderSpinner } from "@/components/loader";

export default function Form({ profil }) {
   const [form, setForm] = useState(profil);
   const [errors, setErrors] = useState({});
   const [showPassword, setShowPassword] = useState(false);
   const [isPending, startTransition] = useTransition();

   return (
      <div className="w-full max-w-[400px] mx-auto relative">
         <LoaderSpinner show={isPending} />
         <form action={submit} className="space-y-4">
            <div className="space-y-2">
               <Input type="hidden" name="id" defaultValue={profil?.id || ""} />
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
               <div className="flex gap-2 items-end">
                  <div className="flex-1">
                     <InputText
                        label="Password Baru"
                        name="newPassword"
                        type={showPassword ? "text" : "password"}
                        value={form?.newPassword}
                        setValue={setForm}
                        errors={errors}
                     />
                  </div>
                  <Button
                     type="button"
                     variant="outline"
                     size="icon"
                     onClick={() => setShowPassword(!showPassword)}
                  >
                     {showPassword ? <EyeOff /> : <Eye />}
                  </Button>
               </div>
            </div>

            <div className="flex md:justify-end">
               <Button disabled={isPending} className="w-full md:w-fit">
                  Simpan
               </Button>
            </div>
         </form>
      </div>
   );

   async function submit(formData) {
      startTransition(async () => {
         const result = await saveProfile(formData);
         if (!result.success) {
            setErrors(result?.errors);
            toastAlert("error", "Gagal diperbaharui");
         } else {
            toastAlert("success", result?.data);
            setErrors({});
         }
      });
   }
}
