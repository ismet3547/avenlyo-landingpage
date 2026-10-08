'use client';

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  FileText,
  Inbox,
  ListChecks,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Send,
  Settings2,
  UserRound,
  Users,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { BrandMark } from './brand';

function Status({
  children,
  tone = 'green',
}: {
  children: ReactNode;
  tone?: 'green' | 'neutral' | 'amber';
}) {
  return (
    <span className={cn('status-chip', `status-${tone}`)}>
      <span className="status-dot" />
      {children}
    </span>
  );
}

function Message({ children, customer = false }: { children: ReactNode; customer?: boolean }) {
  return (
    <div className={cn('message', customer && 'message-customer')}>
      <div className={cn('message-avatar', customer && 'avatar-customer')}>
        {customer ? 'AM' : <BrandMark />}
      </div>
      <div className="message-content">
        <div className="message-author">
          {customer ? 'Alex Morgan' : 'Avenlyo'}
          <span>{customer ? 'Customer' : 'AI assistant'}</span>
        </div>
        <div className="message-bubble">{children}</div>
      </div>
    </div>
  );
}

function ContextField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="context-field">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export function HeroProductPreview() {
  return (
    <div className="hero-product-frame">
      <div
        className="product-window"
        aria-label="Avenlyo product demonstration with fictional conversation data"
      >
        <div className="window-toolbar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>
            <span className="toolbar-dot" /> Avenlyo workspace
          </span>
          <span className="demo-label">Product preview · Demo data</span>
        </div>
        <div className="product-shell">
          <aside className="product-sidebar" aria-label="Illustrative product sidebar">
            <div className="workspace-name">
              <BrandMark />
              <span>Your business</span>
              <ChevronDown size={13} />
            </div>
            <div className="sidebar-label">WORKSPACE</div>
            <div className="sidebar-link sidebar-link-active">
              <Inbox size={16} />
              Inbox
            </div>
            <div className="sidebar-link">
              <Users size={16} />
              Leads
            </div>
            <div className="sidebar-link">
              <CalendarDays size={16} />
              Appointments
            </div>
            <div className="sidebar-label sidebar-label-second">AI FRONT OFFICE</div>
            <div className="sidebar-link">
              <BookOpen size={16} />
              Knowledge
            </div>
            <div className="sidebar-link">
              <Settings2 size={16} />
              Workflows
            </div>
            <div className="sidebar-bottom">
              <div className="sidebar-link">
                <CircleHelp size={16} />
                Help & support
              </div>
              <div className="workspace-user">
                <span className="small-avatar">YT</span>
                <div>
                  Your team<span>Workspace owner</span>
                </div>
              </div>
            </div>
          </aside>
          <div className="hero-conversation">
            <div className="conversation-header">
              <div className="conversation-heading">
                <span className="small-avatar customer-avatar">AM</span>
                <div>
                  Alex Morgan
                  <span>
                    <span className="tiny-dot" /> Web chat · Sample customer
                  </span>
                </div>
              </div>
              <MoreHorizontal size={19} aria-hidden="true" />
            </div>
            <div className="conversation-subheader">
              <span>
                <MessageSquare size={13} />
                Service inquiry
              </span>
              <Status>AI handling</Status>
            </div>
            <div className="hero-messages">
              <div className="conversation-date">Example conversation</div>
              <Message customer>
                Hi, I&apos;m interested in your custom service, but I&apos;m not sure which option I
                need.
              </Message>
              <Message>
                I can help with that. Could you tell me a little about what you&apos;re trying to
                accomplish?
              </Message>
              <Message customer>
                We&apos;re starting a new project and would like to understand what&apos;s possible.
              </Message>
              <div className="conversation-event">
                <ListChecks size={13} />
                <span>Intent identified. Inquiry ready for follow-up.</span>
              </div>
            </div>
            <div className="preview-composer">
              <span>AI handling conversation</span>
              <span className="composer-send">
                <Send size={15} />
              </span>
            </div>
          </div>
          <aside className="hero-context" aria-label="Example live customer context">
            <div className="context-heading">
              <span>Live context</span>
              <span className="tiny-dot" />
            </div>
            <div className="context-contact">
              <span className="context-avatar">AM</span>
              <strong>Alex Morgan</strong>
              <span>Sample customer</span>
            </div>
            <dl className="context-fields">
              <ContextField label="Intent">Service inquiry</ContextField>
              <ContextField label="Qualification">
                <span className="qualification">
                  <span />
                  <span />
                  <span /> High intent
                </span>
              </ContextField>
              <ContextField label="Status">
                <Status tone="amber">Needs follow-up</Status>
              </ContextField>
            </dl>
            <div className="next-step-card">
              <span className="micro-label">RECOMMENDED NEXT STEP</span>
              <strong>
                <UserRound size={16} />
                Human consultation
              </strong>
              <p>Connect the customer with the right person.</p>
              <div className="human-review">
                <span className="tiny-dot" />
                Human review available
              </div>
            </div>
            <div className="knowledge-note">
              <BookOpen size={14} />
              <span>Grounded in approved knowledge</span>
              <Check size={12} />
            </div>
          </aside>
        </div>
      </div>
      <div className="preview-caption">
        <span>
          <span className="tiny-dot" /> One conversation. A clear next step.
        </span>
        <span>Illustrative product interface</span>
      </div>
    </div>
  );
}

