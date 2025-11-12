import React from 'react'
import { motion } from 'framer-motion'
import { Menu, Instagram, Linkedin, Mail, Phone, Behance, Dribbble, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold neon-text">RPV</a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-zinc-300" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Background gradient and grain */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b12] via-[#0a0a0f] to-black" />
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle neon overlays */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl" style={{
        background: 'radial-gradient(closest-side, rgba(139,92,246,0.35), rgba(10,10,15,0))'
      }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl" style={{
        background: 'radial-gradient(closest-side, rgba(59,130,246,0.35), rgba(10,10,15,0))'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[100dvh]">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glow-line" />
            <h1 className="futuristic-title text-4xl sm:text-6xl lg:text-7xl neon-text">
              I am Rangga Putra Visuals
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl">
              Graphic Designer & Visual Storyteller
            </p>

            {/* Animated glowing bulb/point light */}
            <motion.div
              className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_20px_6px_rgba(168,85,247,0.8)]"
              animate={{ y: [0, -10, 0], boxShadow: [
                '0 0 20px 6px rgba(168,85,247,0.8)',
                '0 0 30px 10px rgba(59,130,246,0.9)',
                '0 0 20px 6px rgba(168,85,247,0.8)'
              ]}}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const skills = [
    { name: 'Illustrator', color: 'from-purple-500 to-blue-500' },
    { name: 'Photoshop', color: 'from-blue-500 to-purple-500' },
    { name: 'After Effects', color: 'from-fuchsia-500 to-sky-500' },
  ]
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold neon-text">About</h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">I craft bold visuals, identities, and motion that connect brands with audiences through clean composition and vibrant energy.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.05 }}
              className={`relative p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 neon-ring overflow-hidden`}
            >
              <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-30 bg-gradient-to-br ${s.color}`} />
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${s.color} shadow-[0_0_22px_6px_rgba(99,102,241,0.8)]`} />
                <span className="font-semibold">{s.name}</span>
              </div>
              <p className="text-sm text-zinc-400 mt-3">Expert-level techniques, shortcuts, and an eye for detail to deliver pixel-perfect outcomes.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    img: `https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop`,
  }))
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#0d0d15] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold neon-text">Projects</h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">Selected works exploring brand systems, posters, digital campaigns, and motion experiments.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.a
              href="#"
              key={idx}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <img src={item.img} alt={item.title} className="aspect-[4/3] w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: 'inset 0 0 60px rgba(139,92,246,0.35), inset 0 0 120px rgba(59,130,246,0.35)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item.title}</span>
                  <Sparkles size={18} className="text-purple-400" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold neon-text">Contact</h2>
          <p className="text-zinc-400 mt-2">Have a project in mind? Let’s create something vibrant.</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full bg-transparent border rounded-lg p-3 border-zinc-800 focus:outline-none focus:border-purple-400 neon-ring" />
            <input type="email" placeholder="Email" className="w-full bg-transparent border rounded-lg p-3 border-zinc-800 focus:outline-none focus:border-purple-400 neon-ring" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-transparent border rounded-lg p-3 border-zinc-800 focus:outline-none focus:border-purple-400 neon-ring" />
          <textarea placeholder="Message" rows="5" className="w-full bg-transparent border rounded-lg p-3 border-zinc-800 focus:outline-none focus:border-purple-400 neon-ring" />
          <button type="button" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 font-semibold shadow-[0_0_20px_rgba(99,102,241,0.6)]">Send</button>
        </form>
        <div className="mt-8 flex items-center gap-4 text-zinc-300">
          <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin /></a>
          <a href="#" aria-label="Behance" className="hover:text-white"><Behance /></a>
          <a href="#" aria-label="Dribbble" className="hover:text-white"><Dribbble /></a>
          <a href="#" aria-label="Email" className="hover:text-white"><Mail /></a>
          <a href="#" aria-label="Phone" className="hover:text-white"><Phone /></a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-zinc-500 text-sm">© {new Date().getFullYear()} Rangga Putra Visuals. All rights reserved.</footer>
    </div>
  )
}
