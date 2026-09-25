import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A small photography gallery — street, sports, and automotive shots.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Gallery</h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/60">
        Photography is a hobby that trains my visual eye — mostly street, sports,
        and automotive. A few favorite frames below.
      </p>

      <div className="mt-12">
        <Gallery />
      </div>
    </section>
  );
}
