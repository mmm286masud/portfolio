import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-site-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label justify-center">
            <Dot /> Featured Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-dark tracking-tight mb-4">
            My Work
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            Two completed live projects plus concept work in progress — each one
            built with a clear purpose and a specific user in mind.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(p => (
            <div
              key={p.id}
              className={`card p-7 flex flex-col gap-4 ${p.highlight ? 'ring-2 ring-brand ring-offset-2' : ''}`}
            >
              {/* Status badge row */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ color: p.statusColor, background: p.statusBg }}
                >
                  {p.status}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-hover transition-colors"
                  >
                    View Live
                    <ArrowIcon />
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-dark">{p.title}</h3>

              {/* Description */}
              <p className="text-sm text-text-body leading-relaxed flex-1">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-site-bg border border-site-border text-text-body px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-text-body mt-10 italic">
          Projects labeled &ldquo;Concept&rdquo; represent directions I am actively
          developing toward.
        </p>

      </div>
    </section>
  )
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10L10 2M10 2H5M10 2v5" />
    </svg>
  )
}
