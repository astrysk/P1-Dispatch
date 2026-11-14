# Dispatch — Phase 10: Open Source & Developer Documentation

**Status:** Open-source and developer documentation framework prepared; repository publication, license approval, complete documentation verification, and external contributor readiness remain subject to repository-level execution  
**Baseline:** Dispatch has a standalone local browser prototype, an earlier persistence-backed prototype, and a later full-stack monorepo. The full-stack monorepo contains Business, Transporter, Platform Admin, and Landing applications; an Express API; shared domain and shared client packages; PostgreSQL migrations; authentication middleware; and automated tests. The user has confirmed successful dependency installation, workspace builds, PostgreSQL migrations and development seed, API integration tests, and end-to-end operation of the deployed portals and pickup lifecycle. The repository also has an existing `CONTRIBUTING.md` that defines community contribution rules and the `astrysk-dispatch-stack` contribution branch.  
**Reference:** Dispatch workflow: `CREATE → CONFIRM → MONITOR → DETECT → RECOVER → RESOLVE → MEASURE`

---

## Phase 10 objective

Prepare Dispatch for open-source collaboration by making the repository understandable, installable, configurable, inspectable, and safe for external developers to evaluate and contribute to.

The documentation must explain what Dispatch does, why it exists, who it serves, how its system is structured, how to install and run the implementation, how to work with its APIs and configuration, how to troubleshoot common problems, and how to contribute changes.

The phase also establishes the legal and security checks required before public release. A repository being visible on GitHub does not automatically mean that its code is licensed for unrestricted reuse. A public repository must not expose credentials, private customer data, demo secrets, or third-party material that cannot legally be redistributed.

### Phase 10 scope

1. Repository README
2. Installation & Usage Guide
3. Architecture Documentation
4. API & Configuration Reference
5. Troubleshooting Guide
6. License & Third-Party Notices
7. Contribution Guidelines
8. Security & Secrets Review
9. Reusable Components

### Documentation principles

- Document the actual full-stack monorepo as the primary engineering implementation.
- Identify older prototypes separately; do not mix their instructions with the monorepo.
- Use commands and configuration names verified against the repository.
- Clearly label verified behavior, user-confirmed execution, known limitations, and future work.
- Never publish local demo credentials, private environment values, or real customer records.
- Do not invent a software license, API endpoint, environment variable, deployment provider, or integration.
- Keep documentation versioned with the code it describes.
- Make the repository useful to someone who has never participated in the project.

## 10.1 Repository README

### 10.1.1 Objective

The root `README.md` is the primary entry point for the Dispatch repository. It should allow a new visitor to understand the product, identify the correct implementation, assess the current project status, and find the next document or command without needing prior project context.

The README should answer:

1. What is Dispatch?
2. What operational problem does it address?
3. Who is it designed for?
4. How does the core workflow operate?
5. What is included in this repository?
6. What is the current implementation status?
7. Which technologies are used?
8. How can a developer run it locally?
9. Where are the architecture, API, contribution, security, and license documents?
10. What limitations should a developer understand before using it?

### 10.1.2 Recommended README structure

The root README should use this structure:

| Section | Required content |
|---|---|
| Project title | Dispatch and a concise product description |
| Project status | Development status and scope boundary |
| Overview | What Dispatch does and why it exists |
| Problem | Pickup coordination and reliability challenges |
| Intended users | Manufacturers, business operations users, transporters, and platform administrators |
| Core workflow | `CREATE → CONFIRM → MONITOR → DETECT → RECOVER → RESOLVE → MEASURE` |
| Product capabilities | Pickup creation, commitment handling, monitoring, risk handling, recovery, outcome recording, and reporting within implemented scope |
| Applications | Business, Transporter, Platform Admin, and Landing |
| Architecture summary | Frontend applications, API, domain/shared packages, and PostgreSQL |
| Technology stack | Technologies verified in repository manifests |
| Repository structure | Purpose of important directories and packages |
| Prerequisites | Runtime, package manager, database, and identity configuration actually required |
| Quick start | Link to detailed installation instructions and minimum verified commands |
| Configuration | Link to environment reference; never include secret values |
| Testing | Test commands and evidence boundaries |
| Documentation | Links to all developer documentation |
| Known limitations | Implemented gaps, development-only modes, and unverified production capabilities |
| Security | Security reporting instructions and responsible-use warning |
| License | Exact approved license or explicit statement that licensing is not yet assigned |
| Contributing | Link to `CONTRIBUTING.md` |
| Acknowledgements | Third-party notices and attributions where applicable |

### 10.1.3 Product description

The README should describe Dispatch as a pickup reliability and coordination platform for manufacturers.

Suggested summary:

> Dispatch helps manufacturing businesses coordinate outbound pickups, record transporter commitments, monitor pickup progress, identify operational risk, coordinate recovery, and measure pickup outcomes.

The product should not be described as:

- A transporter marketplace.
- An owned-fleet operator.
- A GPS tracking platform.
- A complete transportation management system.
- An AI-powered product.

Those descriptions would misrepresent the current product scope.

### 10.1.4 Product workflow

Explain the workflow in plain language:

1. **Create:** An authorized business user creates an outbound pickup request.
2. **Confirm:** The transporter records an explicit commitment response.
3. **Monitor:** Authorized users monitor the pickup's operational progress.
4. **Detect:** The system and users identify risk, delay, or failure according to defined rules.
5. **Recover:** The business coordinates and records recovery attempts where required.
6. **Resolve:** Actual pickup completion or an unresolved outcome is recorded.
7. **Measure:** Operational records support reporting and later reliability analysis.

The README must preserve the distinction between commitment, operational state, recovery state, and final outcome. A transporter confirming a request or accepting a replacement does not establish that a pickup has been completed.

### 10.1.5 Repository identity and prototype distinction

Dispatch has evolved through multiple implementations. The README must make the primary repository and its scope unambiguous.

| Implementation | Description | Documentation treatment |
|---|---|---|
| Local Ecosystem prototype | Standalone browser application using `localStorage` | Identify as an earlier workflow prototype; do not use its instructions for the full-stack monorepo |
| Persistence-backed prototype | Earlier Express/PostgreSQL conversion with shared state endpoints | Identify as a historical prototype; do not present its API as the current monorepo API |
| Full-stack monorepo | Business, Transporter, Admin, and Landing apps; Express API; shared packages; PostgreSQL migrations | Primary engineering implementation for this documentation |

