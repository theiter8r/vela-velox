import Masthead from './components/Masthead'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Process from './components/Process'
import ClientWords from './components/ClientWords'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Masthead />
      <main>
        <Hero />
        <About />
        <hr className="rule mx-5 md:mx-10" />
        <Work />
        <hr className="rule mx-5 md:mx-10" />
        <Services />
        <hr className="rule mx-5 md:mx-10" />
        <Process />
        <hr className="rule mx-5 md:mx-10" />
        <ClientWords />
      </main>
      <Footer />
    </>
  )
}
