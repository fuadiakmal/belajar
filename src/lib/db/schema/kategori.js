import z from "zod";

export const KategoriSchema = z.object({
   id: z.string().optional(),
   nama: z.string().min(1, { message: "Nama wajib diisi" }),
});
