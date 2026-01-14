import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../components/ui/ThemeToggle";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil", href: "#profil" },
  { label: "Kemitraan", href: "#kemitraan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#lokasi" },
];

export default function NavBar({ themeState }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = themeState;

  return (
    <nav className="sticky top-0 z-50 bg-primary/40 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-3 text-accent1">
            <div className="w-9 h-9 bg-secondary rounded-md flex items-center justify-center text-accent3 font-bold">
              AG
            </div>
            <span className="font-semibold text-lg hidden sm:block">
              Ayam Geprek Mas Jampang
            </span>
            <span className="font-semibold sm:hidden">
              AG Mas Jampang
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-accent1 hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}

            <ThemeToggle theme={theme} setTheme={setTheme} />

            <a
              href="#cta"
              className="bg-secondary text-[#ECECEC] px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
            >
              Daftar Mitra
            </a>
          </div>
          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-accent1"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Overlay */}
          <div
            className="absolute inset-0"
            onClick={() => setMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-16 left-0 right-0 bg-primary border-t border-primary/10 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <ThemeToggle theme={theme} setTheme={setTheme} />
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-accent1 hover:text-secondary"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-primary/10">
                <a
                  href="#cta"
                  className="block bg-secondary text-[#ECECEC] text-center py-3 rounded-md font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Daftar Mitra
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
