import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageNarrativeSection({
  title,
  images,
  reverse = false,
  children,
}) {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((prev) => (prev + 1) % images.length);

  const prev = () =>
    setActive((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="space-y-8">
      {/* TITLE */}
      <h2 className={`text-secondary text-3xl md:text-4xl lg:text-6xl font-bold ${title === 'Sejarah Singkat' ? 'text-right' : ''} `}>
        {title}
      </h2>

      {/* CONTENT */}
      <div
        className={`flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } gap-6`}
      >
        {/* IMAGE AREA */}
        <div className="md:w-1/2 space-y-4">
          {/* MAIN IMAGE */}
          <div className="relative h-[360px] rounded-2xl overflow-hidden">
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="w-full h-full object-cover"
            />

            {/* ARROWS */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2
                         bg-black/40 text-white p-2 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2
                         bg-black/40 text-white p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>

          {/* PAGINATION */}
          <div className="text-sm text-accent1">
            {active + 1} / {images.length}
          </div>

          {/* THUMBNAILS (desktop only) */}
          <div className="hidden md:flex gap-3 overflow-x-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                onClick={() => setActive(i)}
                className={`h-20 w-28 object-cover rounded-lg cursor-pointer
                  ${
                    active === i
                      ? 'ring-2 ring-primary'
                      : 'opacity-60'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* NARRATIVE */}
        <div className="md:w-1/2 text-accent1 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}
