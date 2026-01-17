import { useState } from "react";
import { Link } from "react-router-dom";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    // note: "",
    source: "",
    sourceOther: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sheetUrl =
      "https://script.google.com/macros/s/AKfycbx_6kx4zDk7CzaP_rNHIxA9jRw8OL8owURW3jPoaRqzAXNYrH7cND8q6jlgnfNQO4m3/exec";

    const phoneNumber = "628988272452";

    const finalSource =
      form.source === "Lainnya"
        ? form.sourceOther
        : form.source;

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("city", form.city);
    formData.append("phone", form.phone);
    // formData.append("note", form.note);
    formData.append("source", finalSource);

    // Kirim ke Google Sheet tanpa menunggu
    fetch(sheetUrl, {
      method: "POST",
      body: formData,
    }).catch(() => {
      console.warn("Gagal simpan ke sheet (diabaikan)");
    });

    const textNote = form.note ? `\nCatatan Tambahan:\n${form.note}\n` : '';
    const wave = "\u{1F44B}";
    const pray = "\u{1F64F}";

    const message = `
Halo Mas Bayu,
Perkenalkan, saya *${form.name}* dari *${form.city}*.
Saya tertarik untuk mengetahui lebih lanjut mengenai *peluang franchise Ayam Geprek Sederhana Mas Jampang*.

Saya mengetahui Ayam Geprek Sederhana Mas Jampang dari *${finalSource}*
${textNote}
Terima kasih, saya tunggu informasnya ya!`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

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

          {/* SOURCE */}
          <div className="space-y-2">
            <label className="font-semibold text-sm">
              Dari mana Anda mengetahui Ayam Geprek Sederhana Mas Jampang?
            </label>

            <select
              name="source"
              required
              value={form.source}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl bg-white"
            >
              <option value="" disabled>
                Pilih sumber informasi
              </option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="Rekomendasi Teman/Keluarga">
                Rekomendasi Teman / Keluarga
              </option>
              <option value="Lainnya">Lainnya</option>
            </select>

            {form.source === "Lainnya" && (
              <input
                type="text"
                name="sourceOther"
                placeholder="Sebutkan sumber lainnya"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-xl"
              />
            )}
          </div>


          {/* <textarea
            name="note"
            placeholder="Catatan (opsional, misalnya: rencana buka di kota mana, estimasi waktu, dll) "
            rows="3"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          /> */}

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
