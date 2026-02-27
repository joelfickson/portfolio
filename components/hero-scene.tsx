export function HeroScene() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.08] md:opacity-[0.2] lg:opacity-[0.28] dark:opacity-[0.05] dark:md:opacity-[0.1] dark:lg:opacity-[0.15]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 900 600"
        fill="none"
        className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-1/2 w-[160%] md:w-[110%] lg:w-full h-auto"
      >
        <style>{`
          @keyframes hf1{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
          @keyframes hf2{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
          @keyframes hf3{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
          @keyframes hblink{0%,49%{opacity:1}50%,100%{opacity:0}}
          @keyframes hcode{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:translateX(0)}}
          @keyframes hpulse{0%,100%{opacity:.2;transform:scale(1)}50%{opacity:.7;transform:scale(1.4)}}
          @keyframes hdash{to{stroke-dashoffset:-20}}
          @keyframes hglow{0%,100%{opacity:.08}50%{opacity:.2}}
          @keyframes htype{0%,100%{width:0}50%{width:40px}}
          .hf1{animation:hf1 7s ease-in-out infinite}
          .hf2{animation:hf2 9s ease-in-out infinite}
          .hf3{animation:hf3 5.5s ease-in-out infinite}
          .hblink{animation:hblink 1.2s step-end infinite}
          .hpulse{animation:hpulse 3s ease-in-out infinite}
          .hflow{stroke-dasharray:4 12;animation:hdash 2.5s linear infinite}
          .hglow{animation:hglow 4s ease-in-out infinite}
        `}</style>

        {/* Connection paths - flowing data lines */}
        <path
          d="M450 370 C480 300 560 200 670 130"
          stroke="currentColor"
          strokeWidth="1"
          className="hflow"
          opacity="0.15"
        />
        <path
          d="M450 370 C400 280 300 200 150 150"
          stroke="currentColor"
          strokeWidth="1"
          className="hflow"
          opacity="0.15"
          style={{ animationDelay: "0.8s" }}
        />
        <path
          d="M450 370 C430 280 400 160 385 70"
          stroke="currentColor"
          strokeWidth="1"
          className="hflow"
          opacity="0.12"
          style={{ animationDelay: "1.5s" }}
        />
        <path
          d="M450 370 C520 350 620 340 720 350"
          stroke="currentColor"
          strokeWidth="0.8"
          className="hflow"
          opacity="0.1"
          style={{ animationDelay: "0.4s" }}
        />
        <path
          d="M450 370 C350 380 250 400 130 390"
          stroke="currentColor"
          strokeWidth="0.8"
          className="hflow"
          opacity="0.1"
          style={{ animationDelay: "1.2s" }}
        />

        {/* Secondary connection web */}
        <line
          x1="500"
          y1="260"
          x2="590"
          y2="290"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <line
          x1="350"
          y1="230"
          x2="420"
          y2="190"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <line
          x1="500"
          y1="260"
          x2="420"
          y2="190"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <line
          x1="280"
          y1="310"
          x2="350"
          y2="230"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <line
          x1="590"
          y1="290"
          x2="630"
          y2="230"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />

        {/* Network nodes - pulsing */}
        <circle cx="500" cy="260" r="3" fill="currentColor" className="hpulse" />
        <circle
          cx="350"
          cy="230"
          r="2.5"
          fill="currentColor"
          className="hpulse"
          style={{ animationDelay: "0.5s" }}
        />
        <circle
          cx="280"
          cy="310"
          r="2.5"
          fill="#f59e0b"
          className="hpulse"
          style={{ animationDelay: "1s" }}
        />
        <circle
          cx="590"
          cy="290"
          r="2.5"
          fill="currentColor"
          className="hpulse"
          style={{ animationDelay: "1.5s" }}
        />
        <circle
          cx="420"
          cy="190"
          r="3"
          fill="#f59e0b"
          className="hpulse"
          style={{ animationDelay: "0.8s" }}
        />
        <circle
          cx="630"
          cy="230"
          r="2.5"
          fill="currentColor"
          className="hpulse"
          style={{ animationDelay: "2s" }}
        />
        <circle
          cx="200"
          cy="350"
          r="2"
          fill="currentColor"
          className="hpulse"
          style={{ animationDelay: "1.3s" }}
        />
        <circle
          cx="680"
          cy="380"
          r="2"
          fill="#f59e0b"
          className="hpulse"
          style={{ animationDelay: "0.3s" }}
        />

        {/* Developer workstation */}
        <g>
          {/* Desk surface */}
          <rect x="370" y="405" width="160" height="5" rx="2.5" fill="currentColor" opacity="0.1" />
          {/* Desk legs */}
          <rect x="385" y="410" width="3" height="28" rx="1.5" fill="currentColor" opacity="0.06" />
          <rect x="512" y="410" width="3" height="28" rx="1.5" fill="currentColor" opacity="0.06" />

          {/* Monitor */}
          <rect
            x="400"
            y="332"
            width="100"
            height="65"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.15"
          />
          {/* Monitor stand */}
          <rect x="443" y="397" width="14" height="8" fill="currentColor" opacity="0.08" />
          <rect x="433" y="403" width="34" height="3" rx="1.5" fill="currentColor" opacity="0.08" />

          {/* Screen glow */}
          <rect x="405" y="337" width="90" height="55" rx="2" fill="#f59e0b" className="hglow" />

          {/* Screen content - code lines */}
          <rect x="412" y="344" width="35" height="2" rx="1" fill="#f59e0b" opacity="0.45" />
          <rect
            x="412"
            y="350"
            width="60"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            opacity="0.2"
          />
          <rect
            x="418"
            y="355"
            width="50"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            opacity="0.18"
          />
          <rect
            x="418"
            y="360"
            width="65"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            opacity="0.15"
          />
          <rect x="412" y="365" width="40" height="1.5" rx="0.75" fill="#f59e0b" opacity="0.3" />
          <rect
            x="418"
            y="370"
            width="55"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            opacity="0.18"
          />
          <rect
            x="418"
            y="375"
            width="45"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            opacity="0.15"
          />
          <rect
            x="412"
            y="380"
            width="30"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            opacity="0.2"
          />

          {/* Keyboard */}
          <rect x="412" y="407" width="76" height="3" rx="1.5" fill="currentColor" opacity="0.07" />

          {/* Person - head */}
          <circle cx="450" cy="305" r="14" fill="currentColor" opacity="0.08" />
          {/* Person - body/shoulders */}
          <path d="M425 318 C430 330 470 330 475 318" fill="currentColor" opacity="0.06" />
          <rect x="432" y="318" width="36" height="14" rx="6" fill="currentColor" opacity="0.05" />
        </g>

        {/* Code Editor Window (top right) - floating */}
        <g className="hf1">
          {/* Window frame */}
          <rect x="620" y="60" width="210" height="150" rx="8" fill="currentColor" opacity="0.02" />
          <rect
            x="620"
            y="60"
            width="210"
            height="150"
            rx="8"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.12"
          />
          {/* Title bar */}
          <rect x="621" y="61" width="208" height="26" rx="7" fill="currentColor" opacity="0.04" />
          {/* Traffic lights */}
          <circle cx="638" cy="74" r="3" fill="currentColor" opacity="0.1" />
          <circle cx="650" cy="74" r="3" fill="currentColor" opacity="0.1" />
          <circle cx="662" cy="74" r="3" fill="currentColor" opacity="0.1" />
          {/* File tab */}
          <rect x="680" y="67" width="40" height="12" rx="3" fill="currentColor" opacity="0.04" />

          {/* Code lines - staggered appearance */}
          <g style={{ animation: "hcode 0.5s ease-out 0.5s both" }}>
            <rect x="636" y="100" width="28" height="2" rx="1" fill="#f59e0b" opacity="0.4" />
            <rect x="668" y="100" width="45" height="2" rx="1" fill="currentColor" opacity="0.2" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 0.8s both" }}>
            <rect x="646" y="108" width="80" height="2" rx="1" fill="currentColor" opacity="0.15" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 1.1s both" }}>
            <rect x="646" y="116" width="55" height="2" rx="1" fill="currentColor" opacity="0.15" />
            <rect x="706" y="116" width="30" height="2" rx="1" fill="#f59e0b" opacity="0.25" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 1.4s both" }}>
            <rect x="656" y="124" width="70" height="2" rx="1" fill="currentColor" opacity="0.15" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 1.7s both" }}>
            <rect x="656" y="132" width="90" height="2" rx="1" fill="currentColor" opacity="0.12" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 2.0s both" }}>
            <rect x="646" y="140" width="45" height="2" rx="1" fill="currentColor" opacity="0.15" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 2.3s both" }}>
            <rect x="636" y="148" width="60" height="2" rx="1" fill="#f59e0b" opacity="0.3" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 2.6s both" }}>
            <rect x="646" y="156" width="50" height="2" rx="1" fill="currentColor" opacity="0.15" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 2.9s both" }}>
            <rect x="646" y="164" width="75" height="2" rx="1" fill="currentColor" opacity="0.12" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 3.2s both" }}>
            <rect x="636" y="172" width="35" height="2" rx="1" fill="currentColor" opacity="0.15" />
          </g>
          <g style={{ animation: "hcode 0.5s ease-out 3.5s both" }}>
            <rect x="636" y="180" width="55" height="2" rx="1" fill="currentColor" opacity="0.12" />
          </g>

          {/* Line numbers gutter */}
          <rect x="628" y="100" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="108" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="116" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="124" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="132" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="140" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="148" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="156" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="164" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="172" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
          <rect x="628" y="180" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.08" />

          {/* Blinking cursor */}
          <rect
            x="696"
            y="178"
            width="1.5"
            height="8"
            fill="#f59e0b"
            opacity="0.5"
            className="hblink"
          />
        </g>

        {/* Terminal Window (left) - floating */}
        <g className="hf2" style={{ animationDelay: "1s" }}>
          {/* Window frame */}
          <rect
            x="60"
            y="100"
            width="190"
            height="130"
            rx="8"
            fill="currentColor"
            opacity="0.025"
          />
          <rect
            x="60"
            y="100"
            width="190"
            height="130"
            rx="8"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.12"
          />
          {/* Title bar */}
          <rect x="61" y="101" width="188" height="26" rx="7" fill="currentColor" opacity="0.05" />
          {/* Dots */}
          <circle cx="78" cy="114" r="3" fill="currentColor" opacity="0.1" />
          <circle cx="90" cy="114" r="3" fill="currentColor" opacity="0.1" />
          <circle cx="102" cy="114" r="3" fill="currentColor" opacity="0.1" />

          {/* Terminal prompt lines */}
          {/* $ prompt 1 */}
          <rect x="76" y="140" width="6" height="2" rx="1" fill="#f59e0b" opacity="0.35" />
          <rect x="86" y="140" width="50" height="2" rx="1" fill="currentColor" opacity="0.2" />
          {/* Output */}
          <rect
            x="76"
            y="150"
            width="110"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            opacity="0.1"
          />
          <rect
            x="76"
            y="157"
            width="80"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            opacity="0.1"
          />
          {/* Success line */}
          <rect x="76" y="167" width="8" height="2" rx="1" fill="#10b981" opacity="0.3" />
          <rect x="88" y="167" width="70" height="2" rx="1" fill="currentColor" opacity="0.15" />
          {/* Empty line */}
          {/* $ prompt 2 */}
          <rect x="76" y="182" width="6" height="2" rx="1" fill="#f59e0b" opacity="0.35" />
          <rect x="86" y="182" width="35" height="2" rx="1" fill="currentColor" opacity="0.2" />
          {/* Blinking block cursor */}
          <rect
            x="125"
            y="180"
            width="7"
            height="7"
            fill="currentColor"
            opacity="0.15"
            className="hblink"
          />
        </g>

        {/* Browser/UI Preview (top center-left) - floating */}
        <g className="hf3" style={{ animationDelay: "0.5s" }}>
          {/* Window frame */}
          <rect x="290" y="20" width="180" height="120" rx="8" fill="currentColor" opacity="0.02" />
          <rect
            x="290"
            y="20"
            width="180"
            height="120"
            rx="8"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.1"
          />
          {/* Title bar */}
          <rect x="291" y="21" width="178" height="24" rx="7" fill="currentColor" opacity="0.04" />
          {/* URL bar */}
          <rect
            x="310"
            y="29"
            width="100"
            height="8"
            rx="4"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.08"
          />
          <rect x="316" y="32" width="40" height="2" rx="1" fill="currentColor" opacity="0.06" />

          {/* Page layout blocks */}
          {/* Nav bar */}
          <rect x="305" y="54" width="150" height="6" rx="1" fill="currentColor" opacity="0.04" />
          {/* Hero text */}
          <rect x="305" y="68" width="90" height="6" rx="1" fill="currentColor" opacity="0.1" />
          <rect x="305" y="78" width="120" height="3" rx="1" fill="currentColor" opacity="0.06" />
          <rect x="305" y="84" width="100" height="3" rx="1" fill="currentColor" opacity="0.06" />
          {/* CTA button */}
          <rect x="305" y="94" width="45" height="14" rx="4" fill="#f59e0b" opacity="0.12" />
          {/* Cards */}
          <rect
            x="305"
            y="116"
            width="44"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.06"
          />
          <rect
            x="354"
            y="116"
            width="44"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.06"
          />
          <rect
            x="403"
            y="116"
            width="44"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.06"
          />
        </g>

        {/* Small API/services panel (right side) - floating */}
        <g className="hf2" style={{ animationDelay: "2s" }}>
          <rect
            x="730"
            y="300"
            width="120"
            height="90"
            rx="6"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.08"
          />
          {/* Service blocks */}
          <rect
            x="740"
            y="312"
            width="40"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.08"
          />
          <rect x="740" y="312" width="40" height="20" rx="3" fill="#f59e0b" opacity="0.04" />
          <rect
            x="790"
            y="312"
            width="50"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.08"
          />
          <rect
            x="740"
            y="342"
            width="100"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.06"
          />
          {/* Connection dots between blocks */}
          <circle cx="783" cy="322" r="1.5" fill="#f59e0b" opacity="0.3" />
          <line
            x1="780"
            y1="322"
            x2="790"
            y2="322"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.12"
          />
          {/* Status indicator */}
          <circle
            cx="748"
            cy="365"
            r="2"
            fill="#10b981"
            opacity="0.25"
            className="hpulse"
            style={{ animationDelay: "1.8s" }}
          />
          <rect x="755" y="363" width="30" height="2" rx="1" fill="currentColor" opacity="0.08" />
        </g>

        {/* Decorative hexagons */}
        <polygon
          points="780,240 793,248 793,264 780,272 767,264 767,248"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.06"
        />
        <polygon
          points="100,360 110,366 110,378 100,384 90,378 90,366"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.06"
        />
        <polygon
          points="700,450 708,454 708,462 700,466 692,462 692,454"
          stroke="#f59e0b"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <polygon
          points="200,460 206,463 206,469 200,472 194,469 194,463"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.05"
        />

        {/* Scattered decorative dots */}
        <circle cx="820" cy="160" r="1.5" fill="currentColor" opacity="0.05" />
        <circle cx="50" cy="280" r="1.5" fill="#f59e0b" opacity="0.06" />
        <circle cx="550" cy="470" r="1.5" fill="currentColor" opacity="0.04" />
        <circle cx="320" cy="480" r="2" fill="#f59e0b" opacity="0.05" />
        <circle cx="750" cy="480" r="1.5" fill="currentColor" opacity="0.04" />
        <circle cx="170" cy="220" r="1" fill="currentColor" opacity="0.05" />
        <circle cx="860" cy="400" r="1" fill="currentColor" opacity="0.04" />

        {/* Small diamond decorations */}
        <rect
          x="560"
          y="440"
          width="6"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.04"
          transform="rotate(45 563 443)"
        />
        <rect
          x="140"
          y="440"
          width="5"
          height="5"
          rx="1"
          fill="#f59e0b"
          opacity="0.05"
          transform="rotate(45 142.5 442.5)"
        />
        <rect
          x="830"
          y="280"
          width="5"
          height="5"
          rx="1"
          fill="currentColor"
          opacity="0.04"
          transform="rotate(45 832.5 282.5)"
        />
      </svg>
    </div>
  );
}
