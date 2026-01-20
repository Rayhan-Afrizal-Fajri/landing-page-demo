import { certificates } from '../data';
import { useState } from 'react';
import CertificateModal from './CertificateModal';
import ImageNarrativeSection from '../components/ImageNarrativeSection';
import history1 from '/images/history/outlet-awal.webp';
import history2 from '/images/history/grand-opening-ayam-geprek-sederhana.webp';
import history3 from '/images/history/proses-membuat-ayam-geprek.webp';
import history4 from '/images/history/aktivitas-karyawan.webp';
import history5 from '/images/history/suasana-outlet.webp';
import history6 from '/images/history/karyawan-ayam-geprek-sederhana.webp';
import about1 from '/images/about/gerobak-ayam-geprek-sederhana.webp';
import about2 from '/images/about/gerobak-ayam-geprek-sederhana-close-up.webp';
import about3 from '/images/about/ayam-geprek-sederhana.webp';
import about4 from '/images/about/ayam-geprek-sederhana-2.webp';
import about5 from '/images/about/grand-opening-ayam-geprek-sederhana.webp';
import owner from '/images/owner-ayam-geprek-sederhana.webp';


const historyImages = [
  {
    src: history1,
    alt: 'Gambar gerobak awal',
  },
  {
    src: history2,
    alt: 'Grand Opening Ayam Geprek Sederhana Mas Jampang',
  },
  {
    src: history3,
    alt: 'Foto outlet sebelum tercetus brand',
  },
  {
    src: history4,
    alt: 'Foto outlet sebelum tercetus brand',
  },
  {
    src: history5,
    alt: 'Foto outlet sebelum tercetus brand',
  },
  {
    src: history6,
    alt: 'Foto outlet sebelum tercetus brand',
  },
];

const aboutImages = [
  {
    src: about1,
    alt: 'Gerobak Cabang Kebumen',
  },
  {
    src: about2,
    alt: 'Menu 2',
  },
  {
    src: about3,
    alt: 'Aktivitas pada outlet',
  },
  {
    src: about4,
    alt: 'Menu 4',
  },
  {
    src: about5,
    alt: 'Menu 5',
  },
]

export default function Profile() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="profil" className="py-20">
      <div className="container mx-auto px-8 flex flex-col gap-14">

        {/* === PROFIL FRANCHISE === */}
        <ImageNarrativeSection
          title="Tentang Franchise"
          images={aboutImages}
        >
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
        </ImageNarrativeSection>

        {/* === SEJARAH === */}
        <ImageNarrativeSection
          title="Sejarah Singkat"
          images={historyImages}
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
        </ImageNarrativeSection>

        {/* === PROFIL OWNER === */}
        <section className="text-center max-w-4xl mx-auto">
          <h3 className="text-secondary text-3xl md:text-4xl font-bold mb-6">
            Profil Owner
          </h3>

          <img
            src={owner}
            alt="Founder"
            className="mx-auto w-40 h-40 rounded-full object-cover mb-6 bg-[#FBC02D]"
          />

          <p className="text-accent1 leading-relaxed">
            <strong className='text-secondary'>Bayu Tri Wahyudi</strong> adalah pendiri Ayam Geprek
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedCert(c)}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg border border-gray-200 transition relative"
              >
                <img
                  src={c.pages[0]}
                  alt={c.title}
                  className="mx-auto h-72 object-contain mb-4"
                />

                {/* Badge halaman */}
                {c.pages.length > 1 && (
                  <span className="absolute top-4 right-4 text-xs bg-black/70 text-white px-2 py-1 rounded">
                    {c.pages.length} halaman
                  </span>
                )}

                <p className="text-sm font-medium text-gray-700">
                  {c.title}
                </p>
              </button>
            ))}
          </div>

          {/* MODAL */}
          {selectedCert && (
            <CertificateModal
              cert={selectedCert}
              onClose={() => setSelectedCert(null)}
            />
          )}
        </section>
        
      </div>
    </section>
  );
}
