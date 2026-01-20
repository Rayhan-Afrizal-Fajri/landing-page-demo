import Navbar from "../components/Navbar"
import ToastAuto from "../components/ToastAuto"
import Hero from "../components/Hero"
import Profile from "../components/Profile"
import Partnership from "../components/Partnership/Partnership"
import Testimonial from "../components/Testimonial"
import Location from "../components/Location"
import FAQ from "../components/FAQ"
import Contact from "../components/Contact"
import Benefits from "../components/Benefits"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import { useTheme } from "../hooks/useTheme"

export default function Home() {
  const themeState = useTheme();

  return (
    <>
      <head>
        <link rel="canonical" href="https://www.ayamgepreksederhana.com/" />
        <title>Ayam Geprek Sederhana Mas Jampang | Modal Terjangkau, Untung Besar</title>
        <meta name="description" content="Gabung jadi Mitra Franchise Ayam Geprek Sederhana Mas Jampang! Bisnis kuliner terbukti, sistem mudah, dukungan penuh." />
      </head>

      <div className="min-h-screen bg-primary flex flex-col">
        <ToastAuto />
        <Navbar themeState={themeState} />
        <Hero />
        <Benefits />
        <Profile />
        <Partnership />
        <Testimonial />
        <CTA />
        <FAQ />
        <Location />
        <Footer />
      </div>
    </>
  )
}
