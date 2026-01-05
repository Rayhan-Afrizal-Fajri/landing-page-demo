import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef } from "react";

const TOTAL_PAGES = 20;
const AUTO_FLIP_DELAY = 3500;

export default function FlipBook() {
  const bookRef = useRef(null);
  const intervalRef = useRef(null);
//   const [autoPlay, setAutoPlay] = useState(false);
//   const [showThumbs, setShowThumbs] = useState(false);

  const next = () => bookRef.current?.pageFlip().flipNext();
  const prev = () => bookRef.current?.pageFlip().flipPrev();

//   const startAutoPlay = () => {
//     setAutoPlay(true);
//     intervalRef.current = setInterval(next, AUTO_FLIP_DELAY);
//   };

//   const stopAutoPlay = () => {
//     setAutoPlay(false);
//     clearInterval(intervalRef.current);
//   };

//   const toggleFullscreen = () => {
//     const el = bookRef.current?.getPageFlip().getUIElement();
//     if (!document.fullscreenElement) {
//       el.requestFullscreen();
//     } else {
//       document.exitFullscreen();
//     }
//   };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <div className="relative">
      <HTMLFlipBook
        ref={bookRef}
        width={360}
        height={480}
        showCover
        mobileScrollSupport
        className="shadow-2xl rounded-2xl mx-auto"
      >
        {[...Array(TOTAL_PAGES)].map((_, i) => (
          <div key={i} className="bg-white">
            <img
              src={`/pdf/page-${i + 1}.jpg`}
              className="w-auto h-auto object-cover"
              alt={`Page ${i + 1}`}
            />
          </div>
        ))}
      </HTMLFlipBook>

      {/* CONTROLS */}
      <div className="flex justify-center flex-wrap gap-3 mt-6">
        <button onClick={prev} className="btn">Prev</button>
        <button onClick={next} className="btn">Next</button>
      </div>

      {/* THUMBNAILS */}
      {/* {showThumbs && (
        <div className="grid grid-cols-5 gap-2 mt-6">
          {[...Array(TOTAL_PAGES)].map((_, i) => (
            <img
              key={i}
              src={`/pdf/page-${i + 1}.jpg`}
              className="cursor-pointer rounded-lg hover:scale-105 transition"
              onClick={() => bookRef.current.pageFlip().flip(i)}
            />
          ))}
        </div>
      )} */}
    </div>
  );
}
