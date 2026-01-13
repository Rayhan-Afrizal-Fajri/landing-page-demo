import { useEffect, useRef, useState } from 'react';
import { heroImages } from '../data';

const AUTO_SLIDE_DELAY = 4500;

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoSlide();
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_SLIDE_DELAY);
  };

 const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
      <section id='beranda' className="py-20">
        <div className="container mx-auto px-8 flex flex-col sm:flex-row justify-between gap-12 items-center">
          {/* IMAGE SLIDER */}
          <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-300 ease-in-out h-full"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover flex-shrink-0"
                  loading="lazy"
                />
              ))}
            </div>

            {/* PREV */}
            <button
              onClick={prevSlide}
              className="w-10 h-auto absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-[#ECECEC] p-2 rounded-full hover:bg-black/60 transition"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>

            {/* NEXT */}
            <button
              onClick={nextSlide}
              className="w-10 h-auto absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-[#ECECEC] p-2 rounded-full hover:bg-black/60 transition"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

            {/* CONTENT */}
          <div className="max-w-screen-md animate__animated animate__fadeInUp">
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-6xl tracking-tight font-extrabold text-accent1">Bangun Usaha <span className='text-secondary'>Ayam Geprek</span> Bersama Kami.</h2>
              <p className="mb-8 font-light text-accent1 text-sm md:text-md lg:text-lg">
                Franchise Ayam Greprek <span className="text-secondary font-medium">Sederhana Mas Jampang</span> menghadirkan peluang usaha ayam geprek dengan sistem sederhana, rasa konsisten, dan support penuh untuk mitra.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <a href="#cta" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-[#ECECEC] bg-secondary rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                      Konsultasi Sekarang
                  </a>
                  {/* <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                      <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                      View more
                  </a>   */}
              </div>
          </div>
        </div>
      </section>
  )
}

export default Hero;
