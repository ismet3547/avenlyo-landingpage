# Avenlyo landing-page visual demo

An isolated, local-only public landing-page demo on `feat/landing-page-demo-v1`.

The supplied `ismet3547/avenlyo-landingpage` repository was empty. The existing product in the
private `ismet3547/Avenlyo` repository was inspected read-only. The user selected this separate
repository for the demo. No backend, agent, authentication, tenant, database, API, or authenticated
product routes are copied into or changed by this repository.

## Run locally

Requirements: Node.js 22 or newer and pnpm 9 or newer.

```sh
git clone --branch feat/landing-page-demo-v1 https://github.com/ismet3547/avenlyo-landingpage.git
cd avenlyo-landingpage
pnpm install --frozen-lockfile
pnpm dev
```

Open **http://localhost:3000/**. No environment variables, database, or external services are needed.
The frontend lives in `apps/web` and uses Next.js 15, React 19, TypeScript, Tailwind CSS 3,
Lucide, and a small shadcn-style button component. Framework versions follow the inspected
product's resolved lockfile. `pnpm dev:web` starts the same demo.

## Scope

The only public page is `/`. It contains the ten requested landing-page sections, responsive
navigation, HTML/CSS product previews, an example conversation with selectable answer / qualify /
handoff states, and the demo request form.

- All mockup contacts, companies, conversations, and statuses are fictional demonstration data.
- The request form validates required fields in the browser and shows a local success state.
  It does not send, save, log, email, or persist submitted information.
- The example inquiry's review control changes local component state only.
- Product navigation, the composer, business controls, and status displays inside the mockups are
  illustrative. They do not operate the actual product.
- Privacy and Terms open accessible local demo notices, not complete live service policies.
- Contact and all demo CTAs lead to the form. There are no invented contact addresses.
- No deployments, merges, product milestones, certifications, customer logos, or customer
  endorsements are included. Search indexing is disabled for the demo.

## Checks

```sh
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

No existing frontend test suite is present in this originally empty demo repository. Browser QA
checks the rendered page at 1440px desktop, 820px tablet, and 390px mobile viewport widths,
including overflow, navigation, workflow layout, conversation stages, form validation / success,
and native legal-dialog keyboard behavior. The temporary responsive QA harness is not shipped.

The original authenticated product has not been run or integration-tested in this separate
repository; its code and routes are untouched. This demo is for visual direction review.
