export function About() {
  return (
    <section id="about" className="bg-black text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-white">About</h2>
          <p className="mt-4 leading-relaxed">
            Built products for 15+ years across creative tech and commercial software. Moved from film and interactive media to creating apps and campaigns for big retail across Europe. Founded Moonlander… Co-founded Sineways…
          </p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Built products for 15+ years across creative tech… Participated in movies such as Publieke Werken… Founded BoemanFX, Moonlander.ai, and Sineways…
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-48 h-48 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner" />
        </div>
      </div>
    </section>
  )
}

export function Highlights() {
  const items = [
    { title: 'Creative Tech', desc: 'Interactive media, real-time 3D, and playful user experiences.' },
    { title: 'Retail & Commerce', desc: 'Shipped apps and campaigns across Europe for major brands.' },
    { title: 'Founding & Strategy', desc: 'Co-founded ventures and led product from 0→1.' },
  ]
  return (
    <section id="highlights" className="bg-black text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-white">Highlights</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Work() {
  const items = [
    { title: 'Moonlander.ai', tag: 'Founder' },
    { title: 'Sineways', tag: 'Co-founder' },
    { title: 'Retail Campaigns', tag: 'Europe-wide' },
  ]
  return (
    <section id="work" className="bg-black text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-white">Work</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.title} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-xs inline-flex px-2 py-1 rounded bg-orange-600/20 text-orange-400 border border-orange-700/30">{it.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Collaborations() {
  return (
    <section id="collabs" className="bg-black text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-white">Collaborations</h2>
        <p className="mt-4 text-zinc-400 max-w-3xl">Open to partnering with studios, brands, and founders on playful, high-impact products and experiences.</p>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-black text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">Let’s build something</h2>
            <p className="mt-1 text-zinc-400">hello@ruben.vc</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:hello@ruben.vc" className="px-5 py-2.5 rounded-md bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition">Email</a>
            <a href="https://www.linkedin.com/in/ruben-vroman-5822a430" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium border border-zinc-700 transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
