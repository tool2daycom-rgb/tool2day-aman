import Image from "next/image";
import type { ReactNode } from "react";

type FrameProps = {
  children: ReactNode;
  className?: string;
};

/** Soft framed panel for line-art victim illustrations. */
export function ArtFrame({ children, className = "" }: FrameProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl bg-white ring-2 ring-[var(--accent)]/35 ${className}`}
    >
      <div className="relative z-0 overflow-hidden bg-white">{children}</div>
    </div>
  );
}

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function LineArtPhoto({
  src,
  alt,
  className = "",
  priority = false,
}: PhotoProps) {
  return (
    <ArtFrame className={className}>
      <Image
        src={src}
        alt={alt}
        width={640}
        height={720}
        priority={priority}
        className="h-auto w-full object-contain bg-white p-4 sm:p-6"
      />
    </ArtFrame>
  );
}