The old persistence-backed README describes `GET /api/health`, `GET /api/state`, and `PUT /api/state`. Those endpoints belong to that earlier prototype and must not be copied into the monorepo API reference unless they are independently verified in the current source.

### 10.1.6 Repository structure

The current full-stack repository structure should be documented using the actual checked-out tree. The known application and package responsibilities are:

```text
dispatch-monorepo/
├── apps/
│   ├── business/       # Factory / business workspace
│   ├── transporter/    # Transporter workspace
│   ├── admin/           # Platform administration workspace
│   ├── landing/         # Landing and portal entry experience
│   └── api/             # Express API, authentication, database and migrations
├── packages/
│   ├── domain/          # Shared pickup-domain rules
│   └── shared/          # Shared API and session helpers
├── docs/                # Project and implementation documentation
├── package.json         # Workspace scripts and root dependencies
└── ...
```

This is a conceptual map of known directories. Before publishing it, verify every path and add or remove entries to match the current repository. Do not imply that an illustrative directory is present if it does not exist in the target branch.

### 10.1.7 README acceptance criteria

- [ ] A first-time visitor can explain what Dispatch does after reading the README.
- [ ] The primary repository and implementation are clearly identified.
- [ ] The older prototypes are not confused with the monorepo.
- [ ] Product scope and known limitations are stated accurately.
- [ ] Technology names match the current manifests and source.
- [ ] Quick-start instructions have been tested from a clean checkout.
- [ ] All documentation links resolve.
- [ ] No secret, credential, private data, or unapproved third-party material is present.
- [ ] License status is accurate and not implied.
- [ ] Contribution instructions match the repository's actual policy.

## 10.2 Installation & Usage Guide

### 10.2.1 Objective

Provide a repeatable path for a developer to obtain the repository, install dependencies, configure a local environment, prepare PostgreSQL, start the applications, and exercise the core product workflows.

The guide must distinguish the full-stack monorepo from the earlier browser-only and persistence-backed prototypes.

### 10.2.2 Prerequisites

The guide should list only prerequisites verified against the current repository.

Known requirements and checks include:

| Requirement | Documentation rule |
|---|---|
| Git | Required to clone and manage the repository |
| Node.js | Record the exact supported version from repository metadata; do not infer it from a different prototype |
| npm | Use the package manager and lockfile defined by the monorepo |
| PostgreSQL | Required for the full-stack database-backed implementation |
| Identity provider | Required for production-style OIDC authentication when local development identity mode is disabled |
| Environment file | Explain how to create it from the checked-in example, if present |
| Browser | List browsers actually used or supported by the portal applications |

The older single-server prototype README mentions Node.js 20+ and a root `DATABASE_URL`. Do not automatically transfer those exact requirements to the monorepo without checking its `package.json`, lockfile, and `.env.example`.

### 10.2.3 Clone and install

The README and installation guide should provide the repository's actual clone URL after it has been confirmed. Until then, use a clearly marked placeholder rather than inventing a URL.

Generic clone pattern:

```bash
git clone <OFFICIAL_REPOSITORY_URL>
cd <REPOSITORY_DIRECTORY>
```

The following commands were used for the full-stack monorepo and have been reported as successful by the user:

```bash
npm install
npm test
npm run build
```

The commands should be run from the repository root unless the current scripts specify otherwise.

### 10.2.4 Local database setup

The documented full-stack workflow includes:

```bash
npm run db:migrate
npm run db:seed:dev
```

Requirements:

- Use a dedicated local or disposable development PostgreSQL database.
- Configure the database connection using the actual environment variable names in the repository.
- Never run development seed commands against production.
- Inspect the seed script and migration scripts before running them.
- Record migration output and seed completion.
- Do not use production customer data in local development.

The development seed script explicitly refuses to seed demo identities when `NODE_ENV=production` or `DEV_AUTH_ENABLED` is not `true`. Demo identities are for local development only.

### 10.2.5 Authentication in local development

The full-stack repository includes a guarded development identity mode.

The documented safety rule is:

- `DEV_AUTH_ENABLED=true` may be used only in a non-production local development environment.
- Development identity headers must not be trusted or accepted in production.
- When development identity mode is disabled, the application must use the configured identity-provider verification flow.
- Never enable development identity mode in a deployed environment.
- Never use local demo identities as real customer accounts.

The exact identity-provider variables, issuer, audience, JWKS configuration, and callback settings must be copied from the actual authentication implementation and environment example. This document does not invent their names or values.

### 10.2.6 Start the applications

The monorepo includes separate application workspaces and an API. The root scripts should be inspected and documented before publishing exact commands for starting all services.

The following development command appears in the Phase 6 reproduction instructions:

```bash
npm run dev
```

Before release of this guide, verify whether that command starts all workspaces concurrently or only a subset. If applications need separate commands, document each actual script from the relevant package manifests.

### 10.2.7 Usage guide by role

**Business Portal**

Document the implemented workflows for:

- Signing in through the supported local or configured identity flow.
- Viewing the business workspace.
- Creating a pickup request.
- Viewing and monitoring authorized pickups.
- Reviewing transporter commitment responses.
- Recording exceptions and initiating recovery where implemented.
- Reviewing pickup outcomes and reports.

**Transporter Portal**

Document the implemented workflows for:

- Signing in as an authorized transporter identity.
- Viewing pickups assigned to the transporter.
- Recording a commitment response.
- Updating operational information where implemented.
- Understanding that confirmation does not mean pickup completion.

The transporter lifecycle is documented as limited in the existing QA report. The guide must list the exact supported actions and explicitly identify incomplete workflows rather than promising full transporter lifecycle parity.

**Platform Admin**

Document the implemented administrative workflows, access boundaries, and known limitations.

The QA report identifies admin invitations and membership editing as incomplete. The usage guide must not claim those functions are available unless the current code has changed and the change has been verified.

### 10.2.8 Test and build commands

The documented full-stack validation commands are:

```bash
npm test
npm run build
```

Database preparation commands:

```bash
npm run db:migrate
npm run db:seed:dev
```

The user has confirmed successful dependency installation, builds, migrations, seed, API integration tests, and end-to-end operation. The documentation should retain that provenance where it reports these checks; do not claim that they were independently rerun as part of Phase 10.

