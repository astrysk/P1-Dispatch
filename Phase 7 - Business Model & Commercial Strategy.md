# Dispatch — Phase 7: Business Model & Commercial Strategy

**Status:** Commercial model and positioning defined at strategy level; pricing, market validation, and unit economics require customer and operating data before final approval.  
**Baseline:** Dispatch Full-Stack Prototype — Phase 6 Core Validation Complete.  
**Reference:** Phase 6 Testing, Validation & Quality Assurance; Phase 5 Engineering & Implementation; Phase 3 Product Strategy & Requirements; Dispatch pickup-reliability problem definition.

## Phase 7 objective

Define how Dispatch creates commercial value for small-scale manufacturers, how that value is delivered, who pays for it, and what business model can support long-term operations. This phase establishes the target customer and buyer, market category, positioning, competitive alternatives, pricing hypotheses, cost structure, unit-economic framework, and major commercial risks.

The central commercial hypothesis is that manufacturers will pay for greater reliability and visibility in outbound pickup operations when the cost of missed pickups, delayed dispatches, lost orders, and manual coordination exceeds the cost of using Dispatch. This hypothesis must be validated with actual customers before pricing or revenue projections are treated as established.

---

## 7.1 Business model

### 7.1.1 Business model overview

Dispatch is positioned as a B2B pickup-reliability and coordination platform for small-scale manufacturers. It helps businesses create pickup requests, obtain transporter commitments, monitor pickup progress, identify operational risk, coordinate recovery, and measure pickup outcomes.

The proposed primary model is **manufacturer-paid SaaS**. The manufacturer is the primary customer and paying account. Transporters participate in the workflow to receive, confirm, reject, and update pickup commitments. Keeping basic transporter participation free during initial adoption is the recommended starting hypothesis because transporter participation increases the value of the network for paying manufacturers.

Dispatch should initially monetize the operational coordination and visibility layer, not the movement of goods. It is not positioned as a freight marketplace, transporter, fleet operator, or full transportation management system.

### 7.1.2 Value creation

| Stakeholder | Value created by Dispatch |
|---|---|
| Small-scale manufacturer | Better pickup visibility, fewer coordination gaps, earlier identification of pickup risk, structured recovery, and a record of transporter performance |
| Operations / dispatch team | One place to create and monitor pickup requests, track commitments, manage exceptions, and review outcomes |
| Transporter | Clearer pickup information, structured commitment handling, and a consistent channel for operational updates |
| Business owner / management | Greater visibility into pickup reliability, recurring failures, and the operational impact of logistics coordination |
| Platform operator | Recurring software revenue from business accounts, subject to adoption, retention, and support costs |

### 7.1.3 Value delivery

Dispatch delivers value through the following operating workflow:

`CREATE → CONFIRM → MONITOR → DETECT → RECOVER → RESOLVE → MEASURE`

The platform provides a shared operational record across the business and transporter workflows. It helps replace fragmented coordination across calls, messages, spreadsheets, and individual follow-ups with a structured process and visible status history.

### 7.1.4 Value capture

The initial revenue hypothesis is a recurring subscription paid by the manufacturer. Pricing may be organized by business account, operating location, or monthly pickup volume once customer usage patterns are understood.

Potential future revenue components include:

- Core monthly or annual SaaS subscription.
- Higher subscription tiers for multiple locations, teams, reporting, and advanced operational controls.
- Enterprise plans for larger manufacturers with custom workflows, integrations, support, or reporting requirements.
- Optional onboarding or implementation services where deployment complexity justifies a separate fee.

These are proposed monetization options, not currently confirmed revenue streams. Dispatch should avoid transaction commissions or per-pickup fees until their effect on adoption, usage, and customer incentives is understood.

### 7.1.5 Primary customer and ecosystem roles

| Role | Proposed definition |
|---|---|
| Primary customer | Small-scale manufacturer coordinating regular outbound pickups |
| Paying account | Manufacturer or manufacturing business entity |
| Daily users | Dispatch coordinators, operations executives, warehouse staff, and business owners |
| Workflow participant | Transporter or local logistics provider handling assigned pickup requests |
| Economic buyer | Business owner, founder, head of operations, or supply-chain decision-maker |
| Platform operator | Dispatch product and operations team |

### 7.1.6 Operating model

Dispatch's operating model should remain software-led. The platform provides the workflow, records, permissions, and operational visibility. The manufacturer and transporter remain responsible for arranging and executing the physical movement of goods.

The initial operating model should include:

