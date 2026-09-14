export default function App() {
  const bg = '#F6F4F0'
  const ink = '#0F1117'
  const ember = '#C85A18'
  const muted = '#9E948E'

  // Pointy-top hexagon: center (74,74), radius 54
  const hexPoints = '74,20 120.8,47 120.8,101 74,128 27.2,101 27.2,47'

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 64,
        backgroundColor: bg,
        fontFamily: "'Syne', sans-serif",
      }}
    >
      {/* Primary lockup — dark mark on light field */}
      <svg
        viewBox="0 0 520 148"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: 520 }}
        aria-label="Hephix Limited"
      >
        <defs>
          <clipPath id="hexClip">
            <polygon points={hexPoints} />
          </clipPath>
        </defs>

        {/* Mark */}
        <polygon points={hexPoints} fill={ink} />

        {/* H crossbar (forge amber) — rendered before pillars so pillars mask the ends */}
        <rect x="40" y="63" width="68" height="20" fill={ember} clipPath="url(#hexClip)" />

        {/* H left pillar */}
        <rect x="40" y="28" width="20" height="90" fill={bg} clipPath="url(#hexClip)" />

        {/* H right pillar */}
        <rect x="88" y="28" width="20" height="90" fill={bg} clipPath="url(#hexClip)" />

        {/* Wordmark */}
        <text
          x="153"
          y="87"
          fontFamily="'Syne', sans-serif"
          fontWeight="800"
          fontSize="52"
          fill={ink}
          letterSpacing="-0.5"
        >
          HEPHIX
        </text>
        <text
          x="157"
          y="112"
          fontFamily="'Syne', sans-serif"
          fontWeight="400"
          fontSize="13"
          fill={muted}
          letterSpacing="7"
        >
          LIMITED
        </text>
      </svg>

      {/* Reversed lockup — light mark on dark field */}
      <svg
        viewBox="0 0 520 148"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: 520, borderRadius: 12, background: ink, padding: 24 }}
        aria-label="Hephix Limited reversed"
      >
        <defs>
          <clipPath id="hexClipDark">
            <polygon points={hexPoints} />
          </clipPath>
        </defs>

        {/* Mark shell */}
        <polygon points={hexPoints} fill={bg} />

        {/* Crossbar */}
        <rect x="40" y="63" width="68" height="20" fill={ember} clipPath="url(#hexClipDark)" />

        {/* Left pillar */}
        <rect x="40" y="28" width="20" height="90" fill={ink} clipPath="url(#hexClipDark)" />

        {/* Right pillar */}
        <rect x="88" y="28" width="20" height="90" fill={ink} clipPath="url(#hexClipDark)" />

        {/* Wordmark */}
        <text
          x="153"
          y="87"
          fontFamily="'Syne', sans-serif"
          fontWeight="800"
          fontSize="52"
          fill={bg}
          letterSpacing="-0.5"
        >
          HEPHIX
        </text>
        <text
          x="157"
          y="112"
          fontFamily="'Syne', sans-serif"
          fontWeight="400"
          fontSize="13"
          fill={muted}
          letterSpacing="7"
        >
          LIMITED
        </text>
      </svg>

      {/* Mark only — favicon / icon use */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <svg
          viewBox="27 20 94 108"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 80, height: 80 }}
          aria-label="Hephix mark"
        >
          <defs>
            <clipPath id="hexClipSm">
              <polygon points={hexPoints} />
            </clipPath>
          </defs>
          <polygon points={hexPoints} fill={ink} />
          <rect x="40" y="63" width="68" height="20" fill={ember} clipPath="url(#hexClipSm)" />
          <rect x="40" y="28" width="20" height="90" fill={bg} clipPath="url(#hexClipSm)" />
          <rect x="88" y="28" width="20" height="90" fill={bg} clipPath="url(#hexClipSm)" />
        </svg>

        <svg
          viewBox="27 20 94 108"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 48, height: 48 }}
          aria-label="Hephix mark small"
        >
          <defs>
            <clipPath id="hexClipXs">
              <polygon points={hexPoints} />
            </clipPath>
          </defs>
          <polygon points={hexPoints} fill={ink} />
          <rect x="40" y="63" width="68" height="20" fill={ember} clipPath="url(#hexClipXs)" />
          <rect x="40" y="28" width="20" height="90" fill={bg} clipPath="url(#hexClipXs)" />
          <rect x="88" y="28" width="20" height="90" fill={bg} clipPath="url(#hexClipXs)" />
        </svg>

        <svg
          viewBox="27 20 94 108"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 24, height: 24 }}
          aria-label="Hephix mark favicon"
        >
          <defs>
            <clipPath id="hexClipFav">
              <polygon points={hexPoints} />
            </clipPath>
          </defs>
          <polygon points={hexPoints} fill={ink} />
          <rect x="40" y="63" width="68" height="20" fill={ember} clipPath="url(#hexClipFav)" />
          <rect x="40" y="28" width="20" height="90" fill={bg} clipPath="url(#hexClipFav)" />
          <rect x="88" y="28" width="20" height="90" fill={bg} clipPath="url(#hexClipFav)" />
        </svg>
      </div>
    </div>
  )
}
