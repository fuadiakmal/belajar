"use client";

import { useState } from "react";

export function WelcomeSection({ data }) {
  const [pesan, setPesan] = useState(data);
  const tanggal = new Date().getDate();

  const kirimPesan = (params) => {
    setPesan("selamat anda berhasil menambahkan produk baru");
    return alert(`${params} ${pesan}`);
  };

  return (
    <section className="w-full max-w-5xl mx-auto">
      <h1 className="text-xl">Halaman Home</h1>
      <div>Ini adalah halaman home</div>
      <div>{pesan}</div>
      <div>{tanggal}</div>
      <div>
        <button
          onClick={() => kirimPesan("Halo... selamat pagi")}
          className="py-2 px-5 bg-amber-500 rounded-lg cursor-pointer"
        >
          Order Here
        </button>
        <button
          onClick={() => fungsiAlert("Halo... selamat pagi lagi")}
          className="py-2 px-5 bg-emerald-500 rounded-lg cursor-pointer"
        >
          Tes fungsi
        </button>
        <button
          onClick={() =>
            alertDiluarComponent("Halo... selamat pagi lagi", tanggal)
          }
          className="py-2 px-5 bg-emerald-500 rounded-lg cursor-pointer"
        >
          Tes fungsi di luar
        </button>
      </div>
    </section>
  );

  function fungsiAlert(params) {
    return alert(`${params} ${tanggal} ---- ${data}`);
  }
}

function alertDiluarComponent(params, tanggal) {
  return alert(`${params} ${tanggal}`);
}