- Product development and maintenance.
- Cloud hosting, database, storage, and monitoring.
- Customer onboarding and account support.
- Transporter onboarding assistance where required for customer activation.
- Product education and operational documentation.
- Billing, subscription management, and customer account administration.

Dispatch should not assume responsibility for owning vehicles, guaranteeing transporter availability, physically handling shipments, or underwriting cargo loss unless a future business decision explicitly adds those services.

### 7.1.7 Business model sustainability

The model is sustainable only if recurring customer revenue exceeds the combined cost of acquiring, onboarding, serving, and retaining customers, including infrastructure and support.

The most important early sustainability conditions are:

1. Manufacturers experience measurable operational value after adoption.
2. The product becomes part of the recurring pickup coordination workflow.
3. Transporters can participate without excessive friction.
4. Customer support and onboarding do not require a permanently high-touch service model.
5. Hosting and data costs remain proportionate to customer usage.
6. Customer retention and expansion support recurring revenue.

**Business model decision:** Proceed with manufacturer-paid B2B SaaS as the primary commercial hypothesis. Keep transporter participation free for the initial adoption stage, subject to validation.

---

## 7.2 Customer & buyer definition

### 7.2.1 Ideal customer profile

The initial ideal customer profile is a small-scale manufacturer that regularly dispatches finished goods and depends on external local transporters or logistics vendors for outbound pickups.

The strongest early-fit customers are expected to have:

- Recurring outbound pickup requirements.
- Dependence on multiple local transporters or vendors.
- Manual coordination through phone calls, messaging applications, or spreadsheets.
- Limited centralized visibility into pickup commitments and outcomes.
- Operational consequences when pickups are delayed or missed.
- An owner or operations lead who can authorize adoption.

These characteristics are an initial targeting hypothesis. The minimum viable customer profile should be refined through interviews and observed usage.

### 7.2.2 Customer segmentation

| Segment | Characteristics | Initial priority |
|---|---|---|
| Small manufacturers with recurring dispatches | Regular outbound pickups and lean operations teams | Primary |
| Manufacturers using multiple local transporters | Coordination spread across several vendors | Primary |
| Manufacturers with frequent pickup delays or failures | Visible operational pain and recovery effort | Primary |
| Very low-frequency shippers | Limited recurring usage and potentially low willingness to pay | Secondary |
| Large enterprises with complex logistics systems | More integrations, procurement, security, and customization requirements | Later-stage |
| Transporters seeking a standalone fleet or freight platform | Different primary problem and product expectation | Not the initial customer segment |

### 7.2.3 User, buyer, and stakeholder map

| Stakeholder | Responsibility | What matters to them |
|---|---|---|
| Business owner / founder | Approves purchase and budget | Avoiding lost orders, operational disruption, and unnecessary overhead |
| Head of operations | Owns operating performance and may sponsor adoption | Pickup reliability, visibility, exception handling, and accountability |
| Dispatch coordinator | Uses the product regularly | Fast request creation, clear statuses, fewer follow-ups, and simple recovery workflows |
| Warehouse / dispatch staff | Provides pickup readiness and operational updates | Accurate pickup details and clear next actions |
| Transporter owner / manager | Coordinates transporter-side participation | Clear requests, manageable commitments, and reduced communication ambiguity |
| Finance / accounts | Reviews and processes payment | Clear pricing, predictable billing, and business justification |
| IT / technology stakeholder | Reviews technical fit where applicable | Security, access control, reliability, and integration requirements |

### 7.2.4 Buying process hypothesis

The expected initial buying process is founder-led or operations-led rather than a long enterprise procurement process.

1. A business owner or operations lead identifies recurring pickup coordination problems.
2. Dispatch demonstrates the current workflow and how it would be managed on the platform.
3. The customer evaluates whether the product addresses a real operational cost or reliability issue.
4. A small team or location begins using Dispatch.
5. The customer reviews usage, pickup visibility, and operational outcomes.
6. The business decides whether to continue, expand users or locations, or discontinue.

This buying journey must be verified through customer discovery. Actual procurement steps may differ by company size and industry.

### 7.2.5 Buyer qualification criteria

A prospect should be considered a strong commercial fit when the following conditions are present:

- Regular outbound pickup activity.
- A clearly identified person responsible for dispatch coordination.
- A recurring problem with transporter confirmation, pickup visibility, or recovery.
- A measurable operational consequence of failed or delayed pickups.
- Access to the relevant business owner or budget decision-maker.
- Willingness to run a pilot using real pickup workflows.

### 7.2.6 Customer discovery questions

