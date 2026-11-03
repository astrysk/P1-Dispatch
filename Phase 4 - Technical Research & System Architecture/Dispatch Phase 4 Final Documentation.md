DISPATCH
========================================

## Phase 4: Technical Research & System Architecture

PRODUCT: Dispatch — Pickup Reliability System
PHASE: 4 — TECHNICAL RESEARCH & SYSTEM ARCHITECTURE
DOCUMENTATION STATUS: Architecture and technical requirements documented; implementation and production-readiness work remain open
LAST UPDATED: 3 November 2026

---


1. PHASE OBJECTIVE
========================================


Define a technically feasible, maintainable, and secure system that can turn the Dispatch product experience from Phase 3 into a working application.

Dispatch helps small-scale manufacturers coordinate outbound pickups, capture transporter commitments, identify pickup risk, manage failures and recovery, and measure actual outcomes.

The core workflow is:

CREATE → CONFIRM → MONITOR → DETECT → RECOVER → RESOLVE → MEASURE

Phase 4 defines the architecture and engineering requirements for that workflow. It does not, by itself, mean that the backend, security controls, deployment, or production system have been completed.


2. SCOPE AND PRODUCT BOUNDARIES
========================================



IN SCOPE FOR THE INITIAL MVP
----------------------------


- Create and manage pickup records.
- Assign a transporter and record commitment or rejection.
- Monitor pickup windows and pending confirmations.
- Identify pickups requiring operational attention.
- Record exceptions and failed pickup attempts.
- Open recovery cases and record recovery attempts.
- Record actual completion and final outcome.
- Preserve event history and accountability.
- Provide organization-scoped operational views and reports.
- Support user roles and organization-level data isolation.
- Persist operational data in PostgreSQL.


EXPLICITLY OUTSIDE THE INITIAL MVP
----------------------------------


- Open transporter marketplace.
- Dispatch-owned vehicle fleet.
- Full transport management system.
- Live GPS tracking or route optimization.
- AI-based autonomous pickup decisions.
- AI agents or vector database infrastructure.
- Mandatory SMS, email, WhatsApp, or external transporter integrations.
- Automated recovery without human oversight.

These may be evaluated later only when validated operational needs justify them.


3. TECHNICAL FEASIBILITY
========================================


The MVP is feasible using a conventional web application and relational database. The main engineering risks are not advanced algorithms; they are state correctness, authorization, data integrity, event history, and reliable recovery workflows.

| Area | Assessment | Engineering implication |
|---|---|---|
| Technical feasibility | Feasible | Standard web technologies can support the defined workflows. |
| Complexity | Moderate | Status transitions, permissions, audit history, and recovery need explicit rules and tests. |
| Operational feasibility | Feasible with defined processes | Staff can initially record commitments, failures, and recovery actions manually. |
| Data availability | Feasible | Initial records can be entered manually. |
| External integrations | Not required for initial MVP | Keep the core workflow usable without third-party dependencies. |
| AI | Not required | Deterministic, explainable rules are sufficient for the first release. |
| Security | Critical requirement | Server-side authentication, authorization, and tenant isolation are release blockers. |
| Cost | Not yet verified | Hosting, database, and provider costs need confirmation before deployment. |
| Customer validation | Not established by technical feasibility | Validate the workflow with real manufacturers separately. |


KEY FEASIBILITY RISKS AND MITIGATIONS
-------------------------------------


1. Ambiguous status: Maintain separate commitment, operational, recovery, and outcome dimensions.
2. Misleading reliability metrics: Unknown outcomes must not be counted as success or failure without sufficient evidence.
3. Data loss: Use PostgreSQL as the system of record; do not rely on browser-local storage for shared operational data.
4. Unauthorized access: Enforce permissions and organization scope on every protected backend operation.
5. Timing errors: Preserve requested, confirmed, and actual timestamps; define time-zone and grace-period behavior.
6. Concurrent changes: Use transactions and conflict detection to prevent silent overwrites.
7. Loss of failure history: Keep original exception and recovery events after a pickup is resolved.