### 10.2.9 Installation and usage acceptance criteria

- [ ] A new developer can clone the repository.
- [ ] Runtime and package-manager versions are documented from source metadata.
- [ ] Dependencies install from a clean checkout.
- [ ] Local configuration can be created without sharing secrets.
- [ ] A disposable PostgreSQL database can be prepared.
- [ ] Migrations and development seed run successfully.
- [ ] The correct applications and API can be started.
- [ ] Business, Transporter, and Admin usage instructions match implemented behavior.
- [ ] Test and build commands are accurate.
- [ ] Development authentication cannot be enabled in production.
- [ ] Known incomplete workflows are clearly disclosed.

## 10.3 Architecture Documentation

### 10.3.1 Objective

Explain the actual system architecture so a developer can understand the application boundaries, major components, data ownership, request flow, authentication, persistence, and important technical decisions.

### 10.3.2 Architecture overview

The known full-stack architecture follows this conceptual flow:

`Portal Applications → Express API → Authentication / Authorization → Domain Rules → PostgreSQL`

The frontend applications are:

- `apps/business`
- `apps/transporter`
- `apps/admin`
- `apps/landing`

The shared packages are:

- `packages/domain`
- `packages/shared`

The API application is:

- `apps/api`

The architecture documentation must use the checked-out source as the authority for exact module responsibilities and dependencies.

### 10.3.3 Component responsibilities

| Component | Responsibility |
|---|---|
| Business application | Factory/business operational workspace |
| Transporter application | Transporter-facing workspace for assigned pickup activity |
| Admin application | Platform administration workspace |
| Landing application | Entry and portal navigation experience |
| Express API | Server-side request handling and application operations |
| Authentication middleware | Establishes the request identity and authentication context |
| Authorization logic | Enforces role, organization, and transporter access boundaries |
| Domain package | Shared pickup lifecycle and state-transition rules |
| Shared package | Common API and session utilities |
| PostgreSQL | Persistent operational and identity-related records |
| Migrations | Versioned database schema changes |
| Development seed | Local demo identities and development records, guarded from production use |

### 10.3.4 Request and data flow

Architecture documentation should explain the following path:

1. A user opens the portal appropriate to their role.
2. The portal obtains or uses the configured identity/session context.
3. The portal sends a request to the API.
4. The API authenticates the request.
5. The API resolves the user's permitted platform role, organization membership, and relevant transporter mapping.
6. The API validates the request payload.
7. The appropriate domain rule or operation is executed.
8. PostgreSQL persists the permitted state changes.
9. The API returns a response.
10. The portal updates the interface using the returned server state.

The browser is not a trusted authority for roles, organization ownership, or final pickup state.

### 10.3.5 Domain model documentation

The architecture guide must preserve the separate status dimensions.

**Commitment state**

- `pending`
- `confirmed`
- `rejected`
- `withdrawn`

**Operational state**

- `requested`
- `awaiting_confirmation`
- `scheduled`
- `at_risk`
- `recovery_in_progress`
- `in_progress`
- `completed`
- `cancelled`
- `unresolved`

**Recovery state**

- `not_required`
- `open`
- `attempting`
- `replacement_confirmed`
- `resolved`
- `failed`
- `closed_unresolved`

**Outcome state**

- `pending`
- `completed_on_time`
- `completed_late`
- `missed`
- `cancelled`
- `unresolved`

Explain the following invariants:

- Transporter commitment is not pickup completion.
- Recovery acceptance is not pickup completion.
- Unknown or overdue status must not automatically become success or missed.
- Original failure history must remain available after recovery.
- Completion requires the appropriate actual completion evidence.
- State transitions must be validated server-side.
- Related state changes and event history should remain transactionally consistent where the implementation requires it.

### 10.3.6 Authentication and authorization architecture

Document:

- Identity-provider integration and token verification.
- Issuer and audience validation.
- Remote JWKS verification where configured.
- Provisioned-user lookup.
- Platform role checks.
- Organization membership checks.
- Transporter membership or assignment checks.
- Development identity mode and its strict local-only boundary.
- Protected API routes and role requirements.

Do not publish tokens, private keys, signing secrets, issuer credentials, or real user records in architecture examples.

### 10.3.7 Database architecture

Document the actual PostgreSQL schema and relationships from the migrations.

At minimum, the guide should explain:

- Organization boundaries.
- User and membership relationships.
- Transporter records and membership mappings.
- Pickup records.
- Commitment and operational state.
- Exception and recovery records.
- Event or audit history.
- Reporting queries and data ownership.

The final ER diagram must be generated from the actual migrations, not from an older conceptual schema.

### 10.3.8 Architecture decisions

Maintain Architecture Decision Records (ADRs) for material decisions.

Each ADR should include:

- ADR number and title.
- Status: proposed, accepted, superseded, or rejected.
- Context and problem.
- Decision.
- Alternatives considered.
- Consequences and trade-offs.
- Security and operational implications.
- Date and decision owner.

Initial ADR topics may include:

- Monorepo and workspace structure.
- Separate portal applications.
- Express API boundary.
- PostgreSQL persistence.
- Shared domain package.
- Authentication and local development identity.
- Organization-level authorization.
- Pickup status dimensions.
- Transactional event history.

Only record a decision as accepted when the current implementation or an explicit approved decision supports it.

### 10.3.9 Architecture diagrams

Recommended diagrams:

1. System context diagram.
2. Application/component diagram.
3. Authentication and authorization flow.
4. Pickup lifecycle sequence diagram.
5. Recovery workflow sequence diagram.
6. Database entity-relationship diagram.
7. Local development topology.
8. Production deployment topology, once actual infrastructure is confirmed.

Diagrams must be maintained alongside the architecture document and updated when component boundaries change.

### 10.3.10 Architecture acceptance criteria

- [ ] All application and package responsibilities are documented.
- [ ] Diagrams match the current source and migrations.
- [ ] Authentication and authorization boundaries are explicit.
- [ ] Data flows and transaction boundaries are explained.
- [ ] Domain state dimensions and invariants are preserved.
- [ ] External integrations are distinguished from implemented capabilities.
- [ ] Architecture decisions have traceable records.
- [ ] No secrets or sensitive data appear in examples.

## 10.4 API & Configuration Reference

### 10.4.1 Objective

Provide developers with a reliable reference for the API contract, authentication requirements, configuration settings, database commands, and integration boundaries.

