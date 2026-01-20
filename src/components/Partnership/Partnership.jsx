import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const proposalPages = [
  "/pdf/proposal-kemitraan-page-1.webp",
  "/pdf/proposal-kemitraan-page-2.webp",
  "/pdf/proposal-kemitraan-page-3.webp",
];

const proposalDoc = "/pdf/proposal-kemitraan.pdf";

export default function Partnership() {
  const [current, setCurrent] = useState(0);
  const total = proposalPages.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

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
            melalui proposal resmi yang dapat diunduh atau dibaca.
          </p>

          <div className="flex gap-4">
            <a
              href={proposalDoc}
              download={true}
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[#ECECEC] bg-accent3 rounded-lg hover:bg-primary-800"
            >
              Download Proposal
            </a>

            <a
              href={proposalDoc}
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[#ECECEC] border border-[#ECECEC]/40 rounded-lg hover:bg-white/10"
            >
              Lihat PDF
            </a>
          </div>
        </div>

        {/* RIGHT - SLIDER */}
        <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">

          {/* SLIDES */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {proposalPages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Proposal page ${i + 1}`}
                className="w-full flex-shrink-0 object-contain bg-white"
              />
            ))}
          </div>

          {/* PREV */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* NEXT */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* PAGINATION */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 px-4 py-2 rounded-full">
            {proposalPages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  current === i ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
            <span className="text-xs text-white ml-2">
              {current + 1} / {total}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
