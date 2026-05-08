const navLinks = [
  { href: '#about',    label: 'About' },
  { href: '#workflow', label: 'AI Workflow' },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work' },
  { href: '#future',   label: 'Future' },
  { href: '#contact',  label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-site-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-brand rounded-lg flex items-center justify-center">
                <FooterBotIcon />
              </div>
              <span className="font-bold text-text-dark tracking-tight">
                Masud <span className="text-brand">Builds</span>
              </span>
            </div>
            <p className="text-xs text-text-body">Custom Apps. AI-Assisted.</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium text-text-body hover:text-text-dark transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-text-body text-center md:text-right">
            &copy; {new Date().getFullYear()} Masud. Built with AI collaboration.
          </p>

        </div>

      </div>
    </footer>
  )
}

function FooterBotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="8" width="12" height="9" rx="2.5" fill="white" fillOpacity="0.95" />
      <rect x="6" y="3" width="8" height="6" rx="2" fill="white" fillOpacity="0.95" />
      <circle cx="8.5" cy="6" r="1.5" fill="#2196F3" />
      <circle cx="11.5" cy="6" r="1.5" fill="#2196F3" />
    </svg>
  )
}
