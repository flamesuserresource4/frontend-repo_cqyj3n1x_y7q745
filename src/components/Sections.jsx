import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="relative bg-black text-zinc-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb--orange -top-48 right-1/4 opacity-30" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold text-white">About</h2>
          <div className="mt-6 glass glow-border p-6 rounded-2xl border border-zinc-800/60">
            <p className="leading-relaxed">
              Built products for 15+ years across creative tech and commercial software. Moved from film and interactive media to creating apps and campaigns for big retail across Europe. Founded Moonlander… Co-founded Sineways…
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Built products for 15+ years across creative tech… Participated in movies such as Publieke Werken… Founded BoemanFX, Moonlander.ai, and Sineways…
            </p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-600/40 via-amber-400/30 to-fuchsia-600/30 blur-xl" />
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl glass glow-border border border-zinc-800/60 card-hover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Highlights() {
  const items = [
    { title: 'Creative Tech', desc: 'Interactive media, real-time 3D, and playful user experiences.' },
    { title: 'Retail & Commerce', desc: 'Shipped apps and campaigns across Europe for major brands.' },
    { title: 'Founding & Strategy', desc: 'Co-founded ventures and led product from 0→1.' },
    { title: 'ML & AI', desc: 'Applied AI in production-grade products and tools.' },
    { title: 'Leadership', desc: 'Hands-on leadership across product, design, and engineering.' },
    { title: 'Collaboration', desc: 'Partnered with studios and brands to deliver at scale.' },
  ]
  return (
    <section id="highlights" className="relative bg-black text-zinc-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb--purple -top-32 left-10 opacity-20" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold text-white">Highlights</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="p-6 rounded-2xl glass glow-border border border-zinc-800/60 card-hover"
            >
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Work() {
  const items = [
    { title: 'Moonlander.ai', tag: 'Founder', blurb: 'AI tools for creators and teams.' },
    { title: 'Sineways', tag: 'Co-founder', blurb: 'Realtime 3D + creative tech platform.' },
    { title: 'Retail Campaigns', tag: 'Europe-wide', blurb: 'Large-scale commerce activations.' },
  ]
  return (
    <section id="work" className="relative bg-black text-zinc-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb--cyan -top-24 right-20 opacity-20" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold text-white">Work</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-2xl glass glow-border border border-zinc-800/60 card-hover"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{it.title}</h3>
                <span className="text-xs inline-flex px-2 py-1 rounded bg-orange-600/20 text-orange-300 border border-orange-700/30">{it.tag}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{it.blurb}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Collaborations() {
  return (
    <section id="collabs" className="bg-black text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold text-white">Collaborations</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="glass glow-border p-6 rounded-2xl border border-zinc-800/60 card-hover">
              <h3 className="font-semibold">Studios & Brands</h3>
              <p className="mt-2 text-zinc-400">Open to partnering on playful, high-impact products and experiences.</p>
            </div>
            <div className="glass glow-border p-6 rounded-2xl border border-zinc-800/60 card-hover">
              <h3 className="font-semibold">Founders & Teams</h3>
              <p className="mt-2 text-zinc-400">Advisory, prototyping, and 0→1 product sprints.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-black text-zinc-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb--orange -bottom-40 left-10 opacity-20" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="glass glow-border p-6 rounded-2xl border border-zinc-800/60">
            <h2 className="text-3xl font-semibold text-white">Let’s build something</h2>
            <p className="mt-1 text-zinc-400">hello@ruben.vc</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@ruben.vc" className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition">Email</a>
              <a href="https://www.linkedin.com/in/ruben-vroman-5822a430" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium border border-zinc-700 transition">LinkedIn</a>
            </div>
          </div>
          <div className="glass glow-border p-6 rounded-2xl border border-zinc-800/60">
            <h3 className="font-semibold text-white">Open to collaborations</h3>
            <p className="mt-2 text-sm text-zinc-400">I collaborate with studios, brands, and founders. Tell me about your idea—let’s explore it together.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
