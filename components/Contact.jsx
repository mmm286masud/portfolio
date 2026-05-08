export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-site-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA card */}
        <div
          className="rounded-3xl px-8 py-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1565C0 0%, #2196F3 50%, #42A5F5 100%)',
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Glow circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white opacity-5" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white opacity-5" />

          <div className="relative z-10 max-w-2xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white/90">Open to Collaboration</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Let&apos;s Build Something Together
            </h2>

            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Whether you have a project idea, a website concept, or you want to
              talk about AI-assisted workflows — I would love to connect.
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:polo18112000@gmail.com"
                className="bg-white text-brand font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Send an Email
              </a>
              <a
                href="#work"
                className="bg-white/15 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/30 hover:bg-white/25 transition-colors"
              >
                View My Work
              </a>
            </div>

            {/* Tagline */}
            <p className="mt-10 text-white/60 text-sm">
              Masud Builds &mdash; Custom Apps. AI-Assisted.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}
