import prisma from "@/lib/db/prisma";
import Link from "next/link";

export default async function Page() {
   const data = await prisma.kategori.findMany();
   return (
      <div className="mt-10 space-y-6">
         <h3>Halaman Kategori</h3>
         <div>
            <Link href="/admin-panel/kategori/tambah">Tambah</Link>
         </div>
         <div className="flex flex-col gap-4">
            {data?.map((dt, i) => (
               <Link href={`/admin-panel/kategori/${dt.id}`} key={i}>
                  {dt.nama}
               </Link>
            ))}
         </div>
      </div>
   );
}
