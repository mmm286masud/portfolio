const services = [
  {
    icon: DesktopIcon,
    title: 'Custom Desktop Applications',
    desc: 'Personalized desktop tools designed for specific workflows, productivity needs, learning systems, or creative experiments.',
    examples: ['Study & quiz apps', 'Productivity tools', 'Desktop dashboards', 'Small business tools', 'Electron apps'],
    color: '#2196F3',
    bg: '#EAF4FF',
  },
  {
    icon: GlobeIcon,
    title: 'Portfolio & Business Websites',
    desc: 'Clean, modern websites that help people or small businesses present themselves professionally online.',
    examples: ['Personal portfolios', 'Small business pages', 'Service websites', 'Product landing pages', 'Class project sites'],
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: LightningIcon,
    title: 'AI-Assisted Prototypes',
    desc: 'Fast concept-to-demo builds using AI for planning, writing, layout ideas, and code support while keeping human judgment at the center.',
    examples: ['Feature prototypes', 'UX concepts', 'MVP layouts', 'Interactive mockups'],
    color: '#0891B2',
    bg: '#ECFEFF',
  },
  {
    icon: SparklesIcon,
    title: 'Interactive Digital Experiences',
    desc: 'Creative websites and interfaces that use storytelling, motion, and thoughtful design to make information feel engaging.',
    examples: ['Scrollytelling sites', 'Visual timelines', 'Data stories', 'Creative portfolios'],
    color: '#D97706',
    bg: '#FFFBEB',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label justify-center">
            <Dot /> What I Build
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-dark tracking-tight mb-4">
            Services
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            Four focused areas where I combine human creativity with AI-assisted
            workflows to deliver clean, purposeful digital work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map(s => {
            const Icon = s.icon
            return (
              <div key={s.title} className="card p-7 group">

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: s.bg }}
                >
                  <div className="w-6 h-6" style={{ color: s.color }}>
                    <Icon />
                  </div>
                </div>

                {/* Title & desc */}
                <h3 className="text-xl font-bold text-text-dark mb-3">{s.title}</h3>
                <p className="text-sm text-text-body leading-relaxed mb-5">{s.desc}</p>

                {/* Examples */}
                <div className="flex flex-wrap gap-2">
                  {s.examples.map(ex => (
                    <span
                      key={ex}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-site-border text-text-body"
                    >
                      {ex}
                    </span>
                  ))}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
}

function DesktopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M2 12h20M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4.5 13H11l-1 9 9-11H13l1-9z" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" />
      <path d="M5 18l.5 1.5L7 20l-1.5.5L5 22l-.5-1.5L3 20l1.5-.5L5 18z" />
    </svg>
  )
}
