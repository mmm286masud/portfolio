const steps = [
  {
    num: '01',
    icon: IdeaIcon,
    title: 'Idea & Research',
    bullets: [
      'Understand the problem',
      'Define the user',
      'Study examples',
      'Decide what the app should solve',
    ],
  },
  {
    num: '02',
    icon: PlanIcon,
    title: 'AI Planning',
    bullets: [
      'Use AI to brainstorm features',
      'Compare design directions',
      'Create a project specification',
      'Break the work into steps',
    ],
  },
  {
    num: '03',
    icon: BuildIcon,
    title: 'Build & Iterate',
    bullets: [
      'Generate starter code',
      'Edit and refine manually',
      'Test layouts and interactions',
      'Keep the design consistent',
    ],
  },
  {
    num: '04',
    icon: TestIcon,
    title: 'Test & Improve',
    bullets: [
      'Check usability',
      'Fix broken sections',
      'Improve responsiveness',
      'Polish writing and visuals',
    ],
  },
  {
    num: '05',
    icon: DeployIcon,
    title: 'Deploy & Present',
    bullets: [
      'Publish through GitHub Pages',
      'Explain the process',
      'Show how decisions were made',
      'Reflect on improvements',
    ],
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-site-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label justify-center">
            <Dot /> My AI Workflow
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-dark tracking-tight mb-4">
            How I Build With AI
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            AI does not replace my role as the developer. It helps me think faster,
            explore options, test ideas, and improve the final result.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="card p-5 flex flex-col gap-4 relative">
                {/* Connector line on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2.5 w-5 h-px bg-site-border z-10" />
                )}

                {/* Step number + icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand bg-brand-soft px-2.5 py-1 rounded-full">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 text-brand">
                    <Icon />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-text-dark text-base">{step.title}</h3>

                {/* Bullets */}
                <ul className="space-y-1.5">
                  {step.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-xs text-text-body">
                      <span className="mt-1 w-1 h-1 bg-brand rounded-full shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 rounded-2xl bg-brand-soft border border-blue-200 px-8 py-6 text-center max-w-3xl mx-auto">
          <p className="text-base font-semibold text-text-dark">
            The AI is my collaborator, but{' '}
            <span className="text-brand">I make the final decisions.</span>
          </p>
          <p className="text-sm text-text-body mt-1">
            Every choice about what to build, how it looks, and what it means comes from me.
          </p>
        </div>

      </div>
    </section>
  )
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
}

function IdeaIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="13" r="7" />
      <path d="M13 22h6M14 26h4" />
      <path d="M16 6V4M9.5 8.5l-1.5-1.5M22.5 8.5l1.5-1.5" />
    </svg>
  )
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="24" height="24" rx="3" />
      <path d="M9 10h14M9 16h10M9 22h6" />
    </svg>
  )
}

function BuildIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8,12 4,16 8,20" />
      <polyline points="24,12 28,16 24,20" />
      <line x1="18" y1="8" x2="14" y2="24" />
    </svg>
  )
}

function TestIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 16.5l6 6 14-14" />
    </svg>
  )
}

function DeployIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4l4 8H12l4-8z" />
      <path d="M16 12v16M10 28h12" />
    </svg>
  )
}
