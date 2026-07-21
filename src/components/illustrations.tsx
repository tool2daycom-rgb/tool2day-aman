type Props = {
  className?: string;
};

const stroke = "#1F3D2E";

/** Soft line-art illustrations — trauma-informed, non-graphic. */
export function IllustShield({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="160" cy="140" r="120" fill="#DCEEE3" />
      <path
        d="M160 58c28 16 52 20 72 22v62c0 42-28 72-72 90-44-18-72-48-72-90V80c20-2 44-6 72-22Z"
        fill="#6FA88A"
        stroke={stroke}
        strokeWidth="3"
      />
      <path
        d="M132 138l18 18 38-42"
        stroke={stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="112" cy="92" r="18" fill="#fff" stroke={stroke} strokeWidth="3" />
      <path
        d="M98 118c8 18 28 24 42 10"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Woman in profile — closed eyes, calm / resilient. */
export function IllustWomanPeace({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 280 300" className={className} fill="none" aria-hidden>
      <rect width="280" height="300" fill="#fff" />
      {/* curly hair */}
      <path
        d="M168 52c22-18 48-14 62 8 10 16 8 34-2 48 18 2 28 16 24 34-4 16-18 24-34 24"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M150 48c-8 12-6 28 4 40M178 44c8 10 10 26 4 40M206 58c6 12 4 28-6 38"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M140 70c-16 8-22 28-14 48 4 10 12 16 22 18"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* neck & shoulder */}
      <path
        d="M176 168c4 22 2 40-6 58M168 226c28 8 58 6 86-8"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M154 200c-18 28-14 58 8 78"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* face profile */}
      <path
        d="M168 88c18 4 28 18 26 36-1 10-6 18-14 24-4 8-2 14 4 20"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* closed eye */}
      <path
        d="M186 118c6 2 12 2 16-1"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M198 114c1 3 0 5-2 6M204 114c1 3 0 5-2 6"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* freckles */}
      <circle cx="192" cy="128" r="1.1" fill={stroke} />
      <circle cx="200" cy="132" r="1" fill={stroke} />
      <circle cx="186" cy="134" r="0.9" fill={stroke} />
      <circle cx="172" cy="210" r="1" fill={stroke} />
      <circle cx="184" cy="222" r="1.1" fill={stroke} />
      <circle cx="196" cy="214" r="0.9" fill={stroke} />
      <circle cx="168" cy="236" r="1" fill={stroke} />
    </svg>
  );
}

/** Supportive figure with soft blindfold — feelings are valid. */
export function IllustSupportBlindfold({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 260 260" className={className} fill="none" aria-hidden>
      <rect width="260" height="260" fill="#fff" />
      <circle cx="130" cy="118" r="52" stroke={stroke} strokeWidth="2.2" />
      {/* hair */}
      <path
        d="M88 108c-4-28 18-52 46-54 28-2 48 22 46 50"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M96 128c-10 8-12 24-4 36M164 128c10 8 12 24 4 36"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* blindfold */}
      <path
        d="M86 112h88"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M174 108c10-6 18-4 24 4M86 108c-10-6-18-4-24 4"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* nose / mouth soft */}
      <path
        d="M130 128v10M124 148c4 4 12 4 16 0"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* shoulders */}
      <path
        d="M78 188c22-18 40-22 52-22s30 4 52 22"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M100 170c-4 14-2 28 6 40M160 170c4 14 2 28-6 40"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Woman from behind — dignity, not exposure. Soft blouse neckline. */
export function IllustWomanBack({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 240 280" className={className} fill="none" aria-hidden>
      <rect width="240" height="280" fill="#fff" />
      {/* hair bun */}
      <circle cx="120" cy="72" r="28" stroke={stroke} strokeWidth="2.2" />
      <path
        d="M96 88c-8 10-6 24 4 32M144 88c8 10 6 24-4 32"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* neck */}
      <path
        d="M108 100c2 18 4 28 12 40M132 100c-2 18-4 28-12 40"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* shoulders + soft top */}
      <path
        d="M72 168c20-28 40-36 48-36s28 8 48 36"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78 172c8 36 14 58 20 78M162 172c-8 36-14 58-20 78"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M98 158c8 6 16 8 22 8s14-2 22-8"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* soft stipple */}
      <circle cx="110" cy="148" r="1" fill={stroke} />
      <circle cx="128" cy="152" r="1" fill={stroke} />
      <circle cx="118" cy="160" r="0.9" fill={stroke} />
    </svg>
  );
}

export function IllustTalk({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 220 160" className={className} fill="none" aria-hidden>
      <circle cx="110" cy="80" r="72" fill="#E4F0EA" />
      <circle cx="78" cy="78" r="22" fill="#fff" stroke={stroke} strokeWidth="2.5" />
      <circle cx="138" cy="78" r="22" fill="#fff" stroke={stroke} strokeWidth="2.5" />
      <path
        d="M56 118c10 16 34 22 54 8M164 118c-10 16-34 22-54 8"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="92"
        y="96"
        width="36"
        height="24"
        rx="6"
        fill="#DCEEE3"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}

export function IllustBirds({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 220 160" className={className} fill="none" aria-hidden>
      <circle cx="110" cy="80" r="72" fill="#EAF4EE" />
      <path
        d="M70 100c18-8 28-28 22-44 18 8 30 24 28 44"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M118 78c20-18 42-18 56-6M150 62c8-10 22-14 34-8"
        stroke="#3D7A5A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="88" cy="70" r="16" fill="#fff" stroke={stroke} strokeWidth="2.5" />
    </svg>
  );
}

export function IllustPhone({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 220 160" className={className} fill="none" aria-hidden>
      <circle cx="110" cy="80" r="72" fill="#E4F0EA" />
      <rect
        x="88"
        y="36"
        width="44"
        height="78"
        rx="10"
        fill="#fff"
        stroke={stroke}
        strokeWidth="2.5"
      />
      <circle cx="110" cy="104" r="4" fill={stroke} />
      <path
        d="M148 70c12 8 12 24 0 32"
        stroke="#3D7A5A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IllustDesk({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 280 220" className={className} fill="none" aria-hidden>
      <circle cx="150" cy="110" r="95" fill="#DCEEE3" />
      <rect
        x="108"
        y="78"
        width="88"
        height="58"
        rx="8"
        fill="#fff"
        stroke={stroke}
        strokeWidth="2.5"
      />
      <path d="M100 136h104" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="92" cy="70" r="18" fill="#fff" stroke={stroke} strokeWidth="2.5" />
      <path
        d="M74 98c8 20 30 28 48 14"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M196 64c10-12 26-14 38-6"
        stroke="#3D7A5A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IllustProtectHand({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <circle cx="60" cy="60" r="48" stroke={stroke} strokeWidth="2.5" />
      <path
        d="M44 58c0-8 6-14 14-14s14 6 14 14v22c0 8-6 12-12 12h-4c-6 0-12-4-12-12V58Z"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M42 64c-6 2-10 8-8 14 2 6 8 8 14 6"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
