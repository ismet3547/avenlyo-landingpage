import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  GitBranch,
  Headphones,
  ListChecks,
  MessageSquare,
  Phone,
  SlidersHorizontal,
  UserRound,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

import { BrandMark } from '@/components/landing/brand';
import { DemoForm } from '@/components/landing/demo-form';
import { Footer } from '@/components/landing/footer';
import { Navigation } from '@/components/landing/navigation';
import { ConversationDemo, HeroProductPreview } from '@/components/landing/product-preview';
import { Button } from '@/components/ui/button';

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}

const problems = [
  {
    title: 'Missed inquiries',
    description: 'Customers contact businesses outside working hours or while the team is busy.',
    icon: Clock3,
  },
  {
    title: 'Repetitive questions',
    description: 'Teams repeatedly answer information the business already knows.',
    icon: MessageSquare,
  },
  {
    title: 'Unqualified inquiries',
    description:
      'Sales or service teams spend time going back and forth before understanding what the customer actually needs.',
    icon: Users,
  },
];

const workflow = [
  {
    title: 'Learn your business',
    stage: 'Customer asks',
    icon: BookOpen,
    description: 'Avenlyo works from business information and approved knowledge.',
  },
  {
    title: 'Answer customers',
    stage: 'Avenlyo answers',
    icon: MessageSquare,
    description: 'Respond to customer questions using relevant business knowledge.',
  },
  {
    title: 'Understand intent',
    stage: 'Qualifies',
    icon: ListChecks,
    description:
      'Identify what the customer actually wants rather than simply matching FAQ keywords.',
  },
  {
    title: 'Take the next step',
    stage: 'Takes the next step',
    icon: CalendarDays,
    description:
      'Capture the lead, schedule an appointment, or move the customer toward the correct next action.',
  },
  {
    title: 'Bring in your team',
    stage: 'Human when needed',
    icon: UserRound,
    description: 'Escalate when a person should take over.',
  },
];

const capabilities = [
  {
    label: 'ANSWER',
    title: 'Be there.',
    icon: MessageSquare,
    detail: 'Give customers a helpful first response.',
    items: [
      'Approved business knowledge',
      'Website knowledge',
      'Customer questions',
      '24/7 availability',
    ],
  },
  {
    label: 'QUALIFY',
    title: 'Understand.',
    icon: ListChecks,
    detail: 'Find out what the customer really needs.',
    items: [
      'Capture lead information',
      'Understand intent',
      'Qualification',
      'Conversation context',
    ],
  },
  {
    label: 'ACT',
    title: 'Move forward.',
    icon: CalendarDays,
    detail: 'Make the conversation lead somewhere.',
    items: ['Appointment booking', 'Reschedule / cancel', 'Reminders', 'Next-step workflows'],
  },
  {
    label: 'ESCALATE',
    title: 'Stay human.',
    icon: UserRound,
    detail: 'Bring in the right person at the right time.',
    items: [
      'Human handoff',
      'Conversation context preserved',
      'Team takeover',
      'Controlled escalation',
    ],
  },
];

const surfaces = [
  { label: 'Web Chat', icon: MessageSquare },
  { label: 'SMS', icon: MessageSquare },
  { label: 'Voice', icon: Phone },
  { label: 'Scheduling', icon: CalendarDays },
  { label: 'Knowledge', icon: BookOpen },
  { label: 'Lead Management', icon: Users },
];

const principles = [
  {
    number: '01',
    title: 'Approved knowledge',
    description:
      'Avenlyo is designed around the information your business wants customers to receive.',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Human control',
    description: 'Your team can take over when a conversation requires human judgment.',
    icon: UserRound,
  },
  {
    number: '03',
    title: 'Controlled actions',
    description: 'The AI should only perform actions that belong inside the configured workflow.',
    icon: SlidersHorizontal,
  },
];

const useCases = [
  {
    number: '01',
    title: 'Customer support',
    description: 'Answer recurring questions without making customers wait.',
    icon: Headphones,
    example: 'A helpful answer, even after hours.',
  },
  {
    number: '02',
    title: 'Sales inquiries',
    description:
      'Understand what the prospect needs and turn conversations into qualified opportunities.',
    icon: Users,
    example: 'A qualified inquiry, ready for your team.',
  },
  {
    number: '03',
    title: 'Appointments & next steps',
    description: 'Move conversations into bookings, follow-ups, or the appropriate team workflow.',
    icon: CalendarDays,
    example: 'The right next step, without the back-and-forth.',
  },
];

