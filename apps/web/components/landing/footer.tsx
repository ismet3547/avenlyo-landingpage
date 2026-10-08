'use client';

import { X } from 'lucide-react';
import { useRef, useState } from 'react';

import { Brand } from './brand';
import { navigationLinks } from './navigation';

export function Footer() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [notice, setNotice] = useState<'Privacy' | 'Terms'>('Privacy');

  function openNotice(value: 'Privacy' | 'Terms') {
    setNotice(value);
    dialog.current?.showModal();
  }

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Brand />
          <p>A clear next step for every conversation.</p>
        </div>
        <nav aria-label="Footer navigation">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Avenlyo</span>
        <div>
          <button type="button" onClick={() => openNotice('Privacy')}>
            Privacy
          </button>
          <button type="button" onClick={() => openNotice('Terms')}>
            Terms
          </button>
          <a href="#request-demo">Contact</a>
        </div>
        <span className="footer-signature">Thoughtful software. Human outcomes.</span>
      </div>
      <dialog
        ref={dialog}
        className="legal-dialog"
        aria-labelledby="legal-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="legal-dialog-content">
          <button
            className="dialog-close"
            aria-label="Close notice"
            type="button"
            onClick={() => dialog.current?.close()}
          >
            <X size={20} />
          </button>
          <span className="micro-label">VISUAL DEMO</span>
          <h2 id="legal-title">
            {notice === 'Privacy' ? 'Demo privacy notice' : 'Demo terms notice'}
          </h2>
          {notice === 'Privacy' ? (
            <p>
              This local visual demo does not send, store, or log the information entered in its
              demo request form. The product examples use fictional data. A full privacy policy will
              be needed before collecting real requests.
            </p>
          ) : (
            <p>
              This page demonstrates a proposed Avenlyo landing page. Product windows contain
              illustrative data, and form submissions show a local confirmation only. No demo
              request or service agreement is created. Live service terms are not provided in this
              visual demo.
            </p>
          )}
        </div>
      </dialog>
    </footer>
  );
}