The following questions should be used to validate the customer and buyer definition:

- How many outbound pickups does the business coordinate in a typical week or month?
- How many transporters or logistics vendors are used regularly?
- How are pickup requests created and shared today?
- How does the business know that a transporter has committed to a pickup?
- How frequently are pickups delayed, missed, or rescheduled?
- What happens operationally when a transporter does not arrive?
- How much staff time is spent following up and arranging recovery?
- Who owns the pickup reliability problem?
- Who can approve software expenditure for this workflow?
- What evidence would justify paying for a dedicated product?

**Customer definition decision:** Prioritize manufacturers with recurring outbound pickups, fragmented transporter coordination, and a clear operational owner. Treat the economic buyer as the owner or operations decision-maker until discovery identifies a more specific purchasing structure.

---

## 7.3 Market positioning

### 7.3.1 Product category

Dispatch should be positioned as a **pickup-reliability and coordination platform for manufacturers**.

The category emphasizes the operational outcome Dispatch is designed to improve: reliable, visible, and recoverable outbound pickups.

Dispatch is not initially positioned as:

- A freight or transporter marketplace.
- A vehicle booking platform.
- A fleet ownership or fleet management business.
- A complete transportation management system (TMS).
- A GPS tracking product.
- A general-purpose ERP or warehouse management system.
- A logistics company responsible for physically moving goods.

### 7.3.2 Target market

The initial target market is small-scale manufacturers in India that depend on local logistics providers and transport vendors for outbound pickups.

The initial market should be approached through a focused customer segment rather than a broad claim covering every shipper, transporter, or logistics business.

The first commercial focus should be on businesses where pickup reliability is a frequent operational problem and where a lightweight coordination platform can be adopted without replacing the customer's existing transport relationships.

### 7.3.3 Primary value proposition

**Dispatch helps manufacturers make outbound pickups more reliable by turning transporter commitments, pickup monitoring, and failure recovery into one structured workflow.**

Supporting value propositions:

- Know whether a transporter has committed to a pickup.
- See pickup progress in a shared operational workflow.
- Identify delays and pickup risks earlier.
- Coordinate recovery when the original pickup fails.
- Preserve a history of commitments, failures, and final outcomes.
- Review transporter and pickup performance using structured operational records.

### 7.3.4 Positioning statement

For small-scale manufacturers that depend on local transporters for outbound dispatch, Dispatch is a pickup-reliability and coordination platform that helps teams confirm, monitor, recover, and measure pickups. Unlike informal coordination through calls, messages, and spreadsheets, Dispatch creates a shared and structured record of pickup commitments and outcomes without requiring manufacturers to replace their existing transporters or adopt a full transportation management system.

### 7.3.5 Differentiation

| Differentiation dimension | Dispatch positioning |
|---|---|
| Primary problem | Pickup reliability and coordination failure |
| Primary user | Manufacturer's dispatch and operations team |
| Workflow focus | Commitment, monitoring, failure detection, recovery, and outcome measurement |
| Transporter relationship | Works with the manufacturer's existing transporter network |
| Operational visibility | Shared, structured pickup records and status history |
| Recovery | Treats failed pickup recovery as a core workflow |
| Product scope | Focused operational layer rather than a full logistics replacement |

### 7.3.6 Reasons to choose Dispatch

A manufacturer should choose Dispatch when it needs to:

1. Reduce dependence on scattered calls and messages for pickup coordination.
2. Make transporter commitments visible and traceable.
3. Identify pickup risk before it becomes an unmanaged failure.
4. Coordinate recovery without losing the original pickup history.
5. Understand recurring pickup failures and transporter reliability.
6. Improve operational control without replacing its existing transport vendors.

These are intended reasons to choose the product. Their commercial importance and measurable impact must be established through pilots and customer evidence.

### 7.3.7 Positioning boundaries

Dispatch should not promise guaranteed pickup completion, guaranteed transporter availability, guaranteed delivery, or elimination of logistics failures. The product improves coordination, visibility, traceability, and recovery capability; the physical pickup remains dependent on the manufacturer and transporter.

**Positioning decision:** Lead with pickup reliability for manufacturers. Describe the product through its operational workflow and measurable outcomes, not as a generic logistics platform.

---

## 7.4 Competitive positioning

### 7.4.1 Competitive landscape

Dispatch competes with the alternatives customers currently use to coordinate pickups, as well as software products that manage broader logistics operations.

The relevant competitive set should initially be understood by category:

