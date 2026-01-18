import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CertificateModal({ cert, onClose }) {
  const [page, setPage] = useState(0);
  const total = cert.pages.length;

  const next = () => setPage((p) => (p + 1) % total);
  const prev = () => setPage((p) => (p - 1 + total) % total);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="relative bg-[#FBC02D] max-w-3xl w-full rounded-2xl p-6">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#C62828]"
        >
          <X />
        </button>

        {/* Image */}
        <img
          src={cert.pages[page]}
          alt={cert.title}
          className="mx-auto max-h-[70vh] object-contain"
        />

        {/* Navigation */}
        {total > 1 && (
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronLeft />
            </button>

            <span className="text-sm text-white">
              {page + 1} / {total}
            </span>

            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
