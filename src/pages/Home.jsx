import Navbar from "../components/Navbar"
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

export default function Home() {
  return (
    <>
      <Navbar />
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
    </>
  )
}