export default function LandingPage() {
  return (
    <div id="top" className="landing-page">
      <Navigation />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-copy">
            <div className="hero-eyebrow">
              <span className="tiny-dot" />
              AI FRONT OFFICE
              <span className="hero-eyebrow-line" />
              <span>Built around your business</span>
            </div>
            <h1 id="hero-title">
              Turn every inbound inquiry
              <br className="desktop-break" /> into the <span>right next step.</span>
            </h1>
            <p>
              Avenlyo is an AI front office that answers customer questions, qualifies inquiries,
              schedules the next step, and brings in your team when a human is needed.
            </p>
            <div className="hero-actions">
              <Button asChild>
                <a href="#request-demo">
                  Request a demo <ArrowUpRight size={17} />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#how-it-works">
                  See how it works <ArrowRight size={17} />
                </a>
              </Button>
            </div>
            <div className="hero-note">
              <Check size={13} />
              Your knowledge. Your workflows. Your team in control.
            </div>
          </div>
          <div className="container hero-product">
            <HeroProductPreview />
          </div>
        </section>

        <section className="section problem-section" aria-labelledby="problem-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <Eyebrow>ROOM FOR BETTER WORK</Eyebrow>
                <h2 id="problem-title">
                  Your team shouldn&apos;t answer
                  <br className="desktop-break" /> the same questions all day.
                </h2>
              </div>
              <p>
                Every inquiry deserves attention.
                <br />
                Not every inquiry needs your attention.
              </p>
            </div>
            <div className="problem-list">
              {problems.map(({ title, description, icon: Icon }, index) => (
                <article className="problem-item" key={title}>
                  <div className="editorial-item-top">
                    <Icon size={21} strokeWidth={1.6} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="section workflow-section"
          aria-labelledby="workflow-title"
        >
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <Eyebrow>A CLEAR PATH FORWARD</Eyebrow>
                <h2 id="workflow-title">
                  From inquiry to action.
                  <br />
                  <span className="text-muted">Automatically.</span>
                </h2>
              </div>
              <div className="human-brand-message">
                <span className="human-brand-line" />
                <p>
                  AI when it can.
                  <br />
                  <strong>Human when it should.</strong>
                </p>
              </div>
            </div>
            <ol className="workflow-list">
              {workflow.map(({ title, stage, description, icon: Icon }, index) => (
                <li key={title}>
                  <div className="workflow-track">
                    <span className="workflow-icon">
                      <Icon size={21} strokeWidth={1.65} />
                    </span>
                    {index < workflow.length - 1 && (
                      <ChevronRight className="workflow-chevron" size={16} />
                    )}
                  </div>
                  <span className="workflow-stage">{stage}</span>
                  <span className="workflow-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
            <div className="workflow-footnote">
              <GitBranch size={16} />
              <span>One connected workflow, with your business at the center.</span>
            </div>
          </div>
        </section>

        <section
          id="product"
          className="section capabilities-section"
          aria-labelledby="capabilities-title"
        >
          <div className="container">
            <div className="section-heading">
              <Eyebrow>MORE THAN A RESPONSE</Eyebrow>
              <h2 id="capabilities-title">
                One front office.
                <br />
                Four jobs.
              </h2>
              <p>From the first question to the next meaningful action.</p>
            </div>
            <div className="capabilities-list">
              {capabilities.map(({ label, title, detail, icon: Icon, items }) => (
                <article className="capability" key={label}>
                  <div className="capability-top">
                    <span className="capability-icon">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="micro-label">{label}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>
                        <Check size={13} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="capability-surfaces">
              <span className="surfaces-label">ACROSS YOUR FRONT OFFICE</span>
              <div>
                {surfaces.map(({ label, icon: Icon }) => (
                  <span key={label}>
                    <Icon size={15} strokeWidth={1.7} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section conversation-section" aria-labelledby="conversation-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <Eyebrow>ANSWERS ARE JUST THE BEGINNING</Eyebrow>
                <h2 id="conversation-title">
                  A conversation shouldn&apos;t end
                  <br className="desktop-break" /> with an answer.
                </h2>
              </div>
              <p>
                Avenlyo moves the customer
                <br className="desktop-break" /> toward the right outcome.
              </p>
            </div>
            <ConversationDemo />
          </div>
        </section>

        <section className="section positioning-section" aria-labelledby="positioning-title">
          <div className="container positioning-layout">
            <div className="section-heading">
              <Eyebrow>A DIFFERENT KIND OF SOFTWARE</Eyebrow>
              <h2 id="positioning-title">
                Not another chatbot.
                <br />A front office.
              </h2>
              <p>A reply is useful. An outcome is better.</p>
            </div>
            <div className="comparison">
              <div className="comparison-row comparison-typical">
                <span className="comparison-label">Typical chatbot</span>
                <div className="typical-flow">
                  <span>Answers a question</span>
                  <ArrowDown size={15} />
                  <span>Conversation ends</span>
                </div>
              </div>
              <div className="comparison-row comparison-avenlyo">
                <span className="comparison-label">
                  <BrandMark />
                  Avenlyo
                </span>
                <div className="comparison-flow">
                  {['Answers', 'Understands', 'Qualifies', 'Acts', 'Escalates'].map(
                    (step, index) => (
                      <span className="comparison-flow-step" key={step}>
                        <span>{step}</span>
                        {index < 4 && <ArrowRight size={13} />}
                      </span>
                    ),
                  )}
                </div>
                <p>
                  <span className="tiny-dot" />
                  The conversation becomes a next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="section trust-section" aria-labelledby="trust-title">
          <div className="container">
            <div className="trust-heading">
              <div className="section-heading">
                <Eyebrow>YOUR BUSINESS. YOUR BOUNDARIES.</Eyebrow>
                <h2 id="trust-title">
                  AI shouldn&apos;t mean
                  <br />
                  giving up control.
                </h2>
              </div>
              <div className="control-preview" aria-label="Illustrative business control settings">
                <div className="control-preview-header">
                  <SlidersHorizontal size={16} />
                  <span>Business controls</span>
                  <span className="control-demo-label">Example</span>
                </div>
                <div>
                  <span>
                    <BookOpen size={14} />
                    Approved knowledge
                  </span>
                  <span className="control-enabled">
                    <Check size={12} />
                    Configured
                  </span>
                </div>
                <div>
                  <span>
                    <UserRound size={14} />
                    Human handoff
                  </span>
                  <span className="control-enabled">
                    <Check size={12} />
                    Available
                  </span>
                </div>
                <div>
                  <span>
                    <GitBranch size={14} />
                    Actions within your workflow
                  </span>
                  <span className="control-enabled">
                    <Check size={12} />
                    Defined
                  </span>
                </div>
              </div>
            </div>
            <div className="trust-principles">
              {principles.map(({ number, title, description, icon: Icon }) => (
                <article key={title}>
                  <div className="trust-principle-top">
                    <Icon size={22} strokeWidth={1.6} />
                    <span>{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="trust-bottom">
              <span className="tiny-dot" />
              <span>Thoughtful automation. Clear boundaries. A human way forward.</span>
            </div>
          </div>
        </section>

        <section
          id="use-cases"
          className="section use-cases-section"
          aria-labelledby="use-cases-title"
        >
          <div className="container use-cases-layout">
            <div className="section-heading">
              <Eyebrow>WHERE IT FITS</Eyebrow>
              <h2 id="use-cases-title">
                Built for conversations
                <br />
                that should go
                <br className="desktop-break" /> somewhere.
              </h2>
              <p>
                Different teams. Different questions.
                <br />
                The same need for a clear next step.
              </p>
            </div>
            <div className="use-case-list">
              {useCases.map(({ number, title, description, icon: Icon, example }) => (
                <a className="use-case" href="#request-demo" key={title}>
                  <div className="use-case-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <div>
                    <span className="micro-label">{number}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className="use-case-example">{example}</span>
                  </div>
                  <ArrowUpRight className="use-case-arrow" size={19} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="early-section" aria-labelledby="early-title">
          <div className="container early-layout">
            <div>
              <span className="early-badge">
                <span className="tiny-dot" />
                Early access
              </span>
              <h2 id="early-title">Built closely with businesses.</h2>
              <p>
                Avenlyo is working with early businesses to build a better way to handle inbound
                customer conversations. Early customers receive direct support during setup and
                onboarding.
              </p>
            </div>
            <div className="founder-note">
              <span className="founder-avatar">İ</span>
              <div>
                <strong>A conversation with the founder.</strong>
                <p>
                  Direct support, from the first demo
                  <br className="desktop-break" /> to your first workflow.
                </p>
                <span>İsmet · Founder, Avenlyo</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="request-demo"
          className="section final-cta-section"
          aria-labelledby="demo-title"
        >
          <div className="container final-cta-layout">
            <div className="final-cta-copy">
              <Eyebrow>LET&apos;S FIND YOUR NEXT STEP</Eyebrow>
              <h2 id="demo-title">
                See what Avenlyo
                <br className="desktop-break" /> could handle for
                <br className="desktop-break" /> your business.
              </h2>
              <p>
                Tell us how your team handles customer inquiries today. We&apos;ll show you how
                Avenlyo could fit into your workflow.
              </p>
              <div className="demo-expectations">
                <div>
                  <span>01</span>Talk through your customer inquiries.
                </div>
                <div>
                  <span>02</span>Explore a workflow for your business.
                </div>
                <div>
                  <span>03</span>See where your team stays in control.
                </div>
              </div>
              <div className="final-brand-message">
                <BrandMark />
                <span>
                  AI when it can.
                  <br />
                  <strong>Human when it should.</strong>
                </span>
              </div>
            </div>
            <div className="form-panel">
              <DemoForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
