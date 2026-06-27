"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-muted-foreground">
            Name
          </label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-muted-foreground">
            Email
          </label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-muted-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell me about your project or opportunity."
        />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit">Send Message</Button>
        {submitted ? (
          <p className="text-sm text-muted-foreground">Message captured on frontend only.</p>
        ) : null}
      </div>
    </form>
  );
}
