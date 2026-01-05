export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-primary text-white text-center">
      {/* <div className="container mx-auto px-6 bg-white/20 h-auto w-">
        <h2 className="text-4xl font-bold mb-6">
          Siap Bergabung?
        </h2>
        <p className="opacity-80 mb-8">
          Mulai bisnis ayam geprek sekarang juga.
        </p>
        <a
          href="#contact"
          className="bg-white text-primary px-8 py-4 rounded-2xl font-bold"
        >
          Konsultasi Gratis
        </a>
      </div> */}
      <div className="relative z-10 w-full mx-auto px-6 md:px-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-secondary mb-4">
                  Siap Bergabung?
              </h2>
              <p className="text-sm md:text-md lg:text-lg  text-white mb-8 max-w-2xl mx-auto">
                  Jangan tunggu lagi! Pesan motor impian Anda sekarang juga dan rasakan pengalaman berkendara terbaik di
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">

                  <a href="https://wa.me/{{ $no_telp }}?text=Halo%20Akrom%20Rental%2C%20saya%20ingin%20booking%20motor%20sekarang!"
                      target="_blank"
                      className="text-center inline-flex items-center justify-center bg-green-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-green-600 hover:scale-105 text-lg group">
                      <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.388 3.488">
                          </path>
                      </svg>
                      Konsultasi Sekarang
                  </a>
              </div>

              <div className="flex flex-wrap justify-center items-center mt-8 gap-6 text-white text-sm">
                  <div className="flex items-center">
                      <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                      </svg>
                      Respon Cepat 5 Menit
                  </div>
                  <div className="flex items-center">
                      <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                      </svg>
                      Lorem Ipsum
                  </div>
                  <div className="flex items-center">
                      <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
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
