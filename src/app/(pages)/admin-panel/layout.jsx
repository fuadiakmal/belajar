import { AddButton, LogoutButton } from "@/components/button";
import { getUser } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
   const user = await getUser();

   if (!user) {
      redirect("/invalid-session");
   }

   return (
      <div>
         <header className="bg-primary/80 p-4">
            <div className="mx-auto w-full max-w-6xl flex justify-between gap-4">
               <div>Admin Panel</div>
               <div className="flex gap-2 items-center">
                  <Link href="/admin-panel/berita">Berita</Link>
                  <Link href="/admin-panel/kategori">Kategori</Link>
                  <Link href="/admin-panel/profil">{user?.email}</Link>
                  <LogoutButton />
                  <AddButton />
               </div>
            </div>
         </header>
         <div className="mx-auto w-full max-w-6xl">{children}</div>
      </div>
   );
}
