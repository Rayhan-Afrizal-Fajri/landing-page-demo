export default function Contact() {
  const submit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const msg = `Halo, saya ${name} tertarik bermitra`;
    window.open(
      `https://wa.me/628123456789?text=${encodeURIComponent(msg)}`
    );
  };

  return (
    <section id="contact" className="container mx-auto px-8 py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">
        Hubungi Kami
      </h2>

      <form onSubmit={submit} className="max-w-xl">
        <input
          name="name"
          placeholder="Nama"
          className="w-full mb-4 p-4 rounded-xl border"
          required
        />
        <button className="bg-primary text-white px-6 py-4 rounded-xl">
          Kirim via WhatsApp
        </button>
      </form>
    </section>
  );
}
