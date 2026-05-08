'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about',    label: 'About' },
  { href: '#workflow', label: 'AI Workflow' },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work' },
  { href: '#future',   label: 'Future' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-site-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-sm">
            <NavBotIcon />
          </div>
          <span className="font-bold text-text-dark text-[17px] tracking-tight">
            Masud <span className="text-brand">Builds</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-body hover:text-text-dark transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-brand text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-brand-hover transition-colors"
        >
          Let&apos;s Build
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-body rounded-lg hover:bg-gray-100 transition"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-site-border px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-body hover:text-text-dark py-2.5 border-b border-site-border last:border-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Build
          </a>
        </div>
      )}
    </header>
  )
}

function NavBotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="8" width="12" height="9" rx="2.5" fill="white" fillOpacity="0.95" />
      <rect x="6" y="3" width="8" height="6" rx="2" fill="white" fillOpacity="0.95" />
      <circle cx="8.5" cy="6" r="1.5" fill="#2196F3" />
      <circle cx="11.5" cy="6" r="1.5" fill="#2196F3" />
      <rect x="2" y="11" width="2.5" height="3" rx="1" fill="white" fillOpacity="0.7" />
      <rect x="15.5" y="11" width="2.5" height="3" rx="1" fill="white" fillOpacity="0.7" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6"  x2="19" y2="6" />
      <line x1="3" y1="11" x2="19" y2="11" />
      <line x1="3" y1="16" x2="19" y2="16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="4" y1="4" x2="18" y2="18" />
      <line x1="18" y1="4" x2="4" y2="18" />
    </svg>
  )
}