1. **Manual coordination:** Phone calls, messaging applications, spreadsheets, and personal follow-ups.
2. **Transporter and freight marketplaces:** Platforms primarily designed to discover, book, or procure transport capacity.
3. **Transportation management systems:** Software designed to plan, execute, monitor, or optimize broader transportation operations.
4. **ERP and logistics modules:** Existing business systems that may include dispatch, shipment, or logistics functionality.
5. **Custom internal tools:** Spreadsheets, scripts, and company-specific workflows built around existing operations.

Named vendor comparisons should be added only after selecting products that are actively used by the target customer segment and verifying their current capabilities, pricing, and target audience.

### 7.4.2 Alternative comparison

| Alternative | Primary strength | Potential limitation for the target problem | Dispatch position |
|---|---|---|---|
| Phone calls and messaging applications | Familiar, immediate, and low incremental cost | Commitments and status updates can become fragmented; limited structured history and reporting | Converts coordination into a shared workflow |
| Spreadsheets | Flexible and inexpensive | Manual updates, follow-up dependency, and limited real-time operational coordination | Provides structured pickup records and workflow states |
| Freight / transporter marketplaces | Transporter discovery or capacity access | May focus on sourcing or booking rather than ongoing pickup reliability and recovery | Works with existing transporter relationships rather than requiring marketplace replacement |
| Transportation management systems | Broad transport planning and execution capabilities | May be broader or more complex than the initial needs of a small manufacturer; fit and affordability require customer-level validation | Focuses on the pickup-reliability workflow |
| ERP / logistics modules | Integration with broader business operations | Capabilities and implementation effort vary by system | Offers a focused operational layer where existing tools do not adequately solve the problem |
| Custom internal tools | Can match a company's specific process | Requires internal ownership, maintenance, and consistent adoption | Offers a maintained product workflow rather than a customer-built tool |

This is a category-level strategic comparison, not a verified feature-by-feature comparison of named competitors.

### 7.4.3 Competitive dimensions

Future competitor research should compare products using the following criteria:

| Criterion | What to evaluate |
|---|---|
| Pickup commitment | Can the customer record and verify transporter acceptance? |
| Pickup monitoring | Can users view the operational status of a pickup? |
| Failure detection | Does the product surface delays, risk, or missed commitments? |
| Recovery coordination | Can users coordinate an alternative after a failed pickup? |
| History and traceability | Are original commitments, failures, and outcomes retained? |
| Transporter participation | Can existing transporters participate without replacing the customer's network? |
| Ease of adoption | Can a small operations team adopt the product without extensive implementation? |
| Reporting | Can the customer review pickup outcomes and transporter performance? |
| Integration | Does the product connect to systems the customer already uses? |
| Pricing | Is the pricing suitable for the target customer's operating scale and budget? |
| Reliability and support | What service reliability, support, and operational commitments are provided? |

### 7.4.4 Competitive advantage hypothesis

Dispatch's potential advantage is its focused treatment of pickup commitment and recovery as first-class operational workflows.

The product does not need to replace the customer's transporter network or solve every logistics problem. Its potential value lies in making the existing pickup process more visible, structured, and accountable.

This advantage is a positioning hypothesis. It becomes defensible only when customers consistently use the workflow and the product demonstrates better operational outcomes than their existing alternatives.

### 7.4.5 Competitive research gaps

The following evidence is required before making strong competitive claims:

- Identify the software and manual processes used by target manufacturers today.
- Identify the most frequently evaluated alternatives.
- Verify competitor product capabilities using current product documentation or demonstrations.
- Collect current public pricing or customer-quoted pricing where available.
- Compare onboarding effort and implementation requirements.
- Understand why customers adopt, reject, or discontinue competing products.
- Test whether pickup recovery is genuinely underserved by the alternatives customers use.

**Competitive positioning decision:** Compete first against fragmented manual coordination and process gaps. Treat marketplaces, TMS products, and ERP modules as adjacent alternatives whose actual overlap must be verified customer by customer.

---

## 7.5 Pricing strategy

### 7.5.1 Pricing objective

Dispatch pricing should reflect the operational value delivered to the manufacturer while remaining simple enough for a small business to understand, trial, and approve.

The initial pricing model should avoid complexity that makes adoption difficult or discourages users from recording pickups and failures accurately.

### 7.5.2 Recommended initial pricing model

The recommended starting hypothesis is a recurring subscription paid by the manufacturer.

Potential pricing dimensions:

- Monthly pickup volume.
- Number of operating locations.
- Number of internal users, where user count materially affects value or cost.
- Access to advanced reporting, administration, and integrations.
- Support and onboarding requirements.

