export default function Partnership() {
  return (
    <section id="kemitraan" className="py-20 bg-secondary">
      <div className="grid md:grid-cols-2 gap-14 items-start container mx-auto px-8">
        {/* LEFT */}
        <div>
          <h2 className="text-[#ECECEC] text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            Proposal <span className="text-accent3">Kemitraan</span>
          </h2>

          <p className="mb-6 leading-relaxed font-semibold text-[#ECECEC] text-sm md:text-md-semi lg:text-lg">
            Pelajari sistem kemitraan Ayam Geprek Sederhana Mas Jampang
            melalui proposal resmi yang dapat dibaca langsung di website.
          </p>

          <a href="/pdf/partnership-proposal.pdf" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-[#ECECEC] bg-accent3 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
              Download Proposal
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
