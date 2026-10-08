'use client';

import { ArrowRight, Check, RotateCcw } from 'lucide-react';
import { useRef, useState, type FormEvent } from 'react';

import { Button } from '@/components/ui/button';

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const successHeading = useRef<HTMLHeadingElement>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Visual demo only: no request, storage, logging, or product service is involved.
    setSubmitted(true);
    requestAnimationFrame(() => successHeading.current?.focus());
  }

  if (submitted) {
    return (
      <div className="demo-success" role="status">
        <span className="success-icon">
          <Check size={28} />
        </span>
        <span className="micro-label">LOCAL DEMO COMPLETE</span>
        <h3 ref={successHeading} tabIndex={-1}>
          That&apos;s the next step.
        </h3>
        <p>In the live experience, this is where your demo request would reach the Avenlyo team.</p>
        <p className="success-note">This visual demo hasn&apos;t sent or saved your information.</p>
        <Button variant="outline" type="button" onClick={() => setSubmitted(false)}>
          <RotateCcw size={15} />
          Try the form again
        </Button>
      </div>
    );
  }

  return (
    <form className="demo-form" onSubmit={onSubmit}>
      <div className="form-heading">
        <h3>Let&apos;s talk about your workflow.</h3>
        <p>A few details to start the conversation.</p>
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="demo-name">Name</label>
          <input
            id="demo-name"
            name="name"
            autoComplete="name"
            placeholder="Alex Morgan"
            required
            maxLength={120}
          />
        </div>
        <div className="form-field">
          <label htmlFor="demo-email">Work email</label>
          <input
            id="demo-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            required
            maxLength={254}
          />
        </div>
        <div className="form-field">
          <label htmlFor="demo-company">Company</label>
          <input
            id="demo-company"
            name="company"
            autoComplete="organization"
            placeholder="Your company"
            required
            maxLength={160}
          />
        </div>
        <div className="form-field">
          <label htmlFor="demo-website">Company website</label>
          <input
            id="demo-website"
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://company.com"
            required
            maxLength={2048}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="demo-help">
          What would you like Avenlyo to help with? <span>Optional</span>
        </label>
        <textarea
          id="demo-help"
          name="help"
          placeholder="Tell us a little about the inquiries your team handles…"
          rows={3}
          maxLength={3000}
        />
      </div>
      <Button className="form-submit" type="submit">
        Request a demo <ArrowRight size={17} />
      </Button>
      <p className="form-demo-note">Visual demo only. No request is sent or saved.</p>
    </form>
  );
}