The reference must be generated or checked against the current full-stack monorepo. Do not combine endpoints from the older persistence-backed prototype with the current API.

### 10.4.2 API documentation standard

For every endpoint, document:

- HTTP method and path.
- Purpose.
- Authentication requirement.
- Required role or permission.
- Organization and transporter scope.
- Path and query parameters.
- Request body schema.
- Validation rules.
- Success response.
- Error responses and status codes.
- Side effects and state transitions.
- Transaction and event behavior.
- Idempotency or concurrency behavior, where relevant.
- Example request and response using synthetic data.

### 10.4.3 Known API capability groups

The Phase 6 repository review identifies the following API capability groups:

| Capability | Documented scope |
|---|---|
| Health | Service and database health |
| Identity | Authenticated request identity/context |
| Transporters | List and create transporter records |
| Pickups | List and create pickup records |
| Confirmation | Record transporter confirmation or rejection |
| Exceptions | Record pickup exceptions |
| Recovery | Open and manage recovery activity within implemented scope |
| Completion | Record actual pickup completion |
| Reporting | Summary reporting |
| Platform administration | Read organizations/users and create organizations |

The exact HTTP paths, verbs, payloads, and response schemas must be extracted from the current route implementation. This table is a capability inventory, not a substitute for the route-level API reference.

### 10.4.4 Error response reference

Document the actual error contract used by the API.

The implementation review has observed or tested status categories including:

| HTTP status | Meaning in documented scenarios |
|---|---|
| `400` | Invalid or incomplete request data |
| `401` | Missing or invalid authentication |
| `403` | Authenticated identity lacks required access |
| `409` | Requested state transition conflicts with current resource state |

Verify exact response envelope, error codes, and message fields against the API source before publishing examples.

### 10.4.5 Configuration reference

The configuration reference must list every required and optional environment variable discovered in:

- Root `.env.example`.
- Workspace `.env.example` files.
- `process.env` references.
- Database connection modules.
- Authentication middleware.
- Build and deployment configuration.
- Test and seed scripts.

For each variable, document:

| Field | Required information |
|---|---|
| Name | Exact variable name |
| Used by | Application or package |
| Purpose | What the setting controls |
| Required | Yes/no and under which environment |
| Example | Safe placeholder, never a real secret |
| Default | Actual code default, if one exists |
| Secret | Whether the value is sensitive |
| Environments | Development, test, staging, production |
| Validation | How missing or invalid values are handled |

Known configuration concepts include:

- `NODE_ENV`
- `DEV_AUTH_ENABLED`
- PostgreSQL connection configuration.
- OIDC issuer/audience/JWKS configuration when development authentication is disabled.

The exact database and OIDC variable names must be verified from the current source before they are listed as definitive. Do not assume the old prototype's `DATABASE_URL` is the only database setting used by the monorepo.

### 10.4.6 Development-only configuration

Document `DEV_AUTH_ENABLED=true` as a local-only development control.

Required warnings:

- It must not be enabled in production.
- It must not be used as a public authentication mechanism.
- The development seed script must refuse production use.
- Demo identities must never be treated as real customer identities.
- Production authentication must use the configured identity verification flow.

### 10.4.7 Database and workspace scripts

The following commands are identified in the Phase 6 validation and reproduction record:

```bash
npm install
npm test
npm run build
npm run db:migrate
npm run db:seed:dev
npm run dev
```

Document each script's actual implementation from the root `package.json` and workspace manifests. Record whether a command runs across all workspaces or only one service.

### 10.4.8 API specification format

If the project adopts OpenAPI, keep the specification synchronized with the API implementation and validate it in CI.

Do not create an OpenAPI document that invents routes or request fields. If OpenAPI is not currently present, identify it as a documentation improvement rather than claiming it already exists.

### 10.4.9 API and configuration acceptance criteria

- [ ] Every implemented route is inventoried.
- [ ] Methods and paths match route source.
- [ ] Authentication and authorization requirements are documented.
- [ ] Request and response schemas are verified.
- [ ] Error codes and response envelopes match implementation.
- [ ] State-changing side effects are explained.
- [ ] Environment variables are extracted from source and manifests.
- [ ] Secret values are never included.
- [ ] Development-only settings are clearly marked.
- [ ] Commands match actual package scripts.
- [ ] API documentation is checked as part of release review.

## 10.5 Troubleshooting Guide

### 10.5.1 Objective

Help developers diagnose common local setup, authentication, database, build, API, and workflow problems without exposing secrets or making risky changes to data.

### 10.5.2 Troubleshooting process

For every problem:

1. Capture the exact command or user action.
2. Record the application and environment.
3. Capture the relevant error message with secrets and personal data removed.
4. Identify the failing layer: frontend, API, authentication, database, or domain logic.
5. Check logs and configuration.
6. Reproduce using synthetic data where possible.
7. Apply the smallest safe correction.
8. Rerun the relevant test.
9. Record the resolution if the issue is likely to recur.

### 10.5.3 Common issues

| Symptom | Likely causes | Diagnostic steps | Safe resolution |
|---|---|---|---|
| `npm install` fails | Unsupported runtime, network issue, lockfile mismatch, registry access | Check Node/npm versions, registry connectivity, lockfile and install output | Use the repository-supported runtime and lockfile; do not delete the lockfile as a first response |
| Workspace build fails | Missing dependency, incorrect workspace install, compile error | Run the documented build command and inspect the first failing workspace | Correct the dependency or source issue and rerun the full build |
| PostgreSQL connection fails | Database not running, wrong connection settings, network or permission issue | Check database availability and sanitized connection configuration | Start the local database or correct local configuration; never paste credentials into an issue |
| Migration fails | Wrong database, schema conflict, insufficient privileges, migration mismatch | Confirm the target is disposable development/test DB and inspect migration output | Resolve the schema or privilege issue; do not manually edit production data |
| Development seed is refused | Production mode or development auth guard is not satisfied | Check `NODE_ENV` and local development configuration | Run only in an isolated non-production environment with the intended local settings |
| API returns `401` | Missing, invalid, expired, or unverifiable identity | Check authentication mode and token issuer/audience configuration without printing the token | Re-authenticate or correct local identity-provider configuration |
| API returns `403` | Role, organization membership, or transporter mapping does not permit the action | Verify the test identity and authorized membership records | Correct the test setup or access assignment through approved flows |
| API returns `400` | Invalid payload, missing field, invalid date, unsupported value | Inspect the validation response and request schema | Correct the request; do not bypass server validation |
| API returns `409` | State transition conflicts with current resource state | Inspect current persisted state and the requested operation | Follow the allowed lifecycle transition; do not force a state change in the database |
| Portal cannot reach API | Incorrect API base URL, server not running, CORS or network issue | Inspect browser network errors and API health | Correct local service configuration and allowed origin settings |
| Data disappears after restart | Wrong database, failed persistence, local-only state, seed/reset behavior | Check API response, database target, and persistence records | Correct the intended environment; never assume browser local storage is authoritative |
| Pickup is not visible to transporter | No valid assignment/membership or organization scope mismatch | Verify authorized transporter mapping and pickup scope | Correct authorized mapping through supported operations |
| Build works but portal fails | Runtime configuration, API connectivity, authentication, or browser error | Inspect browser console and network requests | Fix runtime configuration or application behavior; a build alone does not prove workflow correctness |

