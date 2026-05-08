const stages = [
  {
    label: 'Now',
    color: '#2196F3',
    bg: '#EAF4FF',
    title: 'Learning & Building',
    desc: 'Deepening skills in web development, design systems, AI-assisted workflows, and project planning through real builds.',
  },
  {
    label: 'Next',
    color: '#7C3AED',
    bg: '#F5F3FF',
    title: 'Custom Apps & Sites',
    desc: 'Building custom desktop apps, portfolio websites, and interactive project demos with increasing polish and depth.',
  },
  {
    label: 'Soon',
    color: '#0891B2',
    bg: '#ECFEFF',
    title: 'Real-World Tools',
    desc: 'Creating polished tools for real users — small businesses, students, and creators — who need something custom, not generic.',
  },
  {
    label: 'Future',
    color: '#059669',
    bg: '#ECFDF5',
    title: 'Full-Stack Builder',
    desc: 'Becoming a developer who can turn ideas into useful custom software with speed, creativity, and professionalism.',
  },
]

export default function Timeline() {
  return (
    <section id="future" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label justify-center">
            <Dot /> The Road Ahead
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-dark tracking-tight mb-4">
            Future Vision
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            I am not pretending to already be an expert. I am showing where I am
            headed — and why I believe the direction is worth pursuing.
          </p>
        </div>

        {/* Timeline desktop */}
        <div className="hidden md:block relative">

          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-site-border mx-12" />

          <div className="grid grid-cols-4 gap-6">
            {stages.map((s, idx) => (
              <div key={s.label} className="flex flex-col items-center gap-4">

                {/* Dot with label */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-sm shadow-sm z-10"
                    style={{ background: s.bg, color: s.color, border: `2px solid ${s.color}` }}
                  >
                    {s.label}
                  </div>
                </div>

                {/* Content card */}
                <div className="card p-5 w-full text-center">
                  <h3 className="font-bold text-text-dark text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-text-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline mobile — vertical */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-site-border" />

          <div className="space-y-8">
            {stages.map(s => (
              <div key={s.label} className="relative">
                {/* Dot */}
                <div
                  className="absolute -left-8 top-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: s.bg, color: s.color, border: `2px solid ${s.color}` }}
                >
                  {s.label.slice(0, 2)}
                </div>

                <div className="card p-5">
                  <div className="text-xs font-bold mb-1" style={{ color: s.color }}>{s.label}</div>
                  <h3 className="font-bold text-text-dark text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-text-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center">
          <p className="text-base text-text-body max-w-xl mx-auto">
            This site itself is proof of the direction.{' '}
            <span className="text-text-dark font-semibold">
              Built by one person, with AI as a collaborator, with purpose.
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
}
