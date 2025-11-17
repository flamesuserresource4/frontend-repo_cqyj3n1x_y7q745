import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Ruben Vroman
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-300">
            Building playful, modern products at the intersection of creative tech and commercial software.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-2.5 rounded-md bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition">See work</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-zinc-900/80 hover:bg-zinc-900 text-zinc-200 text-sm font-medium border border-zinc-800 transition">Get in touch</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
    </section>
  )
}
