import { useState } from "react";
import { faqs } from "../data";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="mx-auto px-6 py-28 md:py-32 bg-gray-50 mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6">
        Frequently asked questions
      </h2>
      <p className="text-center text-gray-500 max-w-xl mx-auto mb-14">
        Temukan jawaban dari pertanyaan yang paling sering diajukan oleh calon mitra kami.
      </p>


      <div className="divide-y divide-gray-300 px-2">
        {faqs.map((f, i) => {
          const isOpen = open === i;

          return (
            <div key={i} className="py-6 max-w-6xl mx-auto">
              {/* Question */}
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span className="text-base md:text-lg font-medium text-gray-800">
                  {f.q}
                </span>

                {/* Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-center mt-16 text-gray-500">
        Masih ada pertanyaan? <a href="#" className="text-primary font-medium">Hubungi kami</a>
      </p>

    </section>
  );
}
