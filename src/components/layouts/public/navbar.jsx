import Searchbar from "@/components/filter/searchbar";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-amber-800 text-gray-100 px-6 py-8">
      <div className="my-auto flex justify-between gap-4 items-center">
        <div className="font-bold text-lg">Logo</div>
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/berita">Berita</Link>
          <Searchbar url="berita" />
          <Link
            href="/login"
            className="ml-2 bg-emerald-500 py-2 px-4 leading-tight flex justify-center items-center rounded-lg"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
