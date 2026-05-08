import FlyingBuilderBot from './FlyingBuilderBot'

const stats = [
  { value: '3+',    label: 'Project Directions' },
  { value: 'AI',    label: 'Assisted Workflow' },
  { value: 'Web+',  label: 'Desktop Apps' },
  { value: '100%',  label: 'Built With Purpose' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-site-bg pt-16">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-soft via-site-bg to-site-bg" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Flying builder bot */}
      <FlyingBuilderBot />

      {/* Large soft blue glow blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #2196F3 0%, transparent 70%)' }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-site-border rounded-full px-4 py-2 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-text-body tracking-wide">AI-Assisted. Human-Driven.</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[72px] font-extrabold text-text-dark leading-[1.08] tracking-tight mb-6">
          Turning Ideas Into{' '}
          <span className="gradient-text">Custom Software</span>{' '}
          Fast.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-text-body max-w-2xl mx-auto mb-10 leading-relaxed">
          I design and build custom desktop applications, portfolio websites, and
          business-ready digital experiences using AI-assisted workflows, human
          judgment, and fast iteration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a href="#work" className="btn-primary">
            View My Work
          </a>
          <a href="#workflow" className="btn-secondary">
            See My AI Workflow
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-text-dark">{s.value}</div>
              <div className="text-sm text-text-body mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-site-bg to-transparent pointer-events-none" />
    </section>
  )
}