const stages = [
  { label: 'Answer', icon: MessageSquare },
  { label: 'Qualify', icon: ListChecks },
  { label: 'Hand off', icon: UserRound },
];

export function ConversationDemo() {
  const [stage, setStage] = useState(2);
  const [reviewed, setReviewed] = useState(false);

  function selectStage(value: number) {
    setStage(value);
    setReviewed(false);
  }

  return (
    <div className="outcome-demo">
      <div className="outcome-toolbar">
        <span>
          <span className="tiny-dot" /> Avenlyo in action
        </span>
        <span className="demo-label">Fictional example · No live data</span>
      </div>
      <div className="demo-stage-controls" aria-label="Explore the example conversation">
        {stages.map(({ label, icon: Icon }, index) => (
          <button
            type="button"
            key={label}
            onClick={() => selectStage(index)}
            aria-pressed={stage === index}
            className={cn('demo-stage-button', stage === index && 'demo-stage-active')}
          >
            <span className="stage-number">0{index + 1}</span>
            <Icon size={15} />
            {label}
            <ArrowRight size={13} className="stage-arrow" />
          </button>
        ))}
      </div>
      <div className="outcome-content">
        <div className="outcome-conversation">
          <div className="outcome-conversation-title">
            <MessageSquare size={16} />
            <span>The conversation</span>
            <Status tone={stage === 2 ? 'amber' : 'green'}>
              {stage === 2 ? 'Human follow-up' : 'AI handling'}
            </Status>
          </div>
          <div className="outcome-messages">
            <Message customer>
              I&apos;m interested in your custom service, but I&apos;m not sure what I need.
            </Message>
            <Message>No problem. What are you trying to accomplish?</Message>
            {stage >= 1 && (
              <Message customer>
                We need a custom solution for a new project and would like to understand what&apos;s
                possible.
              </Message>
            )}
            {stage >= 2 && (
              <Message>
                That sounds like something the team can help with. I&apos;ll collect a few details
                so they can review the request properly.
              </Message>
            )}
          </div>
          <div className="conversation-bottom-note">
            <Check size={14} />
            {stage === 0
              ? 'Relevant answers from business knowledge'
              : stage === 1
                ? 'Intent understood, with conversation context'
                : 'Context stays with the inquiry when your team takes over'}
          </div>
        </div>
        <div className="inquiry-panel" aria-live="polite" aria-atomic="true">
          <div className="inquiry-card">
            <div className="inquiry-card-heading">
              <span className="inquiry-icon">
                {stage === 2 ? <Check size={19} /> : <Plus size={19} />}
              </span>
              <div>
                <span className="micro-label">
                  {stage === 2
                    ? 'NEW QUALIFIED INQUIRY'
                    : stage === 1
                      ? 'INTENT IDENTIFIED'
                      : 'CUSTOMER CONTEXT'}
                </span>
                <h3>
                  {stage === 2
                    ? 'Ready for your team.'
                    : stage === 1
                      ? 'A clearer picture.'
                      : 'Start with understanding.'}
                </h3>
              </div>
            </div>
            <dl>
              <ContextField label="Contact">Alex Morgan</ContextField>
              <ContextField label="Company">
                Northstar Labs <span className="example-inline">(example)</span>
              </ContextField>
              <ContextField label="Intent">
                {stage >= 1 ? 'Custom service' : 'Service inquiry'}
              </ContextField>
              <ContextField label="Qualification">
                {stage >= 1 ? (
                  <Status>High</Status>
                ) : (
                  <span className="muted-value">Collecting context</span>
                )}
              </ContextField>
              <ContextField label="Status">
                {stage === 2
                  ? reviewed
                    ? 'Reviewed by your team'
                    : 'Human follow-up'
                  : 'AI handling conversation'}
              </ContextField>
              <ContextField label="Next step">
                {stage === 2 ? 'Consultation' : 'Understand the request'}
              </ContextField>
            </dl>
            <div className="inquiry-summary">
              <FileText size={15} />
              <p>
                {stage === 2
                  ? 'Interested in a custom solution for a new project. Needs a consultation to explore requirements and options.'
                  : stage === 1
                    ? 'The customer has a new project and wants to explore a custom solution.'
                    : 'The customer is exploring a service. Avenlyo asks a relevant follow-up question.'}
              </p>
            </div>
            {stage === 2 && (
              <button
                className={cn('review-button', reviewed && 'review-button-complete')}
                type="button"
                onClick={() => setReviewed(!reviewed)}
                aria-pressed={reviewed}
              >
                {reviewed ? (
                  <>
                    <Check size={15} />
                    Marked reviewed in this demo
                  </>
                ) : (
                  <>
                    Review inquiry <ArrowUpRight size={15} />
                  </>
                )}
              </button>
            )}
          </div>
          <p className="inquiry-caption">Example data, shown to illustrate the workflow.</p>
        </div>
      </div>
    </div>
  );
}
