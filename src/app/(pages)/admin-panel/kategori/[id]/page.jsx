import { Button } from "@/components/ui/button";
import prisma from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import React from "react";
import Form from "./form";

export default async function Page({ params }) {
   const { id } = await params;

   const titleForm = id == "tambah" ? "Tambah" : "Edit";
   const data = await prisma.kategori.findFirst({
      where: {
         id,
      },
   });
   if (!data && id != "tambah") {
      notFound();
   }

   return (
      <div className="mt-10 space-y-6">
         <h3>{titleForm} Kategori</h3>
         <div>
            <Form data={data} />
         </div>
      </div>
   );
}
