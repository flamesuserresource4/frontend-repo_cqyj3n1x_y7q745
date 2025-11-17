import { Mail, Linkedin, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center text-sm">
      <li><a href="#about" className="text-zinc-300 hover:text-white transition">About</a></li>
      <li><a href="#highlights" className="text-zinc-300 hover:text-white transition">Highlights</a></li>
      <li><a href="#work" className="text-zinc-300 hover:text-white transition">Work</a></li>
      <li><a href="#collabs" className="text-zinc-300 hover:text-white transition">Collaborations</a></li>
      <li><a href="#contact" className="text-zinc-300 hover:text-white transition">Contact</a></li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-white">
          <span className="text-orange-500">R</span>uben <span className="text-zinc-400">Vroman</span>
        </a>
        <nav className="hidden md:block">{nav}</nav>
        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@ruben.vc"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-orange-600 hover:bg-orange-500 text-white text-sm transition"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/ruben-vroman-5822a430"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-sm border border-zinc-800 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <button className="md:hidden p-2 text-zinc-200" onClick={() => setOpen(v => !v)}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-800 px-4 py-4 bg-black">{nav}</div>
      )}
    </header>
  );
}
