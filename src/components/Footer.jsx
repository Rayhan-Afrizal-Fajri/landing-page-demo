export default function Footer() {
  return (

    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-100 blur-sm">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-secondary rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-secondary rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 border-2 border-secondary rounded-full"></div>
      </div>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-6">
                      {/* <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                      </div> */}
                      <div>
                          <div className="text-2xl font-bold text-secondary">Ayam Geprek Sederhana Mas Jambang</div>
                      </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                      Franchise Ayam Greprek Sederhana Mas Jamblang yang menghadirkan peluang usaha ayam geprek dengan sistem sederhana, rasa konsisten, dan support penuh untuk mitra.
                  </p>
                  
                  <div className="flex space-x-4">
                      <a href="https://wa.me/6281234567890" target="_blank"
                          className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.388 3.488">
                              </path>
                          </svg>
                      </a>
                      <a href="#" target="_blank"
                          className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                      </a>
                      <a href="#" target="_blank"
                          className="w-10 h-10 bg-black rounded-xl flex items-center justify-center hover:bg-neutral-900 transition-colors">
                          <svg className="w-7 h-7 text-white" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g id="Icon/Social/tiktok-white" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" id="Fill-1" fill="#FFFFFF"></path>
                              </g>
                          </svg>
                      </a>
                      <a href="#" target="_blank"
                          className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                      </a>
                  </div>
              </div>

              <div>
                  <h4 className="text-lg font-bold text-secondary mb-4">Menu Cepat</h4>
                  <ul className="space-y-3">
                      <li>
                          <a href="#home"
                              className="text-gray-300 hover:text-secondary transition-colors flex items-center group">
                              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none"
                                  stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                  </path>
                              </svg>
                              Beranda
                          </a>
                      </li>
                      <li>
                          <a href="#profile"
                              className="text-gray-300 hover:text-secondary transition-colors flex items-center group">
                              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none"
                                  stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                  </path>
                              </svg>
                              Profil
                          </a>
                      </li>
                      <li>
                          <a href="#partnership"
                              className="text-gray-300 hover:text-secondary transition-colors flex items-center group">
                              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none"
                                  stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                  </path>
                              </svg>
                              Kemitraan
                          </a>
                      </li>
                      <li>
                          <a href="#testimonial"
                              className="text-gray-300 hover:text-secondary transition-colors flex items-center group">
                              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none"
                                  stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                  </path>
                              </svg>
                              Testimoni
                          </a>
                      </li>
                      <li>
                          <a href="#location"
                              className="text-gray-300 hover:text-secondary transition-colors flex items-center group">
                              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none"
                                  stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                  </path>
                              </svg>
                              Lokasi
                          </a>
                      </li>
                      <li>
                          <a href="#faq"
                              className="text-gray-300 hover:text-secondary transition-colors flex items-center group">
                              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none"
                                  stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                  </path>
                              </svg>
                              FAQ
                          </a>
                      </li>
                      {/* <li>
                          <a href="#contact"
                              className="text-gray-300 hover:text-secondary transition-colors flex items-center group">
                              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none"
                                  stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                  </path>
                              </svg>
                              Kontak
                          </a>
                      </li> */}
                  </ul>
              </div>

              <div>
                  <h4 className="text-lg font-bold text-secondary mb-4">Hubungi Kami</h4>
                  <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                          <div
                              className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                  </path>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                          </div>
                          <div>
                              <div className="text-sm text-gray-300">Alamat</div>
                              <div className="text-gray-300 text-sm">
                                  Jl. Jenderal Sudirman No. 123 <br/>
                                  Cilacap Tengah, Jawa Tengah 53212
                              </div>
                          </div>
                      </div>

                      <div className="flex items-start space-x-3">
                          <div
                              className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                  <path
                                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.388 3.488">
                                  </path>
                              </svg>
                          </div>
                          <div>
                              <div className="text-sm text-gray-300">WhatsApp</div>
                              <a href="https://wa.me/6285726238765"
                                  className="text-gray-300 hover:text-secondary transition-colors text-sm">
                                  +62 812-3456-7890
                              </a>
                          </div>
                      </div>

                      <div className="flex items-start space-x-3">
                          <div
                              className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor"
                                  viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                          </div>
                          <div>
                              <div className="text-sm text-gray-300">Jam Operasional</div>
                              <div className="text-gray-300 text-sm">
                                  24 Jam (Siaga) <br />
                                  <span className="text-xs text-gray-300">Respon cepat via WhatsApp</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="border-t border-secondary/50 pt-8 text-center">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-gray-300 text-sm">
                      © 2025 Ayam Geprek Sederhana Mas Jambang. Semua hak dilindungi undang-undang.
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-300">
                      <a href="#" className="hover:text-secondary transition-colors">Syarat & Ketentuan</a>
                      <a href="#" className="hover:text-secondary transition-colors">Kebijakan Privasi</a>
                      <a href="#faq" className="hover:text-secondary transition-colors">FAQ</a>
                  </div>
              </div>
          </div>
      </div>
  </footer>

  )
}
