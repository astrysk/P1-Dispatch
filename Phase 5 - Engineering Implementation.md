# Dispatch — Phase 5: Engineering & Implementation

**Status:** Development foundation implemented; local integration and release verification remain open.  
**Baseline:** Dispatch Full-Stack Development Build v0.2.0.  
**Reference:** Phase 4 technical research and system architecture; Phase 3 product workflows.

## Phase 5 objective

Turn the approved Dispatch product and Phase 4 architecture into a structured, runnable, testable codebase. The implementation is organized as three portal applications, one shared API, a PostgreSQL database, shared frontend helpers, and a domain-rules package. The standalone Local Ecosystem remains a workflow reference and is not connected to the full-stack API.

## 5.1 Development Plan

| Stage | Work | Priority | Dependency | Completion evidence | Status |
|---|---|---:|---|---|---|
| 1. Repository baseline | Establish workspace packages, portal entry points, scripts and docs | P0 | Phase 4 architecture | Repository tree and package manifests | Implemented |
| 2. Domain foundation | Define status dimensions, transitions, outcome rules and unit tests | P0 | Phase 3 lifecycle | `npm test` | Implemented; 15 tests pass |
| 3. Persistence | Add PostgreSQL schema, migrations, DB client and development seed | P0 | Database model | Migration and seed execute on local PostgreSQL | Implemented in code; local execution pending |
| 4. API foundation | Add identity context, access guards and pickup/exception/recovery/report routes | P0 | Domain + persistence | API integration tests and health check | Implemented in code; live DB verification pending |
| 5. Portal integration | Connect Business, Transporter, Admin and Landing interfaces to shared API | P1 | API contract | Browser workflows across all portals | Starter interfaces implemented; full workflow coverage pending |
| 6. Verification | Run tests, build portals, migrate/seed DB and test role boundaries | P0 | Stages 1–5 | Recorded test/build/DB/browser results | Partially verified |
| 7. Release hardening | Production identity provider, rate limits, monitoring, backups and deployment | P0 before production | Verification | Security/release sign-off | Not implemented |

### Milestones

- **M1 — Codebase established:** workspaces and application boundaries are present.
- **M2 — Domain rules verified:** 15 automated tests pass.
- **M3 — Persistence/API implementation present:** migrations, DB adapter, auth middleware and API routes are in the repository.
- **M4 — Local end-to-end verification:** pending developer-machine run against PostgreSQL and browser.
- **M5 — Production readiness:** blocked until security, deployment, monitoring, backup and full workflow requirements are completed.

## 5.2 Repository & Code Structure

```text
 dispatch-monorepo/
 ├── apps/
 │   ├── landing/                 # Landing page and portal entry
 │   ├── business/                # Manufacturer/business workspace
 │   ├── transporter/             # Transporter workspace
 │   ├── admin/                   # Platform administration workspace
 │   ├── api/                     # Express API, auth, DB, migrations, seed, tests
 │   │   ├── db/migrations/        # Ordered PostgreSQL schema migrations
 │   │   ├── db/seeds/             # Development seed SQL
 │   │   ├── src/                  # server.js, auth.js, db.js, migrate.js, seed-dev.js
 │   │   └── test/                 # API/schema contract tests
 │   └── assets/                  # Shared legacy/static portal assets
 ├── packages/
 │   ├── domain/                  # Status constants, pickup rules and domain tests
 │   └── shared/                  # Frontend API and session helpers
 ├── docs/                        # Implementation and phase documentation
 ├── reference/local-ecosystem/   # Standalone localStorage prototype and its docs
 ├── .env.example
 ├── package.json                 # npm workspaces and root commands
 └── README.md
```

**Module responsibilities:** `apps/api` owns request handling, authentication context, access checks and persistence. `packages/domain` owns deterministic pickup rules and status definitions. `packages/shared` owns browser API/session helpers. Portal apps own their screens and user interactions. SQL migrations own the relational schema.

**Conventions:** use ES modules (`type: module`); keep domain decisions out of UI components; keep schema changes in a new, sequentially numbered SQL migration; keep secrets in `.env` and never commit it; add tests beside the package they verify; use descriptive kebab-case filenames for docs and SQL migration names.

## 5.3 Development Environment

### Requirements

- Node.js 20 or newer (the verification workspace used Node.js v22.16.0).
- npm with workspace support.
- PostgreSQL 15 or newer.
- Windows PowerShell commands below are suitable for the user's current development environment.

### Setup

1. Create a dedicated development database named `dispatch` and a local database role with appropriate privileges.
2. Copy `.env.example` to `.env` in the repository root.
3. Set `DATABASE_URL`, `PORT`, `NODE_ENV=development`, and `DEV_AUTH_ENABLED=true` for local development only.
4. Run `npm install`.
5. Run `npm run db:migrate`.
6. Run `npm run db:seed:dev`.
7. Run `npm run dev`.

### Commands

```powershell
npm install
npm test
npm run build
npm run db:migrate
npm run db:seed:dev
npm run dev
```

### Local addresses

- Landing: `http://localhost:5176`
- Business: `http://localhost:5173`
- Transporter: `http://localhost:5174`
- Admin: `http://localhost:5175`
- API health: `http://localhost:4000/api/health`

`DEV_AUTH_ENABLED=true` enables local development identity selection. It must not be enabled in production. Production JWT verification expects `AUTH_JWKS_URL`, `AUTH_ISSUER` and `AUTH_AUDIENCE` to be configured.

## 5.4 Core Implementation

The repository contains four frontend entry points, one Express API and a PostgreSQL persistence layer. Implemented API routes include health and current-user context; transporter list/create; pickup list/create; pickup confirmation/rejection, exception, recovery and completion actions; summary reporting; and platform-admin organization/user listing plus organization creation.