The final pricing metric should be selected after observing which dimension best correlates with customer value, willingness to pay, and service cost.

### 7.5.3 Proposed packaging structure

The following is a packaging hypothesis, not an approved price list.

| Package | Intended customer | Potential inclusions | Commercial purpose |
|---|---|---|---|
| Starter | Small manufacturer adopting structured pickup coordination for the first time | Core pickup creation, transporter commitment, monitoring, and basic history | Reduce adoption friction and validate recurring use |
| Growth | Manufacturer with regular pickups, multiple users, or a larger transporter network | Starter capabilities plus recovery workflows, expanded reporting, and operational visibility | Monetize broader day-to-day operational value |
| Business / Enterprise | Manufacturer with multiple locations, higher volume, or specific operational requirements | Growth capabilities plus advanced administration, integrations, tailored onboarding, and enhanced support | Serve higher-complexity accounts with higher delivery requirements |

Package boundaries must be finalized only after validating feature demand, willingness to pay, and cost-to-serve.

### 7.5.4 Transporter pricing hypothesis

Basic transporter participation should initially be free.

This reduces friction in inviting existing transporters and helps manufacturers activate the complete pickup workflow. Charging transporters at the beginning could slow participation and weaken the value of the manufacturer subscription.

Paid transporter-side capabilities may be evaluated later only if transporters demonstrate independent willingness to pay for distinct value.

### 7.5.5 Pilot and onboarding pricing

A controlled pilot may be offered to qualified manufacturers to validate usage and commercial value.

Pilot terms should define:

- Pilot duration.
- Number of locations and users.
- Expected pickup volume.
- Workflows included.
- Customer responsibilities.
- Support provided by Dispatch.
- Success metrics.
- Conversion terms after the pilot.

A pilot should not be treated as proof of willingness to pay unless the customer makes a paid commitment or accepts a clearly defined conversion proposal.

### 7.5.6 Pricing principles

- Keep the initial pricing model easy to explain.
- Align price with customer value rather than arbitrary feature counts.
- Avoid charging per recovery event in a way that discourages accurate failure reporting.
- Avoid transaction commissions until Dispatch's role in the underlying transport transaction is clearly defined.
- Make transporter participation easy during the initial adoption stage.
- Offer annual billing only when customers have demonstrated recurring value and trust.
- Avoid custom enterprise pricing before the product has evidence of enterprise demand.

### 7.5.7 Pricing validation

Pricing should be validated through:

1. Customer interviews about the financial and operational impact of pickup failures.
2. Review of current spending on coordination, dispatch staff time, and logistics alternatives.
3. Paid pilot offers rather than willingness-to-pay questions alone.
4. Conversion rate from pilot to paid subscription.
5. Renewal and retention behavior.
6. Expansion across additional users, locations, or pickup volume.

**Pricing decision:** Use manufacturer-paid recurring SaaS as the initial monetization hypothesis. Keep exact prices and package limits open until customer discovery and paid-pilot evidence are available.

---

## 7.6 Unit economics & cost analysis

### 7.6.1 Unit economics objective

Unit economics must establish whether Dispatch can acquire, onboard, serve, and retain a manufacturer at a cost that is sustainably lower than the revenue generated by that account.

No reliable numeric unit economics can be stated until actual pricing, acquisition spend, customer conversion, usage, support effort, and infrastructure costs are measured.

### 7.6.2 Revenue metrics

| Metric | Definition | Calculation |
|---|---|---|
| Monthly recurring revenue (MRR) | Recurring subscription revenue in a month | Sum of active monthly subscription value |
| Annual recurring revenue (ARR) | Annualized recurring subscription revenue | MRR × 12, where revenue is recurring and normalized monthly |
| Average revenue per account (ARPA) | Average recurring revenue per paying manufacturer account | MRR ÷ active paying accounts |
| Expansion revenue | Additional recurring revenue from existing accounts | Increased subscription value from upgrades, locations, or volume tiers |
| Gross revenue retention | Recurring revenue retained before expansion | Opening recurring revenue less churn and contraction, divided by opening recurring revenue |
| Net revenue retention | Recurring revenue retained including expansion | Opening recurring revenue less churn and contraction plus expansion, divided by opening recurring revenue |

### 7.6.3 Customer acquisition metrics

