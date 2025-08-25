import Navbar from '../Components/Navbar'
import HeroSection from '../Sections/HeroSection/HeroSection'
import AboutUs from '../Sections/AboutUs/AboutUs'
import MySkills from '../Sections/MySkills/MySkills'
import Projects from '../Sections/Projects/Projects'
import Contact from '../Sections/ContactUs/ContactUs'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <MySkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
