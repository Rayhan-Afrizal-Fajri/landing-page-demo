export default function Partnership() {
  return (
    <section id="kemitraan" className="container mx-auto px-8 py-20 my-20">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            Proposal <span className="text-primary">Kemitraan</span>
          </h2>

          <p className="opacity-60 mb-6 leading-relaxed text-xl">
            Pelajari sistem kemitraan Ayam Geprek Sederhana Mas Jampang
            melalui proposal resmi yang dapat dibaca langsung di website.
          </p>

          <a
            href="/pdf/partnership-proposal.pdf"
            target="_blank"
            className="inline-block bg-primary text-white px-6 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition"
          >
            Download Proposal PDF
          </a>
        </div>

        {/* RIGHT */}
        <div className="w-full h-[520px] rounded-2xl overflow-hidden shadow-2xl border">
          <iframe
            src="/pdf/partnership-proposal.pdf#toolbar=0&navpanes=0"
            className="w-full h-full"
            title="Proposal Kemitraan"
          />
        </div>
      </div>
    </section>
  );
}
