import Cursor from './components/motion/Cursor'
import Masthead from './components/Masthead'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Process from './components/Process'
import ClientWords from './components/ClientWords'
import Footer from './components/Footer'
import AgentBriefing from './components/AgentBriefing'

export default function App() {
  return (
    <>
      <a href="#studio" className="skip-link sr-only">
        Skip to content
      </a>

      <div className="grain" aria-hidden="true" />
      <Cursor />
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

      {/* Machine-facing layer. Renders nothing on screen — see the component. */}
      <AgentBriefing />
    </>
  )
}
