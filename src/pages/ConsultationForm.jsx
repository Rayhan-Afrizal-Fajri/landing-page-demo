import { useState } from "react";
import { Link } from "react-router-dom";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const sheetUrl =
    "https://script.google.com/macros/s/AKfycbxLkYlST5ERwKdRpLF_7FD1QykRB42qfJdZadDfbkPiSB87vDDu-tKMIpcmhbjp61DKEA/exec";

  const phoneNumber = "62895392167815";

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("city", form.city);
  formData.append("phone", form.phone);
  formData.append("note", form.note);

  // ⬅️ KIRIM TANPA MENUNGGU
  fetch(sheetUrl, {
    method: "POST",
    body: formData,
  }).catch(() => {
    console.warn("Gagal simpan ke sheet (diabaikan)");
  });

  const message = `
Halo Mas Jampang
Saya tertarik franchise Ayam Geprek.

Nama: ${form.name}
Asal: ${form.city}
No WA: ${form.phone}
Catatan: ${form.note}
  `;

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // ⬅️ buka WhatsApp di tab baru
  window.open(waUrl, "_blank", "noopener,noreferrer");
};


  return (
    <section className="min-h-screen flex items-center justify-center bg-muted px-6">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-xl w-full">
        <Link
          to="/"
          className="block mb-6 text-sm text-primary hover:underline"
        >
          ← Kembali
        </Link>
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          Form Konsultasi Franchise
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="city"
            placeholder="Asal Kota"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="number"
            name="phone"
            placeholder="No WhatsApp Aktif"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            name="note"
            placeholder="Catatan (opsional)"
            rows="3"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition"
          >
            Kirim & Lanjut ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}