### 10.5.4 Troubleshooting safety rules

- Never request users to paste access tokens, passwords, private keys, or complete `.env` files into issues.
- Never recommend enabling development authentication on a public deployment.
- Never recommend running development seed against production.
- Never recommend destructive database reset commands without confirming the environment and data impact.
- Never advise direct database state edits as a normal way to repair pickup workflows.
- Preserve event and recovery history when investigating operational inconsistencies.

### 10.5.5 Troubleshooting acceptance criteria

- [ ] Common installation and runtime errors are covered.
- [ ] Database and migration failures are covered.
- [ ] Authentication and authorization errors are distinguished.
- [ ] API validation and state-conflict errors are explained.
- [ ] Portal connectivity problems are covered.
- [ ] Safe diagnostic steps are provided.
- [ ] No troubleshooting instruction exposes secrets or risks production data.

## 10.6 License & Third-Party Notices

### 10.6.1 Objective

Make the legal permissions and restrictions of the repository explicit and identify the licenses and attribution obligations associated with third-party dependencies and assets.

### 10.6.2 Project license status

The project license must be verified in the repository before public release.

**Current documentation status:** No approved license choice is established by the materials reviewed for this phase. Do not create a license file by guessing or imply that the project is MIT, Apache-2.0, or otherwise open-source licensed without an explicit decision from the project owner.

Before publication:

1. Decide the intended license with the project owner.
2. Consider code ownership, contributor rights, intended reuse, patent terms, attribution, and distribution needs.
3. Obtain appropriate legal review where required.
4. Add the exact approved license text.
5. Add the license identifier to the README and repository metadata.
6. Confirm that the selected license is compatible with included dependencies and assets.
7. Define how future contributions are licensed.

If no license has been approved, the README must state that no reuse license has been granted and that public visibility does not itself grant permission to copy, modify, distribute, or commercially use the code.

### 10.6.3 Third-party dependency inventory

Generate a current dependency inventory from the actual lockfile and package manifests.

For each direct and transitive dependency, record:

- Package name.
- Version.
- Direct or transitive status.
- License identifier.
- Source or repository.
- Attribution requirements.
- Known restrictions.
- Whether the dependency is bundled or redistributed.
- Review status.

Do not infer the license of a package from its name or assume all dependencies use permissive licenses.

### 10.6.4 Third-party assets

Review all non-code assets, including:

- Fonts.
- Icons.
- Illustrations.
- Images.
- UI libraries and templates.
- Sample data.
- Documentation excerpts.
- Code snippets.
- External logos and trademarks.

For each asset, record its source, owner, license or permission, attribution requirement, and whether redistribution is allowed.

### 10.6.5 Notices and attribution

Where required, include:

- `LICENSE`
- `NOTICE`
- `THIRD_PARTY_NOTICES.md`
- Attribution files or asset references.

The exact files depend on the selected project license and dependency obligations.

### 10.6.6 Contributor licensing

Contribution terms must be consistent with the chosen project license.

Decide whether contributors submit under the repository license by contribution, sign a Contributor License Agreement, or follow another approved process. Do not introduce a CLA or claim one exists without an explicit project decision.

### 10.6.7 License acceptance criteria

- [ ] Project owner has approved the project license.
- [ ] Exact license text is included.
- [ ] README license statement matches the license file.
- [ ] Direct and transitive dependency licenses have been inventoried.
- [ ] Third-party assets have been reviewed.
- [ ] Required notices and attributions are included.
- [ ] Contributor licensing terms are documented.
- [ ] No incompatible or unlicensed material is redistributed without permission.
- [ ] License status is clear to a new repository visitor.

## 10.7 Contribution Guidelines

### 10.7.1 Objective

Provide a consistent process for external contributors to report problems, suggest improvements, prepare changes, run checks, and submit pull requests.

### 10.7.2 Existing contribution policy

The repository already contains a `CONTRIBUTING.md` file. It invites research, product strategy, requirements, UI/UX, architecture, business model, go-to-market, testing, and general feedback.

The current branching policy specifies:

| Branch | Purpose |
|---|---|
| `main` | Official, stable Dispatch documentation |
| `astrysk-dispatch-stack` | Community suggestions, proposed changes, and contribution review |

All community contribution pull requests must target `astrysk-dispatch-stack`, not `main`.

This policy must be preserved unless the project maintainer explicitly changes it. Confirm that the named branches exist and that repository permissions and GitHub settings support the written policy.

### 10.7.3 Contribution types

Accepted contribution categories in the existing guide include:

- Problem discovery and research.
- Product strategy.
- Requirements and planning.
- UI/UX.
- Technical architecture.
- Business model and go-to-market.
- Testing and quality.
- General feedback and corrections.

As the software implementation matures, the contribution guide should add code-specific expectations without removing the existing product and research contribution paths.

### 10.7.4 Contribution workflow

The existing guide defines this workflow:

**1. Fork**

Create a fork of the official Dispatch repository.

**2. Clone**

```bash
git clone https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
cd REPOSITORY-NAME
```

Replace placeholders with the actual repository and account details.

**3. Fetch the contribution branch**

```bash
git fetch origin
git switch astrysk-dispatch-stack
git pull origin astrysk-dispatch-stack
```

**4. Create a focused branch**

```bash
git switch -c docs/short-description
```