| Metric | Definition | Calculation |
|---|---|---|
| Customer acquisition cost (CAC) | Cost to acquire one paying manufacturer account | Sales and marketing acquisition costs ÷ new paying accounts |
| Lead-to-customer conversion | Share of qualified leads becoming paying customers | New paying customers ÷ qualified leads × 100 |
| Pilot conversion rate | Share of completed pilots converting to paid accounts | Paid conversions ÷ completed pilots × 100 |
| Sales cycle | Time from qualified opportunity to paid conversion | Average elapsed days per converted account |
| CAC payback period | Time required for gross profit to recover CAC | CAC ÷ monthly gross profit per account |

Acquisition costs should include relevant sales labor, marketing spend, demonstrations, travel, commissions, and other direct acquisition expenses. The calculation method must remain consistent across reporting periods.

### 7.6.4 Cost-to-serve analysis

Dispatch's cost structure is expected to include the following categories:

| Cost category | Cost components | Cost behavior |
|---|---|---|
| Cloud infrastructure | Application hosting, compute, database, storage, backups, and network usage | Fixed baseline plus usage-driven costs |
| Third-party services | Authentication, email, messaging, monitoring, analytics, and other external services | Subscription or usage-based |
| Customer onboarding | Setup, training, data configuration, and initial support | Primarily variable by new account and complexity |
| Customer support | Issue resolution, user assistance, and operational support | Driven by account count, usage, and support intensity |
| Product engineering | Development, maintenance, testing, and technical operations | Primarily fixed team cost with scale-related changes |
| Sales and marketing | Prospecting, campaigns, demonstrations, and sales compensation | Acquisition-driven |
| Administration | Billing, legal, accounting, compliance, and general operations | Fixed or semi-variable |

### 7.6.5 Gross margin framework

Gross margin should be calculated using costs directly attributable to delivering the subscription service.

`Gross Profit = Subscription Revenue − Cost of Service Delivery`

`Gross Margin (%) = Gross Profit ÷ Subscription Revenue × 100`

The cost of service delivery should include attributable hosting, database, third-party usage, and direct customer support or service-delivery costs. The accounting treatment should be applied consistently.

### 7.6.6 Contribution margin framework

`Contribution Margin = Revenue − Variable Acquisition and Service Costs`

The business should separately track contribution after variable service costs and contribution after acquisition costs. This helps distinguish whether the product itself is economical to serve from whether the current go-to-market motion is economical.

### 7.6.7 Customer lifetime value

A reliable customer lifetime value (LTV) estimate requires observed retention and gross margin data.

A simplified subscription model may use:

`LTV = Average Monthly Revenue per Account × Gross Margin (%) × Expected Customer Lifetime in Months`

This estimate should not be used as a forecast until churn and retention can be measured from a meaningful customer cohort. Early LTV estimates based only on assumed customer lifetime are highly uncertain.

### 7.6.8 Break-even analysis

`Break-even Paying Accounts = Monthly Fixed Operating Costs ÷ Monthly Contribution per Paying Account`

The calculation requires actual monthly fixed costs, realized average subscription revenue, and variable cost per account.

### 7.6.9 Infrastructure cost drivers

The main infrastructure cost drivers to monitor include:

- Number of active manufacturer accounts.
- Number of users and transporter participants.
- Pickup records created and retained.
- Frequency of API requests and background processing.
- Database storage and query load.
- File or evidence storage, if introduced.
- Notification volume and third-party messaging charges.
- Monitoring, logging, backups, and data retention.

The current product should measure these costs before introducing usage limits or volume-based pricing.

### 7.6.10 Unit economics data requirements

| Data point | Why it is required | Current status |
|---|---|---|
| Actual subscription price | Establish revenue per account | Not established |
| New paying accounts | Measure customer acquisition | Requires commercial pilots |
| Sales and marketing spend | Calculate CAC | Requires operating data |
| Pilot conversion | Evaluate sales effectiveness | Requires pilot data |
| Monthly churn | Measure retention | Requires paid customer cohorts |
| Account-level usage | Understand value and cost drivers | Requires production usage data |
| Hosting and database cost | Measure infrastructure cost | Requires deployed usage data |
| Support hours per account | Measure service effort | Requires support tracking |
| Gross margin | Assess service sustainability | Requires revenue and cost data |
| Customer lifetime | Estimate LTV | Requires retention history |

**Unit economics decision:** Establish the measurement framework now, but do not publish CAC, LTV, payback, gross margin, or break-even claims until actual commercial and operating data is available.

---

## 7.7 Business risks & assumptions

### 7.7.1 Commercial assumptions