The domain package models commitment, operational, recovery and final-outcome states independently. It includes rules for confirmation, at-risk marking, recovery, replacement confirmation, completion, cancellation and outcome classification. The outcome classifier uses a 30-minute grace period by default and does not infer success when the actual pickup timestamp is unknown.

Database migrations define organizations, users, memberships, transporter records and memberships, pickups, pickup events, exceptions, recovery cases/attempts and organization settings. The original standalone prototype is retained at `apps/business/prototype-reference.html`; it remains localStorage-based and is not the API-connected full-stack interface.

**Implementation boundary:** the full-stack build is a development foundation, not a feature-complete production system. Some portal screens are starter interfaces and not every standalone prototype workflow has been ported.

## 5.5 Version Control & Collaboration

- Repository source of truth: Git repository containing this workspace.
- Branch model: `main` for stable work; short-lived `feat/<scope>`, `fix/<scope>`, `docs/<scope>` branches for changes.
- Commit format: `feat(scope): ...`, `fix(scope): ...`, `docs(scope): ...`, `test(scope): ...`, `chore(scope): ...`.
- Keep commits focused; include migration, implementation and tests together when they form one change.
- Do not commit `.env`, credentials, database dumps containing real data, or user/customer records.
- Before merging: run `npm test`; run `npm run build` after dependencies are installed; review migration safety and authorization effects.
- Versioning: repository baseline is `0.2.0`; use semantic versioning when releases are made. Do not treat the development build version as a production release.

## 5.6 Third-Party Dependencies

| Dependency | Version range in manifest | Used for |
|---|---|---|
| Node.js | `>=20` | Runtime and built-in test runner |
| Express | `^4.21.2` | HTTP API server and routes |
| `pg` | `^8.13.1` | PostgreSQL connection/pooling |
| `dotenv` | `^16.4.7` | Environment configuration |
| `jose` | `^5.9.6` | OIDC/JWT verification using JWKS |
| React | `^19.1.0` | Portal UI components |
| React DOM | `^19.1.0` | Browser rendering |
| Vite | `^7.0.0` | Frontend dev server and build |
| `@vitejs/plugin-react` | `^4.4.1` | React integration in Vite |
| `concurrently` | `^9.2.0` | Run API and portal dev processes together |

No SMS, email, WhatsApp, GPS, mapping, AI-model or external logistics API integration is included in this implementation. Dependency licenses are not separately audited in this phase; review package licenses before distribution.

## 5.7 Implementation Decisions

1. **Separate portal applications with one shared API:** preserves distinct user experiences while centralizing business data and access checks.
2. **PostgreSQL as persistence layer:** relational records and constraints suit organizations, memberships, pickups, events and recovery records.
3. **Independent pickup status dimensions:** commitment, operational state, recovery state and final outcome remain separate to avoid ambiguous states.
4. **Deterministic domain rules:** initial pickup classification and transitions do not require AI.
5. **Explicit development identity mode:** local identity selection is isolated behind `DEV_AUTH_ENABLED`; production uses configured OIDC/JWT verification.
6. **Keep standalone prototype as reference:** preserve the approved workflow UI without pretending its localStorage data is connected to the backend.
7. **Manual operational coordination first:** no third-party messaging, GPS or transporter network integration is required for the current development foundation.

## 5.8 Technical Debt

| Item | Current limitation | Required follow-up | Priority |
|---|---|---|---:|
| End-to-end verification | No live PostgreSQL/browser run recorded in this workspace | Run migrations, seed, start services and execute cross-portal scenarios | P0 |
| API integration coverage | Current tests cover domain rules and schema contracts, not full HTTP/database behavior | Add API tests using disposable PostgreSQL | P0 |
| Browser E2E | No automated browser workflow suite | Add tests for create → confirm → exception → recovery → completion → report | P0 |
| Production identity | No identity provider configured | Configure OIDC provider, provision identities and test token validation | P0 |
| Authorization review | Middleware exists; cross-tenant access has not been penetration-tested | Add negative tests for every protected route and review tenant scoping | P0 |
| Portal completeness | Full-stack portals do not yet reproduce every standalone workflow | Port and validate the agreed MVP flows incrementally | P1 |
| Admin operations | Invitations and complete membership editing are incomplete | Implement onboarding, membership lifecycle and role changes | P1 |
| Transporter model | Separate transporter company onboarding/tenant model is incomplete | Define and implement transporter organization lifecycle | P1 |
| Audit guarantees | Event tables exist, but complete transactional audit behavior needs verification | Ensure state changes and events commit atomically | P1 |
| Operations | No deployment pipeline, monitoring, backups or rate limiting | Add before production exposure | P0 |
| Dependency governance | No lockfile/license audit included in this package snapshot | Commit lockfile and run dependency/license/security audits | P1 |

## Verification record

- **Automated tests:** `npm test` — 15 passed, 0 failed in Node.js v22.16.0.
- **JavaScript syntax:** run separately as part of this Phase 5 package verification; see `verification.md`.
- **Frontend production build:** not verified in this workspace because dependencies are not installed here.
- **PostgreSQL migrations/seed:** not run in this workspace; requires the developer's local PostgreSQL connection.
- **Browser end-to-end:** not run.

## Phase 5 outcome

A structured full-stack development codebase exists with domain rules, portal entry points, API routes, PostgreSQL migrations, local development configuration and passing automated domain/schema-contract tests. It is understandable and extensible, but it is **not yet production-ready**. Live database verification, complete browser workflow coverage and production security/operations work remain release gates.
