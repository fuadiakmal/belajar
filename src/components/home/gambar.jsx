"use client";
import Image from "next/image";
import berita from "@/constants/berita.json";

export default async function GambarSection() {
  // const api = await fetch(
  //   "https://berita-indo-api.vercel.app/v1/cnn-news/teknologi"
  // );
  // const res = await api.json();
  // const data = res?.data?.slice(0, 12);
  // console.log({ data });

  return (
    <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {berita?.map((dt, i) => (
        <a
          target="_blank"
          href={dt.link}
          key={i}
          className="relative aspect-video w-full min-h-20 bg-gray-200"
        >
          <Image
            src={dt?.image?.small}
            fill
            sizes="100%"
            className="object-cover"
            alt={dt.title}
          />
          <div className="absolute inset-x-0 bottom-0 p-2 bg-black/30">
            <h1 className="font-semibold text-lg line-clamp-1 text-white">
              {dt.title}
            </h1>
          </div>
        </a>
      ))}
    </div>
  );
}
