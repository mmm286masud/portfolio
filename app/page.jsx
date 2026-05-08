import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Workflow from '../components/Workflow'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Workflow />
      <Services />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
