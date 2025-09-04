"use server";
import { errorResponse, successResponse } from "@/lib/db/response";
import { ProfilSchema } from "@/lib/db/schema/profil";
import bcrypt from "bcrypt";

export async function saveProfile(formData) {
   const formEntries = Object.fromEntries(formData.entries());
   const parsed = ProfilSchema.safeParse(formEntries);

   if (!parsed.success) {
      return errorResponse(parsed.error.flatten().fieldErrors);
   }

   const { id, newPassword, ...input } = parsed.data;

   try {
      const user = await prisma.user.findUnique({ where: { id } });
      if (!user) return errorResponse({ name: ["User tidak ditemukan."] });

      if (newPassword && newPassword.length > 0) {
         const hashed = await bcrypt.hash(newPassword, 10);
         await prisma.user.update({
            where: { id },
            data: { ...input, password: hashed },
         });
      } else {
         await prisma.user.update({
            where: { id },
            data: input,
         });
      }

      return successResponse("Profil berhasil diperbaharui");
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
