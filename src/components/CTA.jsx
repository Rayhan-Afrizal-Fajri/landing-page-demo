import { Link } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-secondary text-white text-center">
      <div className="relative z-10 w-full mx-auto px-6 md:px-12">
          <div className="bg-accent1/40 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#ECECEC] mb-4">
                  Siap <span className="text-accent3">Bergabung?</span>
              </h2>
              <p className="text-sm md:text-md lg:text-lg  text-[#ECECEC] mb-8 max-w-2xl mx-auto">
                  Tunggu Apa Lagi? Segera Miliki Bisnis Ayam Geprek Anda Sendiri dengan Sistem Franchise Terbukti dari Mas Jampang!
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">

                <a
                    href="/konsultasi"
                    className="text-center inline-flex items-center justify-center
                                bg-green-500 text-white font-bold py-4 px-8 rounded-xl
                                transition-all duration-300 hover:bg-green-600 hover:scale-105 text-lg"
                    >
                    Konsultasi Sekarang
                </a>
              </div>
          </div>
      </div>
    </section>
  );
}
