import { useEffect, useState } from "react";
import { testimonials } from "../data";

const AUTO_DELAY = 6000;

export default function Testimonial() {
  const [centerIndex, setCenterIndex] = useState(0);

  /* =====================
     AUTO SLIDE
  ====================== */
  const next = () => {
    setCenterIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
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

    const prev = centerIndex === 0 ? total - 1 : centerIndex - 1;
    const next = centerIndex === total - 1 ? 0 : centerIndex + 1;

    return [testimonials[prev], testimonials[centerIndex], testimonials[next]];
  };

  const visible = getVisible();

  return (
    <section id="testimoni" className="py-20 overflow-hidden">
      <p className="text-black text-center md:text-2xl font-bold mb-2">
        Brand kami dapat kamu temukan di
      </p>

    {/* Logo brand */}
   <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
      <div className="flex justify-center items-center">
        <img
          src="/images/brands/gofood.jpg"
          alt="Brand 1"
          className="h-24 md:h-28 lg:h-32 object-contain"
        />
      </div>

      <div className="flex justify-center items-center">
        <img
          src="/images/brands/maxim.jpg"
          alt="Brand 2"
          className="h-24 md:h-28 lg:h-32 object-contain"
        />
      </div>

      <div className="flex justify-center items-center">
        <img
          src="/images/brands/grabfood.jpg"
          alt="Brand 3"
          className="h-24 md:h-28 lg:h-32 object-contain"
        />
      </div>

      <div className="flex justify-center items-center">
        <img
          src="/images/brands/shopeefood.jpg"
          alt="Brand 4"
          className="h-24 md:h-28 lg:h-32 object-contain"
        />
      </div>
    </div>

      <h2 className="text-accent1 text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-14">
        Apa Kata <span className="text-secondary">Mitra Kami?</span>
      </h2>

      <div className="flex justify-center items-stretch gap-8">
        {visible.map((item, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${
              i === 1 ? "scale-105 opacity-100" : "scale-90 opacity-60"
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
        <div className="w-16 h-16 bg-[#C62828] rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {data.name.charAt(0)}
        </div>

        <div className="ml-4">
          <div className="font-bold text-lg">{data.name}</div>
          <div className="font-medium text-sm italic text-gray-600">
            Cabang {data.cabang}
          </div>
        </div>
      </div>

      <div className="w-full h-40 overflow-hidden rounded-xl mb-5">
        <img
          src={data.src}
          alt={data.alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <p className="text-gray-600 italic leading-relaxed">“{data.quote}”</p>
    </div>
  );
}