| Assumption | Why it matters | Validation method |
|---|---|---|
| Manufacturers experience meaningful pickup coordination pain | Determines whether the problem is worth paying to solve | Customer interviews and workflow observation |
| Pickup failures create measurable business impact | Supports willingness to pay | Quantify delays, staff time, rescheduling, and lost-order consequences |
| Manufacturers will adopt a dedicated coordination tool | Determines product adoption potential | Paid pilots using real pickup operations |
| Manufacturers are the appropriate paying customer | Determines the revenue model | Interview owners, operations leads, and budget holders |
| Transporters will participate in a shared workflow | Required for cross-party product value | Observe transporter invitation and response rates |
| Free transporter participation improves activation | Reduces network adoption friction | Compare participation and completion across pilot cohorts |
| Subscription pricing is acceptable | Determines recurring revenue viability | Paid offers, conversion, and renewal behavior |
| The product can be delivered with limited manual intervention | Determines service scalability | Track onboarding and support hours per account |

### 7.7.2 Adoption risks

**1. Existing behavior is difficult to change**

Manufacturers and transporters may prefer familiar calls and messaging applications. Dispatch must demonstrate a clear operational benefit without creating additional administrative work.

**2. Transporter participation is inconsistent**

The manufacturer may adopt Dispatch while transporters continue using existing communication channels. The product must make transporter participation straightforward and provide clear value to the participating party.

**3. Low-frequency usage**

Businesses with infrequent outbound pickups may not experience enough recurring value to justify a subscription.

**4. Incomplete operational updates**

If users do not update commitments or pickup outcomes, the platform's visibility and reporting value will decline.

### 7.7.3 Commercial risks

**1. Unproven willingness to pay**

Customers may acknowledge the problem but continue using existing tools rather than pay for a dedicated product.

**2. Unclear budget ownership**

Pickup reliability may be an operational problem without a clearly assigned software budget. The buyer and budget owner must be identified during discovery.

**3. Long or complex sales cycles**

Even small manufacturers may require owner approval, internal alignment, or demonstrations before adoption.

**4. Price sensitivity**

Small businesses may have limited software budgets and compare Dispatch against tools with low or no direct cost.

**5. Weak differentiation**

If customers believe existing messaging, spreadsheets, or logistics software already solve the problem adequately, conversion may be low.

### 7.7.4 Operational and product risks

**1. Dependence on third-party transporters**

Dispatch cannot directly control transporter availability or physical pickup execution under the proposed software-only model.

**2. Incorrect status information**

Incomplete or inaccurate updates can undermine trust in operational visibility and reporting.

**3. Recovery expectations**

Customers may assume Dispatch guarantees a replacement transporter. Product communication must distinguish recovery coordination from guaranteed transport capacity.

**4. Support intensity**

If each customer requires substantial manual coordination or transporter follow-up from the Dispatch team, service costs may increase faster than subscription revenue.

**5. Data and security expectations**

Business users may require stronger production controls, data handling assurances, and operational reliability before using Dispatch for critical workflows.

### 7.7.5 Financial and infrastructure risks

- Infrastructure costs may rise with data volume, notifications, storage, and usage.
- Low account revenue may not support high-touch onboarding or support.
- Long sales cycles may increase CAC and payback time.
- High customer churn may prevent recovery of acquisition costs.
- Custom integrations may create unplanned engineering and maintenance costs.
- Pricing based on the wrong metric may discourage product usage or fail to cover service costs.

### 7.7.6 Key dependencies

Commercial viability depends on:

- Access to manufacturers willing to participate in discovery and pilots.
- Transporter willingness to engage with the workflow.
- Reliable product operation in real customer environments.
- Clear ownership of pickup coordination within customer organizations.
- Measurable baseline data for pickup delays, failures, and recovery effort.
- A repeatable onboarding and support process.
- A pricing model aligned with customer value and cost-to-serve.

### 7.7.7 Risk mitigation priorities

| Risk | Mitigation |
|---|---|
| Low willingness to pay | Run paid pilots and test multiple pricing structures before scaling acquisition |
| Low transporter participation | Keep initial transporter participation free and simplify the commitment workflow |
| Resistance to new tools | Fit the product into the existing pickup process and minimize duplicate data entry |
| Unclear value | Establish baseline pickup metrics and compare them with pilot outcomes |
| High support cost | Track support time per account and standardize onboarding |
| Unproven retention | Measure repeat usage, renewal, and account activity by cohort |
| Uncontrolled infrastructure cost | Track cost per account and cost per pickup as usage grows |
| Overpromising recovery | Clearly communicate that Dispatch coordinates recovery but does not guarantee transporter capacity |

---

## Commercial validation plan

