'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-surface border border-border rounded-lg p-12 md:p-16">
      <div className="max-w-2xl">
        {/* Headline */}
        <h2 className="text-4xl font-semibold leading-tight mb-4 text-foreground">
          Learn Business Strategy
        </h2>

        {/* Subheading */}
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          One carefully curated email every Sunday. Deep dives into the strategies, frameworks, and decisions behind the world's most successful companies.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="sm:w-auto">
            Subscribe
          </Button>
        </form>

        {/* Success Message */}
        {submitted && (
          <p className="text-sm text-primary mt-4 font-medium">
            Thank you! Check your email for confirmation.
          </p>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-muted-foreground mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
