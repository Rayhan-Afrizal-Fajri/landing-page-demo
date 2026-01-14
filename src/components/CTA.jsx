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

              <div className="flex flex-wrap justify-center items-center mt-8 gap-6 text-[#ECECEC] text-sm">
                  <div className="flex items-center">
                      <svg className="w-4 h-4 text-accent3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                      </svg>
                      Respon Cepat 5 Menit
                  </div>
                  <div className="flex items-center">
                      <svg className="w-4 h-4 text-accent3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                      </svg>
                      Lorem Ipsum
                  </div>
                  <div className="flex items-center">
                      <svg className="w-4 h-4 text-accent3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                      </svg>
                      Dolor sit amet
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