The following validation sequence is recommended before committing to a scaled go-to-market plan.

### Step 1 — Problem and customer validation

Interview manufacturers that regularly coordinate outbound pickups. Document their current workflow, frequency of pickup failures, operational consequences, existing tools, and buying authority.

### Step 2 — Baseline measurement

For pilot customers, record baseline measures such as pickup volume, confirmation rate, on-time pickup rate, delayed pickups, missed pickups, recovery time, manual follow-up effort, and unresolved outcomes. Definitions must be consistent before comparing results.

### Step 3 — Workflow pilot

Run Dispatch with a limited number of manufacturers and their existing transporters. Observe whether users create requests, confirm commitments, monitor progress, and record recovery outcomes as part of normal operations.

### Step 4 — Value measurement

Compare pilot results against the customer's baseline. Measure adoption, workflow completion, pickup visibility, recovery handling, and time spent coordinating pickups. Avoid attributing improvements to Dispatch without a defensible comparison.

### Step 5 — Paid conversion test

Offer a clearly defined paid subscription after the pilot. Record acceptance, objections, negotiated price, budget owner, and reasons for rejection.

### Step 6 — Unit economics measurement

Track acquisition spend, onboarding time, support hours, infrastructure usage, realized revenue, and retention. Use these observations to calculate account-level economics.

### Step 7 — Commercial model refinement

Refine customer segment, packaging, pricing metric, and sales process using actual pilot and paid-customer evidence.

---

## Phase 7 exit criteria

Phase 7 is complete at the strategy-definition level when:

- [x] A manufacturer-paid B2B SaaS model is defined as the primary commercial hypothesis.
- [x] Primary customer, daily users, economic buyer, and ecosystem stakeholders are identified.
- [x] The initial ideal customer profile is documented.
- [x] Product category and positioning statement are defined.
- [x] Primary value proposition and differentiation hypotheses are documented.
- [x] Relevant competitive alternative categories are identified.
- [x] Initial subscription and packaging hypotheses are documented.
- [x] Unit-economic metrics and cost categories are defined.
- [x] Commercial assumptions, risks, and dependencies are documented.
- [x] A commercial validation plan is established.

**Commercial validation still required:**

- [ ] Validate the ideal customer profile through manufacturer interviews.
- [ ] Confirm the economic buyer and budget owner.
- [ ] Validate willingness to pay through paid pilots.
- [ ] Establish baseline pickup and recovery metrics.
- [ ] Verify competitor capabilities and current pricing.
- [ ] Finalize pricing and package limits.
- [ ] Measure customer acquisition and onboarding costs.
- [ ] Measure infrastructure and support costs under real usage.
- [ ] Establish retention, churn, gross margin, CAC payback, and LTV from actual customer data.

The checked items represent strategy decisions and documented hypotheses. They do not imply that market demand, pricing, or commercial performance has already been validated.

---

## Phase 7 deliverables

| Deliverable | Description |
|---|---|
| Business model | Value creation, delivery, capture, customer roles, and operating model |
| Customer and buyer definition | Ideal customer profile, users, economic buyer, and stakeholders |
| Market positioning | Product category, target market, value proposition, differentiation, and positioning statement |
| Competitive positioning | Alternative categories, comparison criteria, and competitive hypotheses |
| Pricing strategy | Subscription model, proposed packages, transporter pricing hypothesis, and validation approach |
| Unit economics framework | Revenue, acquisition, retention, margin, cost-to-serve, and break-even metrics |
| Cost analysis | Infrastructure, support, engineering, onboarding, sales, and administration cost categories |
| Business risks and assumptions | Adoption, commercial, operational, financial, and technical dependencies |
| Commercial validation plan | Discovery, pilot, measurement, paid conversion, and economics validation sequence |

## Phase 7 outcome

Phase 7 defines the proposed commercial foundation for Dispatch. The product is positioned as a pickup-reliability and coordination platform for small-scale manufacturers, with a manufacturer-paid recurring SaaS model as the primary revenue hypothesis and free basic transporter participation as the initial network-adoption approach.

The phase identifies the customer, economic buyer, value proposition, competitive alternatives, packaging hypotheses, cost structure, unit-economic framework, and major risks. It also makes explicit which commercial decisions remain unvalidated.

**Phase 7 completion boundary:** The business model and commercial strategy are defined at the hypothesis and planning level. Market demand, willingness to pay, final pricing, competitive claims, and unit economics must be validated through customer discovery, real-world pilots, paid conversion, and measured operating data before commercial scalability can be claimed.
