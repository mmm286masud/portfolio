export default function FlyingBuilderBot() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Dashed trail — right side oval */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 700"
      >
        <ellipse
          className="trail-path"
          cx="1060"
          cy="330"
          rx="120"
          ry="200"
          fill="none"
          stroke="#2196F3"
          strokeWidth="1.2"
          strokeOpacity="0.15"
        />
      </svg>

      {/* Bot wrapper — moves along path */}
      <div className="bot-fly-wrapper">
        {/* Float animation on the inner wrapper */}
        <div className="bot-body">
          {/* Blue glow halo behind the robot */}
          <div
            style={{
              position: 'absolute',
              inset: '-24px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(33,150,243,0.22) 0%, transparent 70%)',
              animation: 'eyeGlow 2.8s ease-in-out infinite',
              zIndex: 0,
            }}
          />

          {/* The actual robot image */}
          <img
            src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/robot.png`}
            alt=""
            width={200}
            height={200}
            style={{
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 8px 32px rgba(33,150,243,0.35)) drop-shadow(0 2px 8px rgba(0,0,0,0.10))',
              userSelect: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}