Examples:

```text
research/competitor-analysis
docs/product-strategy-feedback
suggestions/pickup-workflow
improvements/requirements
```

For code contributions, use descriptive branch names consistent with the repository's accepted naming convention.

**5. Make focused changes and commit**

```bash
git add <changed-files>
git commit -m "Describe the contribution"
```

**6. Push the branch**

```bash
git push -u origin <contribution-branch>
```

**7. Open a pull request**

Open a pull request to the official repository with:

- Base branch: `astrysk-dispatch-stack`
- Head repository: contributor's fork
- Compare branch: contributor's branch

The contributor should explain what changed, the problem addressed, why the change helps Dispatch, and any supporting research or assumptions.

### 10.7.5 Code contribution requirements

Before accepting software changes, define and publish the repository's actual engineering checks.

Recommended requirements:

- Keep pull requests focused.
- Follow existing code style and architecture.
- Do not commit `.env` files or secrets.
- Do not include real customer or personal data.
- Add or update tests for changed behavior.
- Preserve organization and role authorization.
- Preserve pickup lifecycle invariants.
- Include migration changes where schema changes are required.
- Update relevant API and architecture documentation.
- Run the repository's test and build commands.
- Describe any migration, configuration, or operational impact.
- Include screenshots or recordings for material UI changes where appropriate.
- Resolve review feedback before merge.

The exact lint, formatting, type-check, test, and CI commands must be verified from the current repository scripts before they are made mandatory.

### 10.7.6 Contribution quality and review

The existing guide requires contributors to:

- Be specific and constructive.
- Explain the reasoning behind suggestions.
- Support factual claims with credible sources where possible.
- Distinguish findings from assumptions and opinions.
- Keep pull requests focused.
- Follow existing structure and formatting.
- Avoid unexplained deletion or rewriting.
- Exclude confidential, personal, and proprietary information.
- Avoid presenting suggestions as approved product decisions.

The project maintainer retains final authority over project direction and official documentation. Submission or review does not guarantee acceptance.

### 10.7.7 Issue reporting template

Provide an issue template that captures:

- Issue type.
- Affected application or package.
- Environment and version.
- Steps to reproduce.
- Expected behavior.
- Actual behavior.
- Relevant sanitized logs.
- Impact and severity.
- Whether the issue contains security-sensitive information.

Security vulnerabilities must not be reported in public issues. Direct reporters to the private security reporting process.

### 10.7.8 Contribution acceptance criteria

- [ ] Existing contribution policy is preserved or explicitly revised.
- [ ] Branch targets are correct and verified.
- [ ] Fork and pull request instructions work.
- [ ] Code-specific review requirements are documented.
- [ ] Test and build commands are accurate.
- [ ] Issue reporting guidance is available.
- [ ] Security issues have a private reporting path.
- [ ] License and contributor terms are consistent.
- [ ] Maintainer review responsibilities are clear.

## 10.8 Security & Secrets Review

### 10.8.1 Objective

Ensure that the public repository and its history do not expose credentials, tokens, private customer information, unsafe demo access, or other material that could compromise users or infrastructure.

The review must cover both the current working tree and Git history. Removing a secret from the latest commit does not remove it from earlier commits.

### 10.8.2 Security review scope

Inspect:

- Current tracked files.
- Untracked files that may be committed.
- Git history and branches intended for publication.
- Environment examples.
- Build output and generated bundles.
- Test fixtures and seed data.
- Logs and screenshots.
- Database dumps and exports.
- CI/CD configuration.
- Deployment manifests.
- Documentation examples.
- Third-party assets and credentials.

### 10.8.3 Sensitive material to detect

Search for:

- API keys.
- Access and refresh tokens.
- Passwords.
- Database connection strings containing credentials.
- Private keys and certificates.
- JWT signing secrets.
- OIDC client secrets.
- Cloud provider credentials.
- Service-role keys.
- Webhook signing secrets.
- SMTP credentials.
- Payment provider secrets.
- Customer names, contact details, and operational records.
- Production database exports.
- Internal URLs or infrastructure details that should not be public.

### 10.8.4 Development credentials and seed data

The repository has a guarded development seed flow and a development identity mode.

Required checks:

1. Confirm development seed refuses production execution.
2. Confirm development identity mode is disabled in production.
3. Confirm demo accounts are synthetic and clearly marked.
4. Confirm no real customer passwords or personal records are present.
5. Confirm demo credentials are not embedded in production frontend bundles.
6. Confirm test identities cannot authenticate against production.
7. Confirm seed data cannot overwrite or contaminate production records.

The standalone local browser prototype contains demo credentials in its README and client-side login flow. That prototype is not the production authentication model. Before making that prototype public, decide whether the demo credentials are safe to publish, rotate or replace them, and ensure the README warns that browser-local authentication is not a security boundary. Do not copy those credentials into the full-stack monorepo documentation.

### 10.8.5 Repository scanning

Run an approved secret scanner against:

- The working tree.
- All branches intended for publication.
- Git history.
- Generated artifacts.
- Build output.

Use dependency and vulnerability scanning appropriate to the repository's package manager.

Example tool categories include Git secret scanners, dependency vulnerability scanners, and GitHub repository security features. The exact tool should be selected by the maintainer and documented after it is configured.

A scan result must be reviewed; automated scanners can produce false positives and may miss secrets.

### 10.8.6 Remediation

If a secret is discovered:

1. Treat it as compromised.
2. Revoke or rotate the credential with its provider.
3. Identify the affected service and possible exposure window.
4. Remove the secret from the working tree.
5. Purge it from Git history where appropriate.
6. Coordinate force-push and collaborator re-cloning if history rewriting is required.
7. Review logs and service activity for misuse.
8. Add prevention controls to stop recurrence.
9. Record the incident without reproducing the secret.

Deleting a secret from a file or commit is not sufficient if the credential remains valid.

### 10.8.7 Public security reporting

Create a `SECURITY.md` file containing:

- Supported versions or branches, if defined.
- How to report a vulnerability privately.
- A monitored security contact or private reporting mechanism.
- Information to include in a report.
- Expected acknowledgement and update process, once agreed.
- Responsible disclosure expectations.
- A warning not to publish exploit details or credentials in public issues.

Do not invent a security email address or promise a response SLA without an approved owner and process.

### 10.8.8 Security acceptance criteria

