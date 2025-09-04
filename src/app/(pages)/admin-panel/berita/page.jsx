import prisma from "@/lib/db/prisma";

export default async function Page() {
   const data = await prisma.berita.findMany();
   return (
      <div>
         <h3>Halaman Berita</h3>

         <div>
            {data?.map((dt, i) => (
               <div key={i}>{dt.judul}</div>
            ))}
         </div>
      </div>
   );
}
