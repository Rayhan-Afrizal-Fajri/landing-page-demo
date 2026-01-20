import { AlarmClock, Phone, MapPin } from 'lucide-react';
import logo from "/logo-ayam-geprek-sederhana.webp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-accent1">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 text-accent3 rounded-lg flex items-center justify-center font-bold">
                <img className="w-8 h-8" src={logo} alt="" />
              </div>
              <span className="font-bold">
                Ayam Geprek Sederhana Mas Jampang
              </span>
            </div>
            <p className=" text-sm leading-relaxed">
              Franchise ayam geprek dengan sistem sederhana, rasa konsisten,
              dan dukungan penuh untuk mitra di seluruh Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">
              Menu Cepat
            </h4>
            <ul className="space-y-3 text-sm">
              {["Beranda", "Profil", "Kemitraan", "Testimoni", "FAQ", "Lokasi"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className=" hover:text-[#FBC02D] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                    <MapPin size={16}></MapPin>
                    Cilacap, Jawa Tengah
                </li>
                <li className="flex items-center gap-2">
                    <Phone size={16}></Phone>
                    <a href="https://wa.me/6281234567890" className="hover:text-[#FBC02D]">
                        (+62) 898-8272-452
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <AlarmClock size={16}></AlarmClock>
                    24 Jam (Respon WhatsApp)
                </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">
              Peluang Mitra
            </h4>
            <p className=" text-sm mb-4">
              Bergabung bersama kami dan mulai usaha ayam geprek Anda hari ini.
            </p>
            <a
              href="#cta"
              className="inline-block w-full text-center bg-secondary text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Daftar Mitra
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© {year} Ayam Geprek Sederhana Mas Jampang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