Decision: Proceed with the defined MVP, subject to completing the implementation and release gates in this document.


4. IMPLEMENTED TECHNOLOGY STACK
========================================

The integrated Dispatch project uses the following technologies and components.

| Component | Used in the project |
|---|---|
| Frontend | HTML, CSS and JavaScript portal interfaces |
| Backend | Node.js API using JavaScript modules |
| API communication | HTTP requests with JSON and shared API client code |
| Database | PostgreSQL |
| Database client | `pg` connection pool |
| Environment configuration | `dotenv` |
| JWT verification | `jose`, with remote JWKS and configured OIDC issuer/audience |
| Development authentication | Local-only development identity mode, guarded by environment settings |
| Database setup | SQL migrations and a development seed |
| Local development | Windows, Node.js and local PostgreSQL |

The integrated project contains separate portal experiences for Platform Admin, Business and Transporter. The standalone HTML prototype is a separate browser-only version that uses `localStorage`; it is not the backend architecture.

No React, Next.js, Prisma, Drizzle, cloud hosting provider, background-job service, AI service, or external messaging provider is claimed as part of the implemented stack.

IMPLEMENTED SYSTEM FLOW
-----------------------

Portal interface → shared Node.js API → PostgreSQL

- Portal interfaces display records and submit user actions.
- The API handles requests and applies authentication/context and role checks.
- PostgreSQL stores the application's persisted records.
- The shared API client sends requests to the backend.
- SQL migrations establish the database schema, and the development seed creates local demo identities.

The project includes an OIDC/JWT verification path that requires the relevant environment configuration. The local development identity mode is intended only for local development and must not be enabled in production.

6. OPERATIONAL STATE MODEL
========================================


Dispatch must not collapse all pickup information into one status field. Four dimensions describe different facts.


6.1 COMMITMENT STATUS
------------------------


- `pending`
- `confirmed`
- `rejected`
- `withdrawn`


6.2 OPERATIONAL STATUS
------------------------


- `requested`
- `awaiting_confirmation`
- `scheduled`
- `at_risk`
- `recovery_in_progress`
- `in_progress`
- `completed`
- `cancelled`
- `unresolved`


6.3 RECOVERY STATUS
------------------------


- `not_required`
- `open`
- `attempting`
- `replacement_confirmed`
- `resolved`
- `failed`
- `closed_unresolved`


6.4 FINAL OUTCOME
------------------------


- `pending`
- `completed_on_time`
- `completed_late`
- `missed`
- `cancelled`
- `unresolved`


6.5 REQUIRED STATE PRINCIPLES
-----------------------------


- A transporter commitment is not proof of pickup completion.
- An overdue pickup is not automatically a verified failure.
- A recovery attempt is not a successful recovery.
- Replacement acceptance is not completed collection.
- An unknown outcome remains unknown until evidence supports classification.
- A completed pickup requires an actual completion timestamp.
- Recovery must remain linked to the original pickup and failure history.
- Invalid transitions must be rejected by the backend.
- State changes and corresponding audit events must be committed transactionally.


6.6 TIMING RULES
------------------------


The current working defaults are:

- Show an approaching pickup at 60 minutes before its confirmed pickup time/window.
- Mark a pickup overdue only after the confirmed pickup window ends and the grace period expires.
- Use a provisional 30-minute grace period.
- Keep pending transporter confirmations visible in a dedicated queue.
- Flag recovery follow-ups when their configured follow-up time passes.

These values are provisional and must be configurable. Time-zone handling, rescheduling, boundary conditions, and the precise meaning of the confirmed pickup window must be tested before production.


7. DATA MODEL
========================================



7.1 CORE ENTITIES
------------------------


