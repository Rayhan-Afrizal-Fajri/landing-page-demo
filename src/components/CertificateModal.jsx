import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CertificateModal({ cert, onClose }) {
  const [page, setPage] = useState(0);
  const total = cert.pages.length;

  const next = () => setPage((p) => (p + 1) % total);
  const prev = () => setPage((p) => (p - 1 + total) % total);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="relative bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-600 hover:text-red-600"
        >
          <X size={22} />
        </button>

        {/* SLIDER WRAPPER */}
        <div className="relative">

          {/* SLIDES */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {cert.pages.map((src, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex items-center justify-center p-6"
              >
                <img
                  src={src}
                  alt={`${cert.title} page ${i + 1}`}
                  className="max-h-[75vh] object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* PREV */}
          {total > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* NEXT */}
          {total > 1 && (
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* PAGINATION */}
          {total > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 px-4 py-2 rounded-full">
              {cert.pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    page === i ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
              <span className="text-xs text-white ml-2">
                {page + 1} / {total}
              </span>
            </div>
          )}
        </div>

        {/* FOOTER INFO (optional tapi bikin hidup) */}
        <div className="p-4 text-center border-t">
          <h4 className="font-semibold text-gray-800">{cert.title}</h4>
        </div>
      </div>
    </div>
  );
}
