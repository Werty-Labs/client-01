"use client";

import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    window.setTimeout(() => {
      setSending(false);
      toast.success("Thanks! We will be in touch shortly.");
      event.currentTarget.reset();
    }, 700);
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="dates">Travel dates</Label>
          <Input id="dates" name="dates" placeholder="e.g. Dec 10 - Dec 22" />
        </div>
        <div>
          <Label htmlFor="people">Travelers</Label>
          <Input id="people" name="people" type="number" min={1} defaultValue={2} />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Tell us what you are dreaming of</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      <Button type="submit" disabled={sending} size="lg" className="justify-self-start">
        {sending ? "Sending..." : "Send enquiry"}
      </Button>
    </form>
  );
}
