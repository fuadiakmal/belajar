"use server";
import prisma from "@/lib/db/prisma";
import { errorResponse, successResponse } from "@/lib/db/response";
import { KategoriSchema } from "@/lib/db/schema/kategori";

export async function saveData(formData) {
   console.log(formData);

   const formEntries = Object.fromEntries(formData.entries());
   const parsed = KategoriSchema.safeParse(formEntries);

   if (!parsed.success) {
      return errorResponse(parsed.error.flatten().fieldErrors);
   }

   const { id, ...input } = parsed.data;

   try {
      await prisma.kategori.upsert({
         where: {
            id,
         },
         create: input,
         update: input,
      });

      return successResponse("Data berhasil disimpan");
   } catch (err) {
      console.log("Gagal menyimpan data:", err);
      return { success: false, message: "Gagal menyimpan data" };
   }
}

export async function resetPassword(formData) {
   console.log("ini action dari form", formData);
   return {
      success: true,
      message: "Data berhasil disimpan.",
   };
}
