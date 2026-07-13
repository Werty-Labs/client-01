"use client";

import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAnalytics } from "@/hooks/use-analytics";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const { track } = useAnalytics();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    track("contact_form_submitted");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          destination: formData.get('destination'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        toast.success("Thanks! We will be in touch shortly.");
        form.reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium text-[#1c1c1c]">First Name</Label>
          <Input 
            id="firstName" 
            name="firstName" 
            placeholder="Jane" 
            required 
            className="bg-[#f2f5f4] border-0 h-12 px-4 focus-visible:ring-1 focus-visible:ring-[#0B3B24] placeholder:text-muted-foreground/60"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium text-[#1c1c1c]">Last Name</Label>
          <Input 
            id="lastName" 
            name="lastName" 
            placeholder="Doe" 
            required 
            className="bg-[#f2f5f4] border-0 h-12 px-4 focus-visible:ring-1 focus-visible:ring-[#0B3B24] placeholder:text-muted-foreground/60"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-[#1c1c1c]">Email Address</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="jane@example.com" 
          required 
          className="bg-[#f2f5f4] border-0 h-12 px-4 focus-visible:ring-1 focus-visible:ring-[#0B3B24] placeholder:text-muted-foreground/60"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="destination" className="text-sm font-medium text-[#1c1c1c]">Desired Destination (Optional)</Label>
        <Input 
          id="destination" 
          name="destination" 
          placeholder="e.g., Ella, Yala" 
          className="bg-[#f2f5f4] border-0 h-12 px-4 focus-visible:ring-1 focus-visible:ring-[#0B3B24] placeholder:text-muted-foreground/60"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-[#1c1c1c]">Tell us about your dream trip</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="I'm looking for a relaxing getaway..." 
          rows={5} 
          required 
          className="bg-[#f2f5f4] border-0 p-4 resize-none focus-visible:ring-1 focus-visible:ring-[#0B3B24] placeholder:text-muted-foreground/60"
        />
      </div>

      <Button type="submit" disabled={sending} className="w-full h-12 bg-[#0B3B24] hover:bg-[#072617] text-white font-medium text-base rounded-md mt-2 cursor-pointer hover:scale-105">
        {sending ? "Sending..." : "Submit Request"}
      </Button>
    </form>
  );
}
