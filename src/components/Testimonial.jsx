import { useEffect, useState } from "react";
import { testimonials } from "../data";

const AUTO_DELAY = 3500;

export default function Testimonial() {
  const [centerIndex, setCenterIndex] = useState(0);

  /* =====================
     AUTO SLIDE
  ====================== */
    const next = () => {
        setCenterIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

  useEffect(() => {
    const i = setInterval(() => {
      next();
    }, AUTO_DELAY);
    return () => clearInterval(i);
  }, [centerIndex]);

  /* =====================
     GET 3 ITEMS
  ====================== */
  const getVisible = () => {
    const total = testimonials.length;

    const prev =
      centerIndex === 0 ? total - 1 : centerIndex - 1;
    const next =
      centerIndex === total - 1 ? 0 : centerIndex + 1;

    return [
      testimonials[prev],
      testimonials[centerIndex],
      testimonials[next],
    ];
  };

  const visible = getVisible();

  return (
    <section id="testimonial" className="py-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-14">
        Apa Kata <span className="text-primary">Mitra Kami</span>
      </h2>

      <div className="flex justify-center items-stretch gap-8">
        {visible.map((item, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${
              i === 1
                ? "scale-105 opacity-100"
                : "scale-90 opacity-60"
            }`}
          >
            <Card data={item} active={i === 1} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================
   CARD
===================== */
function Card({ data, active }) {
  return (
    <div
      className={`bg-white p-8 rounded-2xl border shadow transition-all w-[340px]
      ${active ? "shadow-xl" : ""}`}
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {data.name.charAt(0)}
        </div>

        <div className="ml-4">
          <div className="font-bold text-lg">{data.name}</div>
          {/* <Star rating={data.rating} /> */}
        </div>
      </div>

      <p className="text-gray-600 italic leading-relaxed">
        “{data.quote}”
      </p>
    </div>
  );
}

/* =====================
   STAR
===================== */
function Star({ rating }) {
  return (
    <div className="flex gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={`w-5 h-5 ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ))}
    </div>
  );
}
