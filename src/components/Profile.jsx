import { certificates } from '../data';

export default function Profile() {
  return (
    <section
      id="profile"
      className="bg-secondary/5 py-28"
    >
      <div className="container mx-auto px-8 space-y-28">

        {/* === PROFIL PERUSAHAAN === */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="../../public/images/hero/hero-1.webp"
            className="rounded-2xl shadow-lg"
            alt="Profil Ayam Geprek Mas Jambang"
          />

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-12">
              Tentang <span className="text-primary">Franchise</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ayam Geprek Sederhana Mas Jambang</strong> Ayam Geprek Sederhana Mas Jambang adalah brand kuliner 
              lokal yang lahir dari semangat menghadirkan makanan lezat, praktis, dan 
              terjangkau bagi masyarakat Indonesia. Dengan mengusung konsep ayam geprek yang 
              sederhana namun kaya rasa, kami berkomitmen untuk selalu menjaga kualitas 
              bahan baku, konsistensi cita rasa, serta standar pelayanan di setiap gerai.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
                Sejak awal berdiri, Ayam Geprek Sederhana Mas Jambang dikembangkan 
                dengan sistem operasional yang mudah dijalankan, bahkan oleh pelaku 
                usaha pemula. Mulai dari proses pengolahan, penyajian, hingga manajemen operasional, 
                seluruh sistem telah dirancang agar efisien, terukur, dan dapat direplikasi 
                dengan baik di berbagai lokasi.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
                Kami percaya bahwa kesuksesan sebuah brand tidak hanya diukur 
                dari jumlah gerai, tetapi juga dari keberhasilan para mitra yang tumbuh 
                bersama kami. Oleh karena itu, Ayam Geprek Sederhana Mas Jambang 
                hadir sebagai solusi franchise yang tidak hanya menawarkan produk, 
                tetapi juga pendampingan bisnis, pelatihan, dan dukungan berkelanjutan.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Dengan margin usaha yang kompetitif, permintaan pasar yang stabil, 
              serta brand yang terus berkembang, Ayam Geprek Sederhana 
              Mas Jambang menjadi pilihan tepat bagi Anda yang ingin memulai 
              atau mengembangkan bisnis kuliner dengan risiko yang lebih terkontrol.
            </p>
          </div>
        </div>

        {/* === SEJARAH SINGKAT === */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-10">
                    Sejarah Singkat
                </h3>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                    Perjalanan Ayam Geprek Sederhana Mas Jambang dimulai dari sebuah 
                    gerai kecil yang berfokus pada satu tujuan sederhana: menyajikan ayam 
                    geprek dengan rasa yang konsisten dan harga yang ramah di kantong. Berbekal 
                    resep yang terus disempurnakan serta sambal khas yang menjadi ciri 
                    utama, gerai pertama mendapatkan respon positif dari pelanggan.
                    </p>
                    <p>
                    Seiring berjalannya waktu, permintaan yang terus meningkat mendorong kami untuk 
                    memperbaiki sistem kerja, menyusun standar operasional, serta memastikan 
                    kualitas produk tetap terjaga meskipun jumlah pesanan semakin bertambah. Dari 
                    sinilah fondasi bisnis Ayam Geprek Sederhana Mas Jambang mulai 
                    terbentuk secara lebih profesional.
                    </p>
                    <p>
                    Melihat potensi pasar yang besar dan minat masyarakat terhadap konsep 
                    kemitraan, kami memutuskan untuk membuka peluang franchise. Langkah ini 
                    diambil dengan persiapan matang, mulai dari penyusunan SOP, 
                    pelatihan mitra, hingga sistem pendampingan agar setiap mitra dapat 
                    menjalankan usaha dengan percaya diri.
                    </p>
                    <p>
                    Hingga saat ini, Ayam Geprek Sederhana Mas Jambang terus 
                    berkembang dan dipercaya oleh mitra di berbagai daerah. Kami senantiasa 
                    melakukan inovasi, baik dari sisi menu, pelayanan, maupun 
                    sistem bisnis, demi memastikan bahwa brand ini dapat 
                    terus tumbuh secara berkelanjutan dan memberikan manfaat jangka 
                    panjang bagi seluruh mitra.
                    </p>
                </div>
            </div>
            <img
                src="../../public/images/hero/hero-1.webp"
                className="rounded-2xl shadow-lg"
                alt="Profil Ayam Geprek Mas Jambang"
            />
        </div>

        {/* === SERTIFIKAT & PENCAPAIAN === */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Sertifikat & Pencapaian
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certificates.map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <img
                  src={i.src}
                  alt={i.alt}
                  className="mx-auto mb-4 h-42 object-contain"
                />
                <p className="text-sm font-medium text-gray-700">
                  {i.alt}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
