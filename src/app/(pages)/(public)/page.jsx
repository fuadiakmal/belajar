import GambarSection from "@/components/home/gambar";
import { WelcomeSection } from "@/components/home/welcome";

export default async function Home() {
  const data =
    "Selamat datang di website-kami.com, informasi terkini mengenai seputar produk teknologi, Berikut 25 contoh website sekolah yang bisa Anda gunakan sebagai ide dalam membuat website sekolah sendiri. mulai dari web profil sekolah SD dst.";
  // server

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* <WelcomeSection data={data} /> */}
      {/* <ol className="list-decimal">
        <li>1. Desain UI</li>
        <li>2. Desain DB</li>
        <li>3. form - tambah - edit - hapus (CRUD) </li>
        <li>4. preview</li>
        <li>5. animasi / interaktif</li> 
      </ol> */}
      {data}

      {/* <GambarSection /> */}
    </div>
  );
}
