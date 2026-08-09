export function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function PlayIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h16M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

const socialPaths: Record<string, string> = {
  Instagram:
    "M12 2.2c2.7 0 3 .01 4.1.06 1.05.05 1.62.22 2 .37.5.2.86.43 1.24.8.37.38.6.74.8 1.24.15.38.32.95.37 2 .05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.05-.22 1.62-.37 2-.2.5-.43.86-.8 1.24-.38.37-.74.6-1.24.8-.38.15-.95.32-2 .37-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.05-.05-1.62-.22-2-.37a3.3 3.3 0 0 1-1.24-.8 3.3 3.3 0 0 1-.8-1.24c-.15-.38-.32-.95-.37-2C2.21 15 2.2 14.7 2.2 12s.01-3 .06-4.1c.05-1.05.22-1.62.37-2 .2-.5.43-.86.8-1.24.38-.37.74-.6 1.24-.8.38-.15.95-.32 2-.37C8.8 2.21 9.1 2.2 12 2.2Zm0 1.62c-2.65 0-2.96.01-4.01.06-.9.04-1.39.19-1.72.32-.43.17-.74.37-1.06.7-.32.32-.52.63-.7 1.06-.13.33-.28.82-.32 1.72-.05 1.05-.06 1.36-.06 4.01s.01 2.96.06 4.01c.04.9.19 1.39.32 1.72.17.43.37.74.7 1.06.32.32.63.52 1.06.7.33.13.82.28 1.72.32 1.05.05 1.36.06 4.01.06s2.96-.01 4.01-.06c.9-.04 1.39-.19 1.72-.32.43-.17.74-.37 1.06-.7.32-.32.52-.63.7-1.06.13-.33.28-.82.32-1.72.05-1.05.06-1.36.06-4.01s-.01-2.96-.06-4.01c-.04-.9-.19-1.39-.32-1.72a2.86 2.86 0 0 0-.7-1.06 2.86 2.86 0 0 0-1.06-.7c-.33-.13-.82-.28-1.72-.32-1.05-.05-1.36-.06-4.01-.06Zm0 4.13a4.05 4.05 0 1 1 0 8.1 4.05 4.05 0 0 1 0-8.1Zm0 1.62a2.43 2.43 0 1 0 0 4.86 2.43 2.43 0 0 0 0-4.86Zm5.16-1.8a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0Z",
  Facebook:
    "M13.5 21v-7.2h2.4l.36-2.8h-2.76V9.2c0-.81.22-1.36 1.39-1.36h1.48V5.34c-.26-.03-1.14-.11-2.16-.11-2.14 0-3.6 1.3-3.6 3.7v2.07H8.2v2.8h2.41V21h2.89Z",
  YouTube:
    "M21.6 7.5s-.21-1.48-.86-2.14c-.82-.86-1.74-.86-2.16-.91C15.6 4.2 12 4.2 12 4.2h-.01s-3.6 0-6.58.25c-.42.05-1.34.05-2.16.91-.65.66-.86 2.14-.86 2.14S2.16 9.24 2.16 11v1.98c0 1.76.23 3.5.23 3.5s.21 1.48.86 2.14c.82.86 1.9.83 2.38.92C7.2 19.77 12 19.8 12 19.8s3.6-.01 6.58-.26c.42-.05 1.34-.05 2.16-.91.65-.66.86-2.14.86-2.14s.23-1.74.23-3.5V11c0-1.76-.23-3.5-.23-3.5ZM9.96 14.98V8.98l5.6 3-5.6 3Z",
  TikTok:
    "M16.6 2h-2.9v13.3a2.6 2.6 0 1 1-2.6-2.6c.24 0 .48.03.7.09V9.7a5.6 5.6 0 1 0 4.8 5.55V8.2a7.3 7.3 0 0 0 4.4 1.5V6.8a4.4 4.4 0 0 1-4.4-4.4V2Z",
};

export function SocialIcon({
  network,
  className = "h-4 w-4",
}: {
  network: string;
  className?: string;
}) {
  const d = socialPaths[network];
  if (!d) return null;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
