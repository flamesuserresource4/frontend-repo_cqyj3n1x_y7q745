import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Highlights, Work, Collaborations, Contact } from './components/Sections'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Ambient grid lines */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#ffffff0e_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <Navbar />
      <main>
        <Hero />

        {/* Section divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl px-4"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </motion.div>

        <About />
        <Highlights />
        <Work />
        <Collaborations />
        <Contact />
      </main>
      <footer className="relative bg-black border-t border-zinc-900 text-zinc-500 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Ruben Vroman</p>
          <p className="text-zinc-600">Built with love and a dash of playfulness</p>
        </div>
      </footer>
    </div>
  )
}

export default App