- [ ] Current working tree scanned for secrets.
- [ ] Publication branches and Git history reviewed.
- [ ] Environment files and examples reviewed.
- [ ] Build artifacts reviewed for secret exposure.
- [ ] Demo and seed data reviewed.
- [ ] No real customer data or credentials included.
- [ ] Development identity mode is documented as local-only.
- [ ] Dependencies have been reviewed for known vulnerabilities.
- [ ] Discovered credentials are rotated and remediated.
- [ ] `SECURITY.md` provides a working private reporting route.
- [ ] Security review findings and exceptions are recorded.

## 10.9 Reusable Components

### 10.9.1 Objective

Identify the modules, libraries, utilities, and patterns that developers can reuse within Dispatch or adapt in other projects.

The purpose is to make useful engineering work discoverable without overstating stability, publishing unsafe internals, or promising compatibility that has not been tested.

### 10.9.2 Known reusable code boundaries

The full-stack monorepo includes two shared packages:

| Package | Known responsibility | Reuse considerations |
|---|---|---|
| `packages/domain` | Shared pickup-domain rules and state transitions | Reuse only with the same domain invariants and validated inputs |
| `packages/shared` | Shared API and session helpers | Reuse only with compatible authentication and API contracts |

The repository also contains separate portal applications and an API application. These are deployable application boundaries, not automatically reusable libraries.

### 10.9.3 Domain components

Potentially reusable domain capabilities include:

- Pickup commitment rules.
- Operational state transition validation.
- Recovery preconditions.
- Completion validation.
- Outcome classification.
- Grace-period boundary handling.
- Restrictions on invalid or terminal transitions.

Before documenting a function as a reusable public interface, record:

- Exported symbol and source path.
- Input and output types.
- Preconditions and validation.
- Side effects.
- Error behavior.
- Related tests.
- Compatibility expectations.
- Known limitations.

### 10.9.4 Shared API and session utilities

Document the actual exported functions in `packages/shared`.

For each utility, explain:

- Purpose.
- Import path.
- Function signature.
- Authentication assumptions.
- Error behavior.
- Whether it is browser-only or server-compatible.
- Whether it is stable or internal.

Do not publish a guessed API surface based only on a package name.

### 10.9.5 Reusable architectural patterns

Potentially reusable patterns include:

- Server-side authorization checks.
- Organization-scoped data access.
- Transporter membership mapping.
- Shared domain validation.
- Transactional state changes and event history.
- Portal-to-API integration.
- Migration-based PostgreSQL schema management.
- Guarded development identity and seed workflows.

Document these as patterns only where the implementation and tests support them.

### 10.9.6 Reuse maturity levels

Classify each reusable component:

| Level | Meaning |
|---|---|
| Internal | Used within Dispatch; no external compatibility promise |
| Documented | Purpose and usage are described |
| Tested | Automated tests cover the documented behavior |
| Stable | Public interface and compatibility expectations are defined |
| Published | Released for external reuse under the approved project license |

A component must not be described as published or open-source reusable if the project license does not permit that use.

### 10.9.7 Component catalogue

Maintain a catalogue with:

- Component or package name.
- Repository path.
- Purpose.
- Public exports.
- Dependencies.
- Usage example.
- Test coverage.
- Maturity level.
- License and attribution constraints.
- Known limitations.
- Owner or maintainer.

### 10.9.8 Reusable component acceptance criteria

- [ ] Shared packages are inventoried from source.
- [ ] Public exports and signatures are verified.
- [ ] Domain invariants and side effects are documented.
- [ ] Examples compile or are tested.
- [ ] Reuse limitations are explicit.
- [ ] Components are assigned a maturity level.
- [ ] License and dependency restrictions are understood.
- [ ] No unsupported compatibility promise is made.

## 10.10 Documentation Structure & Maintenance

### 10.10.1 Recommended documentation layout

The repository should use a clear structure similar to:

```text
dispatch-monorepo/
├── README.md
├── CONTRIBUTING.md
├── LICENSE                 # Add only after license approval
├── NOTICE                  # If required by license/dependencies
├── SECURITY.md
├── THIRD_PARTY_NOTICES.md  # If required
├── docs/
│   ├── installation.md
│   ├── usage.md
│   ├── architecture.md
│   ├── api-reference.md
│   ├── configuration.md
│   ├── troubleshooting.md
│   ├── reusable-components.md
│   ├── decisions/
│   │   └── ...
│   └── diagrams/
│       └── ...
└── ...
```

This is a recommended target structure. Confirm current files and avoid creating duplicate documentation where an accurate maintained document already exists.

### 10.10.2 Documentation ownership

Assign an owner for each document.

| Document | Accountable owner |
|---|---|
| README | Project maintainer |
| Installation and usage | Engineering maintainer |
| Architecture | Technical lead / architect |
| API and configuration | API maintainer |
| Troubleshooting | Engineering and support owner |
| License and notices | Project owner with appropriate legal review |
| Contribution guide | Project maintainer |
| Security policy | Security owner / project maintainer |
| Reusable component catalogue | Package maintainers |

Actual names and contact details must be supplied by the project. They are not assumed here.

### 10.10.3 Documentation update rules

Update documentation whenever a change affects:

- Product scope or supported workflow.
- Repository structure.
- Installation prerequisites.
- Commands or scripts.
- API routes or schemas.
- Authentication and authorization.
- Environment variables.
- Database schema or migrations.
- Deployment and operations.
- Known limitations.
- Dependencies or license obligations.
- Contribution process.
- Reusable package exports.

Documentation changes should be reviewed with the same care as code changes.

### 10.10.4 Documentation quality checks

Where practical, automate:

- Markdown linting.
- Link validation.
- Code example checks.
- OpenAPI validation, if adopted.
- Environment variable documentation checks.
- README quick-start smoke tests.
- Dependency license inventory.
- Secret scanning.
- Documentation build or preview.

Automation must use tools that are actually configured in the repository. Do not claim these checks exist until the workflow is implemented.

## 10.11 Open-Source Publication Readiness

### 10.11.1 Publication checklist

Before making the repository public or announcing it as ready for external development:

**Product and repository clarity**

- [ ] The full-stack monorepo is clearly identified as the primary implementation.
- [ ] Historical prototypes are separated and labelled.
- [ ] Product purpose, users, workflow, and scope are explained.
- [ ] Known limitations are visible.

