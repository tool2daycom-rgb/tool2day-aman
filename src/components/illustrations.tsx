type Props = {
  className?: string;
};

/** Soft line-art style illustrations inspired by calm safety sites. */
export function IllustShield({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="160" cy="140" r="120" fill="#F3E2C8" />
      <path
        d="M160 58c28 16 52 20 72 22v62c0 42-28 72-72 90-44-18-72-48-72-90V80c20-2 44-6 72-22Z"
        fill="#E8B35A"
        stroke="#2B2420"
        strokeWidth="3"
      />
      <path
        d="M132 138l18 18 38-42"
        stroke="#2B2420"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="112" cy="92" r="18" fill="#fff" stroke="#2B2420" strokeWidth="3" />
      <path
        d="M98 118c8 18 28 24 42 10"
        stroke="#2B2420"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IllustTalk({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 220 160" className={className} fill="none" aria-hidden>
      <circle cx="110" cy="80" r="72" fill="#E8F0F4" />
      <circle cx="78" cy="78" r="22" fill="#fff" stroke="#2B2420" strokeWidth="2.5" />
      <circle cx="138" cy="78" r="22" fill="#fff" stroke="#2B2420" strokeWidth="2.5" />
      <path
        d="M56 118c10 16 34 22 54 8M164 118c-10 16-34 22-54 8"
        stroke="#2B2420"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="92"
        y="96"
        width="36"
        height="24"
        rx="6"
        fill="#F3E2C8"
        stroke="#2B2420"
        strokeWidth="2"
      />
    </svg>
  );
}

export function IllustBirds({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 220 160" className={className} fill="none" aria-hidden>
      <circle cx="110" cy="80" r="72" fill="#F7EFDF" />
      <path
        d="M70 100c18-8 28-28 22-44 18 8 30 24 28 44"
        stroke="#2B2420"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M118 78c20-18 42-18 56-6M150 62c8-10 22-14 34-8"
        stroke="#D9923B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="88" cy="70" r="16" fill="#fff" stroke="#2B2420" strokeWidth="2.5" />
    </svg>
  );
}

export function IllustPhone({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 220 160" className={className} fill="none" aria-hidden>
      <circle cx="110" cy="80" r="72" fill="#E9EEF2" />
      <rect
        x="88"
        y="36"
        width="44"
        height="78"
        rx="10"
        fill="#fff"
        stroke="#2B2420"
        strokeWidth="2.5"
      />
      <circle cx="110" cy="104" r="4" fill="#2B2420" />
      <path
        d="M148 70c12 8 12 24 0 32"
        stroke="#D9923B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IllustDesk({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 280 220" className={className} fill="none" aria-hidden>
      <circle cx="150" cy="110" r="95" fill="#F3E2C8" />
      <rect
        x="108"
        y="78"
        width="88"
        height="58"
        rx="8"
        fill="#fff"
        stroke="#2B2420"
        strokeWidth="2.5"
      />
      <path d="M100 136h104" stroke="#2B2420" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="92" cy="70" r="18" fill="#fff" stroke="#2B2420" strokeWidth="2.5" />
      <path
        d="M74 98c8 20 30 28 48 14"
        stroke="#2B2420"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M196 64c10-12 26-14 38-6"
        stroke="#D9923B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
