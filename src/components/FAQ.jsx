import { useState } from "react";
import { faqs } from "../data";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-8 flex flex-col gap-14">
        <div className="">
          <h2 className="text-accent1 text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-4">
            <span className="text-secondary">Pertanyaan</span> Umum
          </h2>
          <p className="text-center text-accent1 max-w-xl mx-auto">
            Temukan jawaban dari pertanyaan yang paling sering diajukan oleh calon mitra kami.
          </p>
        </div>

        <div>
          <div className="mx-auto max-w-3xl">
            {faqs.map((f, i) => {
              const isOpen = open === i;

              return (
                <div key={i} className="py-6 max-w-6xl mx-auto border-b border-accent2/30">
                  {/* Question */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <span className="text-base md:text-lg font-medium text-accent1">
                      {f.q}
                    </span>

                    {/* Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`w-5 h-5 text-accent1 transition-transform duration-300 ${
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
                    className={`grid transition-all ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4 border-t pt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-accent1 opacity-75 leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center mt-8 text-accent1">
            Masih ada pertanyaan? <a href="#" className="text-secondary font-medium">Hubungi kami</a>
          </p>
        </div>
      </div>
    </section>
  );
}
