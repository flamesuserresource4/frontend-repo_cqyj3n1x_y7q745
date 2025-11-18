import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full bg-black overflow-hidden">
      {/* Animated backdrop orbs */}
      <div className="bg-orb bg-orb--orange -top-32 -left-20" />
      <div className="bg-orb bg-orb--purple top-40 -right-10" />
      <div className="bg-orb bg-orb--cyan -bottom-20 left-1/3" />

      {/* Spline scene */}
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
      </div>

      {/* Gradient scrim for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Ruben Vroman
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-300">
            Building playful, modern products at the intersection of creative tech and commercial software.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#work" className="glass glow-border card-hover px-5 py-3 rounded-xl text-center text-white">
              See work
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#highlights" className="glass glow-border card-hover px-5 py-3 rounded-xl text-center text-zinc-200">
              Highlights
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#contact" className="glass glow-border card-hover px-5 py-3 rounded-xl text-center text-orange-300">
              Get in touch
            </motion.a>
          </div>
        </motion.div>

        {/* Floating stat cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { k: 'Years', v: '15+' },
            { k: 'Products', v: '25+' },
            { k: 'Companies', v: '3x founder' },
          ].map(({ k, v }) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="glass glow-border p-5 rounded-2xl border border-zinc-800/60 card-hover"
            >
              <p className="text-zinc-400 text-xs tracking-wide uppercase">{k}</p>
              <p className="mt-1 text-2xl font-semibold text-white">{v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
