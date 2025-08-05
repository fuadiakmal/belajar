import Link from "next/link";

export default function HalamanRegister() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="mb-6">HalamanRegister</div>
      <Link
        href="/login"
        className="bg-amber-500 py-2 px-5 rounded-lg text-center"
      >
        Login
      </Link>
    </div>
  );
}
