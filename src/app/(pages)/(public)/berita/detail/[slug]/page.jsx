import berita from "@/constants/berita.json";
import Image from "next/image";

export default async function Page({ params }) {
  const { slug } = await params;
  const data = berita.find((dt) => dt.slug == slug);

  return (
    <div className="max-w-[1000px] w-full mx-auto">
      <div className="relative w-full max-w-[500px] h-auto aspect-square">
        <Image
          src={data.image}
          alt={data.title}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-lg font-bold">{data.title}</h1>
        <div>{data.body}</div>
      </div>
    </div>
  );
}
