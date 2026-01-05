import { useState, useEffect } from "react";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    
                    {/* Logo - Versi pendek untuk mobile */}
                    <div className="flex-shrink-0">
                        <h1 className="font-bold text-primary">
                            <span className="hidden sm:inline text-xl">Ayam Geprek Mas Jampang</span>
                            <span className="sm:hidden text-lg">AG Mas Jampang</span>
                        </h1>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col space-y-1.5"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {['Beranda', 'Profil', 'Kemitraan', 'Testimoni', 'FAQ', 'Lokasi'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary font-medium">
                                {item}
                            </a>
                        ))}
                        <a href="#cta" className="bg-primary text-white px-4 py-2 rounded-md font-medium ml-4">
                            Daftar Mitra
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        {['Beranda', 'Profil', 'Kemitraan', 'Testimoni', 'FAQ', 'Lokasi'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block py-2.5 px-4 text-gray-700 hover:bg-white rounded-md font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#cta"
                            className="block py-2.5 px-4 bg-primary text-white text-center rounded-md font-medium mt-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Daftar Mitra
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;