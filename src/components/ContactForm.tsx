"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    // Honeypot anti-spam
    if (String(data.get("company") || "").length > 0) return;

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    // Tanpa backend: buka email client dengan konten terisi.
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || `Portfolio inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-foreground/70">Name</span>
          <input
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-foreground/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-foreground/40"
          />
        </label>
        <label className="block">
          <span className="text-sm text-foreground/70">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-foreground/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-foreground/40"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-foreground/70">Subject</span>
        <input
          name="subject"
          type="text"
          className="mt-1.5 w-full rounded-lg border border-foreground/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-foreground/40"
        />
      </label>

      <label className="block">
        <span className="text-sm text-foreground/70">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full resize-y rounded-lg border border-foreground/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-foreground/40"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Please fill in your name, email, and message.
        </p>
      )}

      <button
        type="submit"
        className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Send message
      </button>
      <p className="text-xs text-foreground/40">
        This opens your email app with the message pre-filled.
      </p>
    </form>
  );
}
