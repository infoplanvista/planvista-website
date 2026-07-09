"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const sending = status === "sending";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "Nieuw bericht via planvista.nl",
          from_name: name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[18px] rounded-[26px] border border-border bg-white p-[38px_34px]"
    >
      <div>
        <label className="mb-[7px] block text-[13px] font-semibold text-accent">
          Naam
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Je naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-border bg-form-bg px-4 py-[13px] font-sans text-[15px] text-ink"
        />
      </div>
      <div>
        <label className="mb-[7px] block text-[13px] font-semibold text-accent">
          E-mailadres
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="jij@bedrijf.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-border bg-form-bg px-4 py-[13px] font-sans text-[15px] text-ink"
        />
      </div>
      <div>
        <label className="mb-[7px] block text-[13px] font-semibold text-accent">
          Bericht
        </label>
        <textarea
          name="message"
          required
          placeholder="Vertel kort waar je hulp bij zoekt"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-xl border border-border bg-form-bg px-4 py-[13px] font-sans text-[15px] text-ink"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-1.5 rounded-full bg-ink px-7 py-[15px] font-sans text-[15px] font-medium text-cream transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? "Versturen…" : "Verstuur bericht"}
      </button>
      {status === "success" && (
        <div className="rounded-xl bg-success-bg px-4 py-3 text-sm text-success-text">
          Bedankt! Je bericht is verstuurd — je hoort snel van Planvista.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl bg-error-bg px-4 py-3 text-sm text-error-text">
          Er ging iets mis bij het versturen. Stuur je bericht ook gerust
          rechtstreeks naar{" "}
          <a
            href="mailto:info@planvista.nl"
            className="text-error-text underline"
          >
            info@planvista.nl
          </a>
          .
        </div>
      )}
    </form>
  );
}
