"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { photos } from "@/data/site";

export default function Gallery({ limit }: { limit?: number }) {
  const items = limit ? photos.slice(0, limit) : photos;
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>button]:mb-3">
        {items.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
            aria-label={`Open photo: ${photo.caption}`}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              width={photo.orientation === "portrait" ? 800 : 1200}
              height={photo.orientation === "portrait" ? 1200 : 800}
              className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <figure
            className="flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[active].src}
              alt={items[active].caption}
              width={1600}
              height={1067}
              className="max-h-[78vh] w-auto rounded-2xl object-contain"
              sizes="100vw"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {items[active].caption} · {items[active].category}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
