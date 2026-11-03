# Dispatch Local Ecosystem — Browser Prototype

**Main file:** `index.html`  
**Type:** Standalone HTML/CSS/JavaScript prototype  
**Purpose:** Explore Dispatch pickup-reliability workflows without a backend or database.

## How to run

1. Extract the prototype ZIP.
2. Open `index.html` in Chrome or Microsoft Edge.

Alternatively, open the folder in VS Code and use the Live Server extension to serve `index.html`.

**No Node.js, npm install, or PostgreSQL is required.**

## Demo accounts

| Portal | Email | Password |
|---|---|---|
| Platform Admin | `admin@dispatch.local` | `Admin@Dispatch18` |
| Business Portal — Owner | `owner@dispatch.local` | `Factory@Dispatch18` |
| Business Portal — Operations | `ops@dispatch.local` | `Ops@Dispatch18` |
| Transporter Portal | `transporter@dispatch.local` | `Transport@Dispatch18` |

These credentials are for the local demo only.

## What to explore

- Platform Admin: demo organizations, users, transporters, pickups, activity, and local data export/import.
- Business Portal: create and monitor pickups, assign transporters, manage recovery, and review outcomes.
- Transporter Portal: view assigned pickups, respond to commitments, and record operational updates.
- Explore the pickup lifecycle: `CREATE → CONFIRM → MONITOR → DETECT → RECOVER → RESOLVE → MEASURE`.

## Data storage and limitations

The prototype stores data in browser `localStorage`. Data is local to the browser profile and does not synchronize across devices or users. Browser storage can be edited or deleted.

Demo login and role checks happen in browser code; they are not a security boundary. Do not enter real customer data, sensitive information, or production passwords. This is a prototype, not a production application.

## Suggested folder layout

```text
dispatch-local-ecosystem/
├── index.html
└── README.md
```
