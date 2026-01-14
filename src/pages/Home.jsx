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
      <div className="min-h-screen bg-primary flex flex-col">
        <ToastAuto />
        <Navbar themeState={themeState} />
        <Hero />
        <Benefits />
        <Profile />
        <Partnership />
        <Testimonial />
        <FAQ />
        <Location />
        {/* <Contact /> */}
        <CTA />
        <Footer />
      </div>
    </>
  )
}
