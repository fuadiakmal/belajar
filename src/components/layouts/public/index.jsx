"use client";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen w-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex">Home / Berita</div>
      <main className="flex-1 p-6 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
