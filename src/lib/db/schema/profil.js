import z from "zod";

export const ProfilSchema = z.object({
   id: z.string().optional(),
   name: z.string().min(1, { message: "Nama wajib diisi" }),
   email: z
      .string()
      .min(1, { message: "Email wajib diisi" })
      .email("Email tidak valid"),
   newPassword: z
      .string()
      .min(6, "Password minimal 6 karakter")
      .optional()
      .or(z.literal("")),
});