**Developer experience**

- [ ] Clean-clone installation has been tested.
- [ ] Environment setup is documented.
- [ ] Database migrations and development seed are documented.
- [ ] Portals and API can be started using verified commands.
- [ ] Tests and builds have been run.
- [ ] Troubleshooting guidance is available.

**Technical documentation**

- [ ] Architecture reflects the current source.
- [ ] API reference reflects implemented routes.
- [ ] Configuration reference reflects actual variables.
- [ ] Domain invariants are documented.
- [ ] Reusable package interfaces are catalogued.

**Legal and security**

- [ ] Project license is approved and included, or reuse restrictions are explicitly stated.
- [ ] Third-party licenses and assets are reviewed.
- [ ] Secret scanning covers the working tree and Git history.
- [ ] No real customer data is present.
- [ ] Development-only credentials and modes are safely handled.
- [ ] Security reporting process is operational.

**Community readiness**

- [ ] Contribution branch policy is verified.
- [ ] Issue and pull request templates are available where appropriate.
- [ ] Maintainer responsibilities are assigned.
- [ ] Contribution review expectations are documented.
- [ ] External contributors can identify where and how to participate.

### 10.11.2 Publication decision

Use one of these explicit states:

| State | Meaning |
|---|---|
| Documentation in progress | Required developer documentation is incomplete |
| Internal documentation ready | Core documentation exists but has not been validated through an external clean-checkout review |
| External evaluation ready | A developer can understand, install, run, and evaluate the repository using verified instructions |
| Contribution ready | License, security, contribution, and maintainer processes are in place for the intended public contribution model |
| Public release approved | Project owner has approved publication and all release gates are satisfied |

A public GitHub repository without an approved license is not automatically an open-source project. External visibility and legal reuse rights are separate.

## 10.12 Phase 10 Validation & Exit Criteria

Phase 10 is complete as a documentation framework when the required document structures, standards, and acceptance criteria are defined.

It is complete as an executed open-source readiness phase only when the actual repository files are created or updated, commands and examples are verified, legal and security reviews are completed, and an external developer can follow the documented path.

### Documentation framework completion

- [x] README structure and content requirements defined.
- [x] Installation and usage guide requirements documented.
- [x] Architecture documentation requirements defined.
- [x] API and configuration reference requirements documented.
- [x] Troubleshooting structure and safety rules established.
- [x] License and third-party review requirements documented.
- [x] Existing contribution policy reviewed and preserved.
- [x] Security and secrets review framework defined.
- [x] Reusable package and component catalogue framework defined.
- [x] Documentation structure and maintenance rules established.
- [x] Open-source publication readiness gates defined.

### Repository execution evidence — not established by this document

- [ ] Root README updated and verified against the full-stack monorepo.
- [ ] Historical prototype documentation separated or clearly labelled.
- [ ] Installation guide added and tested from a clean clone.
- [ ] Usage guide verified for all implemented portals.
- [ ] Architecture document and diagrams match current source.
- [ ] API reference matches every implemented route.
- [ ] Configuration reference matches actual environment variables.
- [ ] Troubleshooting guide added and reviewed.
- [ ] Project license decision approved.
- [ ] License file and required third-party notices added.
- [ ] Existing `CONTRIBUTING.md` reviewed against current GitHub branch settings.
- [ ] Code contribution and review checks documented.
- [ ] Secret scan completed on working tree and publication history.
- [ ] Dependency and third-party asset license inventory completed.
- [ ] `SECURITY.md` includes an operational private reporting channel.
- [ ] Reusable components catalogued from actual package exports.
- [ ] Documentation links and code examples validated.
- [ ] Clean-checkout developer walkthrough completed.
- [ ] External developer evaluation completed and feedback recorded.
- [ ] Project owner approves the intended public release state.

### Phase 10 exit conditions

| Exit condition | Required evidence |
|---|---|
| Product is understandable | Accurate README with product scope and implementation identity |
| Product is installable | Successful clean-checkout setup using documented instructions |
| Product is usable | Verified role-specific usage guide |
| Architecture is inspectable | Current architecture diagrams and decision records |
| API is understandable | Route-level API reference matching source |
| Configuration is reproducible | Complete environment reference without secret values |
| Common failures are diagnosable | Troubleshooting guide with safe procedures |
| Reuse rights are clear | Approved license and third-party notices, or explicit no-license restriction |
| Contributions are governable | Working contribution policy, branch rules, and maintainer process |
| Repository is safe to publish | Secret/history review and security reporting process |
| Reusable work is discoverable | Verified component catalogue and maturity levels |
| External developers can participate | Successful independent developer walkthrough |

## Phase 10 Deliverables

1. Updated root `README.md`.
2. `docs/installation.md`.
3. `docs/usage.md`.
4. `docs/architecture.md`.
5. `docs/api-reference.md`.
6. `docs/configuration.md`.
7. `docs/troubleshooting.md`.
8. Approved `LICENSE`, if a license is selected.
9. `NOTICE` and/or `THIRD_PARTY_NOTICES.md`, where required.
10. Updated `CONTRIBUTING.md`.
11. `SECURITY.md`.
12. `docs/reusable-components.md`.
13. Architecture Decision Records and diagrams.
14. Dependency and third-party asset inventory.
15. Secret-scanning and publication review report.
16. Clean-checkout developer validation report.
17. Open-source publication readiness decision.

## Phase 10 Outcome

Phase 10 defines the documentation and governance required to make Dispatch understandable and accessible to external developers.

It establishes how the repository should explain the product, guide installation and usage, document architecture and APIs, expose configuration safely, support troubleshooting, clarify legal reuse rights, accept contributions, protect secrets, and identify reusable engineering components.

The existing contribution guide provides a foundation for community participation and establishes a specific contribution branch policy. The full-stack monorepo provides identifiable application and shared-package boundaries. The documentation must bring those assets together without confusing the earlier prototypes with the current engineering implementation.

This phase's framework is documented. Actual repository updates, license approval, third-party review, secret scanning, clean-checkout validation, and external contributor readiness remain execution tasks until evidence is recorded.

**The intended outcome is simple: a developer who has never worked on Dispatch should be able to understand what it does, install and run the correct implementation, inspect its architecture, evaluate its APIs, identify reusable components, report problems safely, and contribute changes under clear legal and technical rules.**
