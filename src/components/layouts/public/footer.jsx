"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">PT Hizratech</h2>
          <p className="text-sm text-gray-400">
            Menyediakan solusi terbaik untuk kebutuhan bisnis Anda.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/tentang" className="hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/layanan" className="hover:underline">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Kontak</h3>
          <p className="text-sm text-gray-300">
            Jl. Rambutan No. 123, Pekanbaru
          </p>
          <p className="text-sm text-gray-300">Email: info@contoh.com</p>
          <p className="text-sm text-gray-300">Telp: (0761) 123-4567</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PT Hizratech. All rights reserved.
      </div>
    </footer>
  );
}
