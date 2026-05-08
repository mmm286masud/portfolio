const tools = [
  { label: 'Next.js',       icon: '⬢' },
  { label: 'React',         icon: '○' },
  { label: 'Tailwind CSS',  icon: '◈' },
  { label: 'JavaScript',    icon: '◆' },
  { label: 'AI Workflow',   icon: '✦' },
  { label: 'Desktop Apps',  icon: '▣' },
  { label: 'Electron',      icon: '◉' },
  { label: 'GitHub',        icon: '◎' },
]

const qualities = [
  { title: 'Problem-Focused',  desc: 'I think about what an app should actually solve before writing a line of code.' },
  { title: 'AI-Collaborative', desc: 'I use AI to speed up thinking, explore options, and improve the final result — not replace judgment.' },
  { title: 'Fast Iteration',   desc: 'I build quickly, test honestly, and refine until the work feels right.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">
            <Dot /> About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-text-dark tracking-tight mb-4">
            A Future-Focused Builder
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            I am a student learning to create meaningful custom applications with the
            help of AI. My goal is to combine creativity, logic, and modern tools to
            turn ideas into useful software.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — personal statement */}
          <div className="space-y-6 text-text-body leading-relaxed">
            <p>
              I am studying computer science and technology with a focus on building
              real things. My interest is not just in writing code — it is in
              understanding what a user needs, deciding what to build, and creating
              something that actually solves a problem.
            </p>
            <p>
              I became interested in AI-assisted workflows because they let me move
              faster from idea to working prototype. AI helps me brainstorm, explore
              design directions, and write cleaner code. But I always make the final
              decisions about what the project should be.
            </p>
            <p>
              My main focus areas are custom desktop applications, portfolio and
              business websites, and interactive digital experiences. I want to build
              practical tools for real people — students, small businesses, and
              creators.
            </p>
            <p className="text-text-dark font-medium">
              I am building toward a future where I can help people turn rough ideas
              into useful software, fast.
            </p>

            {/* Qualities */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {qualities.map(q => (
                <div key={q.title} className="card p-4">
                  <div className="text-sm font-bold text-text-dark mb-1">{q.title}</div>
                  <div className="text-xs text-text-body leading-relaxed">{q.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tools & skills grid */}
          <div>
            <p className="section-label mb-4">
              <Dot /> Tools &amp; Technologies
            </p>
            <div className="grid grid-cols-2 gap-3">
              {tools.map(t => (
                <div
                  key={t.label}
                  className="card flex items-center gap-3 px-4 py-3.5"
                >
                  <span className="text-brand text-lg w-6 text-center select-none">{t.icon}</span>
                  <span className="text-sm font-semibold text-text-dark">{t.label}</span>
                </div>
              ))}
            </div>

            {/* Identity card */}
            <div className="mt-6 rounded-2xl p-5 border border-site-border"
              style={{ background: 'linear-gradient(135deg, #EAF4FF 0%, #F7F9FC 100%)' }}>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Professional Identity</p>
              <p className="text-base font-bold text-text-dark mb-1">AI-Assisted Custom Application Developer</p>
              <p className="text-sm text-text-body">
                Custom Application Maker &middot; AI-Assisted Digital Builder &middot;
                One-Person AI Development Studio
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
}
