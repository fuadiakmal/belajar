import Searchbar from "@/components/filter/searchbar";
import berita from "@/constants/berita.json";
import { data_kategori } from "@/constants/katagori";

import Image from "next/image";
import Link from "next/link";
export default function Berita() {
  const data = berita;
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">Halama Berita Terikini</h1>
      <Searchbar />
      <div className="flex  gap-4">
        {data_kategori.map((dt, i) => (
          <Link key={i} href={`/berita/${dt.toLowerCase()}`}>
            {dt}
          </Link>
        ))}
      </div>
      <div className="grid gap-4">
        {data.map((dt, i) => (
          <Link
            href={`/berita/detail/${dt.slug}`}
            key={i}
            className="border bg-gray-100 rounded-lg p-6 flex gap-2"
          >
            <div className="relative aspect-square size-20">
              <Image
                src={dt.image}
                alt={dt.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-sm text-gray-600">
                {new Date(dt.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <h1 className="text-xl font-semibold">{dt.title}</h1>
              <div>{dt.body}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
