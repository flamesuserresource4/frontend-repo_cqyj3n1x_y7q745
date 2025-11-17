import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Highlights, Work, Collaborations, Contact } from './components/Sections'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Work />
        <Collaborations />
        <Contact />
      </main>
      <footer className="bg-black border-t border-zinc-900 text-zinc-500 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Ruben Vroman</p>
          <p className="text-zinc-600">Built with love and a dash of playfulness</p>
        </div>
      </footer>
    </div>
  )
}

export default App
