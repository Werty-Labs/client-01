"use client";

import { type FormEvent } from "react";

export function NewsletterForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="you@email.com"
        className="flex-1 rounded-md px-3 py-2 text-sm text-foreground"
      />
      <button className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">
        Join
      </button>
    </form>
  );
}
