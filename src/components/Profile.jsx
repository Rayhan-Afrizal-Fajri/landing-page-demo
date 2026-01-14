import { certificates } from '../data';
import ImageNarrativeSection from '../components/ImageNarrativeSection';
// import { heroImages } from '../data';

const profileImages = [
  // {
  //   src: 'https://images.unsplash.com/photo-1604908177522-0406c48a56da?w=1200',
  //   alt: 'Dapur Ayam Geprek',
  // },
  {
    src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200',
    alt: 'Proses Pengolahan',
  },
  {
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200',
    alt: 'Ayam Geprek',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200',
    alt: 'Outlet Ayam Geprek',
  },
  {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200',
    alt: 'Penyajian',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200',
    alt: 'Gerai',
  },
];

export default function Profile() {
  return (
    <section id="profil" className="py-20">
      <div className="container mx-auto px-8 flex flex-col gap-14">

        {/* === PROFIL FRANCHISE === */}
        <ImageNarrativeSection
          title="Tentang Franchise"
          images={profileImages}
        >
          {/* <p>
            <strong className="text-secondary">Ayam Geprek Sederhana Mas Jampang</strong> adalah
            brand kuliner lokal yang menghadirkan ayam geprek
            sederhana dengan rasa konsisten dan harga terjangkau.
          </p> */}
          <p>
            <strong className="text-secondary">Ayam Geprek Sederhana Mas Jampang</strong> merupakan peluang
            usaha yang dirancang sesuai kebutuhan pasar akan makanan lezat, terjangkau, dan cepat disajikan.
            Ayam geprek adalah menu favorit berbagai kalangan dengan permintaan yang terus ada,
            sehingga memberikan potensi penjualan yang stabil.
          </p>
          <p>
            Dengan konsep usaha yang sederhana, mitra dapat menjalankan bisnis secara lebih efisien,
            menekan biaya operasional, dan tetap menjaga kualitas rasa serta pelayanan.
            Keunggulan kami terletak pada kesederhanaan yang konsisten, sambal khasdengan tingkat kepedasan yang dapat disesuaikan,
            bahan segar yang diolah langsung saat dipesan, serta porsi jujur dengan harga bersahabat.
          </p>
          <p>
            Didukung visi jangka panjang untuk berkembang menjadi jaringan bisnis yang besar dan berkelanjutan,
            kami mengajak Anda bergabung sebagai mitra dan tumbuh bersama Ayam Geprek Sederhana Mas Jampang.
            Saatnya wujudkan bisnis kuliner yang stabil dan menguntungkan bersama kami.
          </p>
          {/* <p>
            Sistem operasional kami dirancang mudah dijalankan,
            bahkan oleh pelaku usaha pemula, dengan SOP yang
            terstandarisasi.
          </p>
          <p>
            Kami fokus pada keberhasilan mitra melalui pendampingan,
            pelatihan, dan support berkelanjutan.
          </p> */}
        </ImageNarrativeSection>

        {/* === SEJARAH === */}
        <ImageNarrativeSection
          title="Sejarah Singkat"
          images={profileImages}
          reverse
        >
          <p>
            Berawal dari keinginan menghadirkan makanan yang lezat, terjangkau, dan dekat dengan selera masyarakat,
            Ayam Geprek Sederhana Mas Jampang pertama kali berdiri pada tahun 2015.
          </p>
          <p>
            Melihat tingginya minat masyarakat terhadap ayam geprek sebagai makanan favorit sehari-hari,
            Mas Jampang berinisiatif membuka usaha ayam geprek dengan konsep sederhana namun mengutamakan rasa, kebersihan, dan pelayanan yang ramah.
          </p>
          <p>
            Dengan menggunakan bahan baku segar, sambal khas yang bisa disesuaikan tingkat kepedasannya, serta harga yang ramah di kantong,
            Ayam Geprek Sederhana Mas Jampang hadir untuk memenuhi kebutuhan makan pelanggan dari berbagai kalangan.
          </p>
          <p>
            Seiring dengan pertumbuhan usaha dan tingginya kepercayaan pelanggan, pada tanggal 09 September 2021
            Ayam Geprek Sederhana Mas Jampang secara resmi membuka sistem kemitraan franchise, dengan tujuan memperluas jaringan usaha,
            membuka lapangan kerja, dan tumbuh bersama mitra di berbagai daerah.
          </p>
          {/* <p>
            Berawal dari gerai kecil dengan satu tujuan sederhana:
            menyajikan ayam geprek berkualitas dengan harga ramah.
          </p>
          <p>
            Respon pasar yang positif mendorong kami menyusun sistem
            operasional yang lebih profesional.
          </p>
          <p>
            Hingga kini, brand terus berkembang dan dipercaya oleh
            mitra di berbagai daerah.
          </p> */}
        </ImageNarrativeSection>

        {/* === PROFIL OWNER === */}
        <section className="text-center max-w-4xl mx-auto">
          <h3 className="text-secondary text-3xl md:text-4xl font-bold mb-6">
            Profil Founder
          </h3>

          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
            alt="Founder"
            className="mx-auto w-40 h-40 rounded-full object-cover mb-6"
          />

          <p className="text-accent1 leading-relaxed">
            <strong className='text-secondary'>Bapak Jampang</strong> adalah pendiri Ayam Geprek
            Sederhana Mas Jampang. Berbekal pengalaman di bidang
            kuliner dan semangat berbagi peluang usaha, beliau
            membangun brand ini untuk membantu masyarakat memulai
            bisnis yang berkelanjutan.
          </p>
        </section>

        {/* === SERTIFIKAT === */}
        <section>
          <h3 className="text-secondary text-3xl md:text-4xl font-bold text-center mb-12">
            Sertifikat & Pencapaian
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {certificates.map((c) => (
              <div
                key={c.alt}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="mx-auto h-40 object-contain mb-4"
                />
                <p className="text-sm font-medium text-gray-700">
                  {c.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}
