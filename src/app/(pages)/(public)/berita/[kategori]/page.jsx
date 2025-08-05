import Searchbar from "@/components/filter/searchbar";
import { data_kategori } from "@/constants/katagori";
import { notFound } from "next/navigation";

export default async function Page({ params, searchParams }) {
  const { kategori } = await params;
  const { search } = await searchParams;

  const found = data_kategori.some(
    (item) => item.toLowerCase() === kategori.toLowerCase()
  );

  if (!found) {
    return notFound();
  }

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">{kategori.toUpperCase()}</h1>
      <Searchbar />
      <div>Hasil pencarian untuk kata kunci "{search}"</div>
    </div>
  );
}
