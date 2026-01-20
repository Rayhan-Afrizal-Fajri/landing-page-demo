import { useEffect, useState } from "react";
import { testimonials } from "../data";
import { brands } from "../data";
import ImageNarrativeSection from '../components/ImageNarrativeSection';
import cta1 from '/images/testimonials/gerobak-sedang-ayam-geprek-sederhana.webp';
import cta2 from '/images/testimonials/gerobak-kecil-ayam-geprek-sederhana.webp';
import cta3 from '/images/testimonials/etalase-kecil-ayam-geprek-sederhana.webp';

const AUTO_DELAY = 6000;

const ctaImages = [
  {
    src: cta1,
    alt: 'Gerobak Cabang Kebumen',
  },
  {
    src: cta2,
    alt: 'Menu 2',
  },
  {
    src: cta3,
    alt: 'Menu 3',
  },
]

const benefits = [
  {
    text: "Free royalti",
  },
  {
    text: "100% keuntungan untuk mitra",
  },
  {
    text: "Tidak ada bagi hasil",
  },
  {
    text: "Disupport oleh manajemen",
  },
  {
    text: "Dibantu survei lokasi",
  },
  {
    text: "Dibantu pelatihan SDM",
  },
  {
    text: "Free media promosi",
  },
]

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
      <div className="container mx-auto px-8 flex flex-col gap-10">
        <div className="">
          <p className="text-accent1 text-center md:text-2xl font-bold mb-8">
            Brand kami dapat kamu temukan di
          </p>

            {/* Logo brand */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-16 px-10">
              {brands.map((brand, i) => (
                <div className="flex justify-center items-center -mt-10 md:mt-0">
                  <img
                    key={i}
                    src={brand.src}
                    alt={brand.alt}
                    className={`h-${brand.h} md:h-${brand.h + 4} lg:h-${brand.h + 8} object-contain grayscale opacity-60`}
                  />
                </div>
              ))}
          </div>
        </div>

        <ImageNarrativeSection
          images={ctaImages}
          title=""
          imageContain={true}
        >
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-accent1 text-2xl md:text-3xl lg:text-5xl font-bold text-left">
              Mari Bermitra dengan <span className="text-secondary">Ayam Geprek Sederhana Mas Jampang</span>
            </h2>
            <p className="text-accent1 text-md sm:text-lg font-semibold">
              Keuntungan selama menjadi mitra Ayam Geprek Sederhana Mas Jampang:
            </p>
            <ul className="max-w-md space-y-1 text-body list-inside">
                {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        <p className="text-accent1 text-sm sm:text-md pb-0.5">{benefit.text}</p>
                    </li>
                ))}
            </ul>
          </div>
        </ImageNarrativeSection>

        <div>
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
        </div>
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
        <img className="w-16 h-16 rounded-full" src={data.profile} alt="profil" />

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