| Entity | Purpose | Important requirements |
|---|---|---|
| Organizations | Manufacturing organizations using Dispatch | Tenant boundary |
| Users | Application identities | Link to the chosen authentication mechanism |
| Memberships | User-to-organization access and role | Enforce membership and permissions |
| Transporters | Transporter records | Organization-scoped; active/inactive state |
| Pickups | Pickup details, time windows, assignment, statuses, outcome | Authoritative operational record |
| Pickup Events | Historical changes and operational events | Append-oriented audit history |
| Exceptions | Pickup problems and failures | Preserve reason, time, and reporting context |
| Recovery Cases | Recovery lifecycle | Link to original pickup and exception |
| Recovery Attempts | Individual actions and follow-ups | Do not infer success from an attempt |
| Organization Settings | Grace period and operational thresholds | Validate permitted values |
| Notifications | Future delivery status | Deferred until notifications are introduced |


7.2 RELATIONSHIPS
------------------------


- An organization has multiple users through memberships.
- An organization can maintain multiple transporters and pickups.
- A pickup has multiple historical events and may have multiple exceptions.
- A pickup may have a recovery case with multiple recovery attempts.
- Organization settings define timing thresholds for that organization.

Every organization-owned record and every query that touches it must be scoped to an authorized organization.


7.3 DATA INTEGRITY RULES
------------------------


1. Pickup window start must not be after its end.
2. A completed pickup must have an actual completion timestamp.
3. A recovery attempt must not automatically mark a case resolved.
4. Replacement acceptance must not imply completion.
5. The original failure must remain visible after recovery.
6. State changes and audit events must be stored in one transaction.
7. Historical events must not be silently overwritten during routine operations.
8. Concurrent updates must not silently overwrite newer data.
9. Unknown outcomes must remain unknown until sufficient evidence is recorded.
10. Rescheduling, cancellation, and transporter changes must remain traceable.


7.4 INDEXING AND LIFECYCLE
--------------------------


Indexes should support organization/status filtering, upcoming and overdue pickup queries, event history retrieval, exception and recovery queues, and transporter performance queries. Confirm indexes against real query patterns.

Before production, define retention, deactivation, export access, contact-data handling, backup, restoration, and deletion policies.


8. PROPOSED API CONTRACT
========================================


The following are proposed contracts, not a claim that these endpoints are implemented.


8.1 CONVENTIONS
------------------------


- Base path: `/api/v1`
- Deployed transport: HTTPS
- Format: JSON
- Authentication: verified session or bearer token, depending on selected architecture
- Authorization: server-side role and organization checks
- Validation: server-side for every input
- Pagination: required for growing collections
- Concurrency: version check or equivalent conflict protection
- Errors: stable machine-readable codes; no stack traces or sensitive data in client responses


8.2 ENDPOINT INVENTORY
------------------------


| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/v1/me` | Authenticated identity and authorized memberships |
| GET, POST | `/api/v1/transporters` | List or create transporters |
| GET, PATCH | `/api/v1/transporters/{id}` | Retrieve or update transporter |
| GET, POST | `/api/v1/pickups` | List or create pickups |
| GET | `/api/v1/pickups/{id}` | Pickup detail and history |
| PATCH | `/api/v1/pickups/{id}` | Update permitted fields |
| POST | `/api/v1/pickups/{id}/confirmations` | Record confirmation or rejection |
| POST | `/api/v1/pickups/{id}/reschedule` | Record a revised pickup window |
| POST | `/api/v1/pickups/{id}/exceptions` | Record an operational exception |
| POST | `/api/v1/pickups/{id}/recovery-cases` | Open recovery |
| POST | `/api/v1/recovery-cases/{id}/attempts` | Record recovery attempt |
| POST | `/api/v1/recovery-cases/{id}/replacement-confirmations` | Record replacement acceptance |
| POST | `/api/v1/pickups/{id}/completion` | Record actual completion |
| POST | `/api/v1/pickups/{id}/cancellation` | Cancel with reason |
| GET | `/api/v1/reports/summary` | Organization-scoped summary metrics |
| GET | `/api/v1/reports/transporters` | Transporter performance data |
| GET | `/api/v1/exports/pickups.csv` | Authorized CSV export |
| GET, PATCH | `/api/v1/settings` | Retrieve or update organization settings |


8.3 STANDARD ERROR CODES
------------------------


- `VALIDATION_ERROR`
- `UNAUTHENTICATED`
- `FORBIDDEN`
- `NOT_FOUND`
- `CONFLICT`
- `INVALID_STATE_TRANSITION`
- `RATE_LIMITED`
- `INTERNAL_ERROR`

Do not reveal whether a restricted record exists when that would expose another organization's data. Protect CSV export against unauthorized access and spreadsheet formula injection.


9. SECURITY AND PRIVACY REQUIREMENTS
========================================



9.1 ROLES
------------------------


- Administrator: manage permitted organization settings and access.
- Operations Manager: manage pickups, transporters, recovery, and reports.
- Operations Staff: perform authorized routine pickup and recovery operations.
- Viewer: read-only access to permitted records and reports.

The final permission matrix must be written and tested against each endpoint before release.


9.2 AUTHENTICATION AND AUTHORIZATION
------------------------------------


- Use an established authentication system or maintained library.
- Verify identity on every protected request.
- Check active membership in the selected organization.
- Enforce role permissions on the server.
- Never trust a role or organization ID supplied by the browser.
- Prevent viewers from mutating data through direct API calls.
- Apply least privilege to administrative functions.
- Keep secrets out of source control and logs.


9.3 TENANT ISOLATION
------------------------


All reads, writes, reports, and exports involving organization-owned records must be scoped to an organization the authenticated user is allowed to access. This includes pickups, transporters, exceptions, recovery cases, reports, CSV exports, and future background jobs.

Cross-organization access tests are mandatory.


9.4 AUDIT EVENTS
------------------------


Record, at minimum:

- Organization ID.
- Actor/user ID.
- Action/event type.
- Target record.
- Timestamp.
- Relevant before/after state or structured details, without storing unnecessary sensitive information.

Transporter confirmations should record the authorized user who entered the response and the method of confirmation. Preserve original failure history after recovery.


9.5 REQUIRED SECURITY TESTS
---------------------------


- Unauthenticated access to protected endpoints.
- Access to another organization's records.
- Forged role or organization identifiers.
- Viewer mutation attempts.
- Invalid status transitions.
- Duplicate requests and retries.
- Concurrent edits.
- Unsafe input and CSV formula injection.
- Sensitive information in logs or exports.
- Unauthorized settings changes.


10. AI AND EXTERNAL INTEGRATION DECISION
========================================


AI is excluded from the initial MVP. Deterministic rules are sufficient for confirmation tracking, risk detection, overdue identification, outcome classification, recovery tracking, and reporting.

Potential future AI use cases include exception-note summaries and analysis of recurring failure patterns. These require separate validation. If AI is added later, it must not fabricate missing evidence, silently mark pickups complete, or classify unknown outcomes as successful. Human operational control and deterministic fallback behavior must remain available.

Manual transporter confirmation and manual recovery recording are acceptable for the initial MVP. External messaging, GPS, route optimization, and third-party transporter integrations are deferred until the core workflow is reliable and the value is demonstrated.


11. TESTING STRATEGY
========================================



11.1 DOMAIN TESTS
------------------------


Test:

- Allowed and disallowed state transitions.
- Confirmation and rejection.
- Pickup window validation.
- At-risk and overdue timing boundaries.
- Grace-period behavior.
- Rescheduling and cancellation.
- Recovery attempts and replacement confirmation.
- Completion timestamp validation.
- On-time, late, missed, cancelled, and unresolved outcomes.
- Unknown outcomes excluded from success calculations.
- Original failure history retained after recovery.


11.2 DATABASE INTEGRATION TESTS
-------------------------------


Test:

- Migrations from an empty database.
- Constraints and relationships.
- Transaction rollback on failed state changes.
- State change and audit event atomicity.
- Organization-scoped queries.
- Concurrent update conflicts.
- Backup and restoration procedure.


11.3 API AND AUTHORIZATION TESTS
--------------------------------


Test each endpoint for authentication, role permission, organization scope, request validation, consistent errors, pagination, and unauthorized record access.


11.4 END-TO-END ACCEPTANCE TESTS
--------------------------------


1. Create a pickup and verify it appears in the correct operational queue.
2. Record transporter confirmation and verify the commitment history.
3. Reject or leave a commitment pending and verify it remains visible for action.
4. Move a pickup into an at-risk/overdue condition using controlled test times.
5. Record an exception and open recovery.
6. Record a recovery attempt and replacement acceptance without falsely marking the pickup completed.
7. Record actual completion and verify the final outcome.
8. Confirm that reports use eligible, evidence-backed outcomes.
9. Confirm that one organization cannot access another organization's records.
10. Confirm that a viewer cannot mutate records.

No test should be described as passing until it has actually been run and its result recorded.


12. DEPLOYMENT AND OPERATIONS
========================================


The initial deployment should use a managed application runtime and managed PostgreSQL where feasible. The final provider and environment configuration remain to be selected.

Required before production:

- Separate development and production configuration.
- Secrets stored outside source control.
- Database migration procedure.
- HTTPS and secure session configuration.
- Automated backups and a tested restore procedure.
- Health checks and structured application logs.
- Error and uptime monitoring.
- Defined deployment and rollback procedure.
- Documented data retention and export permissions.
- Access-control and tenant-isolation tests.
- A basic incident and recovery procedure.

Do not expose PostgreSQL directly to the public internet unless the hosting architecture specifically requires it and access controls are properly configured.


13. TECHNICAL DECISION RECORDS
========================================



ADR-001 — PRESERVE THE PHASE 3 PROTOTYPE AS THE UX REFERENCE
------------------------------------------------------------


Decision: Retain the prototype's workflows and design intent.  
Reason: Existing product work should not be discarded without evidence.  
Trade-off: A single-file prototype is not a substitute for maintainable production structure.  
Implication: Migrate the interface incrementally and keep behavior aligned with the documented workflows.


ADR-002 — POSTGRESQL AS THE SYSTEM OF RECORD
--------------------------------------------


Decision: Use PostgreSQL for operational data.  
Reason: Dispatch needs relational integrity, transactions, event history, tenant scoping, and reporting.  
Trade-off: Migrations, backups, and database operations must be maintained.


ADR-003 — FOUR SEPARATE STATUS DIMENSIONS
-----------------------------------------


Decision: Keep commitment, operational status, recovery status, and final outcome independent.  
Reason: They represent different facts and cannot be safely inferred from one another.  
Implication: Domain functions and tests must validate transitions and prevent false success classifications.


ADR-004 — SERVER-ENFORCED AUTHORIZATION
---------------------------------------


Decision: Enforce identity, membership, role, and organization scope on every protected operation.  
Reason: Client-side checks can be bypassed.  
Implication: Authorization and cross-tenant tests are release blockers.


ADR-005 — NO AI IN THE INITIAL MVP
----------------------------------


Decision: Use deterministic business rules.  
Reason: The core workflow does not justify AI complexity or uncertainty.  
Implication: Reconsider AI only for a specific validated use case.


ADR-006 — PRESERVE OPERATIONAL EVENT HISTORY
--------------------------------------------


Decision: Persist meaningful state changes and audit events together.  
Reason: Reliability measurement and accountability depend on knowing what actually happened.  
Implication: Do not silently overwrite prior events or erase initial failures after recovery.


ADR-007 — DEFER EXTERNAL INTEGRATIONS
-------------------------------------


Decision: Start with staff-recorded confirmation and recovery actions.  
Reason: The core workflow should be validated without external-service dependencies.  
Implication: Add messaging and other integrations after the core workflow is stable.


14. IMPLEMENTATION STATUS AND HONEST CLOSEOUT
=============================================


The architecture and requirements are documented. Previous project notes indicate that initial domain rules and a draft migration were prepared, with 12 domain tests reported as passing at that point. Those results should be re-run against the current repository before being treated as current verification.

A recent first-pass full-stack package introduced an Express server and a PostgreSQL-backed whole-state endpoint to preserve the original HTML prototype. That approach is only a persistence bridge. It is not production-ready: it does not implement secure server-side authentication, role authorization, organization-level isolation, or resource-level APIs. The prototype's client-side role checks cannot be treated as a security boundary.


DOCUMENTATION DELIVERABLES COMPLETED
------------------------------------


- Feasibility assessment and key technical risks.
- Proposed stack and architecture.
- Core state model and provisional timing rules.
- Initial data entities and integrity requirements.
- Proposed REST API inventory and error conventions.
- Security, privacy, auditability, and tenant-isolation requirements.
- AI and integration scope decisions.
- Domain, integration, authorization, and end-to-end test strategy.
- Deployment and operations requirements.
- Technical decision records.
- Implementation status and release gates.


ENGINEERING WORK STILL REQUIRED
-------------------------------


| Priority | Work item | Acceptance evidence |
|---|---|---|
| P0 | Confirm the actual application structure and final stack | Reviewed repository and recorded decision |
| P0 | Implement proper database schema and migrations | Migration succeeds from a clean database and can be rolled forward safely |
| P0 | Replace whole-state persistence with resource-level backend APIs | Pickup, transporter, exception, and recovery data stored in relational tables |
| P0 | Implement authentication and server-side authorization | Protected endpoints reject unauthenticated and unauthorized requests |
| P0 | Enforce organization-level isolation | Automated cross-organization access tests pass |
| P0 | Implement domain state transitions in backend services | Invalid transitions rejected; valid transitions tested |
| P0 | Persist audit events transactionally | State and event commit or roll back together |
| P1 | Add database integration and API tests | Test results recorded in CI or reproducible local run |
| P1 | Add end-to-end critical workflow tests | Core pickup and recovery journeys pass |
| P1 | Add concurrency and idempotency protection | Duplicate/conflicting updates handled safely |
| P1 | Implement reporting against verified outcome data | Unknown outcomes excluded from success calculations |
| P1 | Add backup, restore, logging, monitoring, and deployment runbook | Restore and rollback procedures demonstrated |
| P2 | Evaluate notification integrations | Validated use case, delivery/retry behavior, and failure handling documented |
| P2 | Conduct operational user validation | Feedback and observed workflow results documented |


PHASE 4 EXIT CRITERIA
------------------------


Phase 4 is documentation-complete but not engineering-complete. It can be closed as a documentation phase once this specification is reviewed and accepted. It must not be represented as a completed production implementation until:

1. Database migrations and persistence are verified.
2. Authentication, authorization, and tenant isolation are implemented and tested.
3. Critical state transitions and recovery workflows pass automated tests.
4. Audit history is durable and consistent.
5. End-to-end acceptance tests pass.
6. Deployment, monitoring, and backup/restore are demonstrated.
7. Representative users validate the workflow.


KNOWN UNRESOLVED DECISIONS
--------------------------


- Final frontend framework and repository structure.
- Final ORM/database access library.
- Authentication provider and session strategy.
- Hosting provider and deployment environment.
- Final permission matrix for each role and endpoint.
- Exact operational definition of a confirmed pickup window and escalation timing.
- Data retention and backup objectives.
- Customer validation, willingness to pay, and operational success thresholds.


15. PHASE 4 OUTCOME
========================================


Phase 4 establishes the technical direction for Dispatch: a conventional client-server application, PostgreSQL as the system of record, deterministic domain rules, four separate status dimensions, auditable operational history, and server-enforced organization isolation.

The next step is not to add AI or more infrastructure. It is to implement and verify the core workflow end to end, with reliable persistence and security, while preserving the Phase 3 experience as the product reference.
