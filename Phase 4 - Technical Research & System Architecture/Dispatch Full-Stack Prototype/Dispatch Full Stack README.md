# Dispatch — Full-Stack Prototype

**Frontend:** `public/index.html`  
**Backend entry point:** `src/server.js`  
**Database:** PostgreSQL  

> **Security warning:** This is a first-pass persistence bridge, not a production-secure multi-tenant application. Use only locally with dummy data. Do not expose it to the public internet.

## 1. Requirements

- Windows 10/11
- Node.js 20+
- PostgreSQL installed and running
- PostgreSQL database credentials

Check Node.js and npm in the VS Code terminal:

```powershell
node -v
npm -v
```

## 2. Configure PostgreSQL

Use pgAdmin or PostgreSQL SQL Shell (`psql`) to create a local database and user, or use an existing database/user with permission to create tables.

Example SQL for a new local development setup (choose your own password):

```sql
CREATE USER dispatch WITH PASSWORD 'CHOOSE_A_LOCAL_PASSWORD';
CREATE DATABASE dispatch OWNER dispatch;
```

Run as a PostgreSQL administrator. If the user or database already exists, verify its credentials and permissions instead of creating duplicates.

## 3. Create and edit `.env`

Open PowerShell in the folder that contains `package.json` and run:

```powershell
Copy-Item .env.example .env
notepad .env
```

Set the values to match your PostgreSQL setup:

```env
PORT=4000
DATABASE_URL=postgres://dispatch:YOUR_URL_ENCODED_PASSWORD@localhost:5432/dispatch
```

Replace `YOUR_URL_ENCODED_PASSWORD` with the actual password. Do not leave the placeholder in place.

### Passwords containing special characters

Reserved characters in a password must be percent-encoded when placed in a URL. For example:

- `@` becomes `%40`
- `:` becomes `%3A`
- `/` becomes `%2F`
- `%` becomes `%25`

Encode only the password part, not the whole connection string. Keep `.env` private and do not commit it to Git.

## 4. Install and run

In PowerShell, from the project folder:

```powershell
npm install
npm start
```

Keep the terminal open while using the app. The server should run on port `4000`.

Open these URLs in your browser:

- App: `http://localhost:4000`
- Backend/database health check: `http://localhost:4000/api/health`

The server attempts to create the `dispatch_app_state` table automatically. The PostgreSQL user must have permission to create tables in the selected database.

If your project folder is elsewhere, first use `cd` to enter that folder.

## 5. How to use the app

1. Start PostgreSQL.
2. Run `npm start` from the project folder.
3. Open `http://localhost:4000`.
4. Use the prototype landing page and portal workflows.
5. Try demo pickup creation, commitment updates, recovery, and reporting.
6. Keep using the same local server URL while testing persistence.

The backend stores one shared application-state document in PostgreSQL. The frontend also retains a browser `localStorage` fallback. This is not yet a normalized relational data model.

Stop the server with `Ctrl+C`.

## 6. Troubleshooting

### `client password must be a string`

Check that:

- `.env` is in the project root beside `package.json`.
- The variable is named exactly `DATABASE_URL`.
- The URL contains a username and password.
- The password is URL-encoded if it contains reserved characters.
- `src/server.js` loads `dotenv` before reading environment variables.
- You restarted the server after changing `.env`.

Do not paste database passwords into screenshots or public repositories.

### `ECONNREFUSED`

Confirm PostgreSQL is running and the host/port in `DATABASE_URL` are correct. The default local PostgreSQL port is commonly `5432`.

### `password authentication failed`

Verify the database username and password in pgAdmin or `psql`, then update `.env`.

### `database "dispatch" does not exist`

Create the database or change the database name in `DATABASE_URL` to an existing one.

### Port 4000 is already in use

Change `PORT` in `.env` to an available port, restart the server, and open the matching `localhost` URL.

### Data does not persist

Open `/api/health`, check the terminal for database errors, and confirm the configured user has the required database permissions.

## 7. Prototype API endpoints

- `GET /api/health` — backend/database health.
- `GET /api/state` — read the saved application-state document.
- `PUT /api/state` — write the application-state document.

These are prototype endpoints. They are not the full resource-based `/api/v1` endpoints described in the Phase 4 architecture documentation.

## 8. Known limitations — read before use

This build does **not** yet implement production-grade:

- Server-side authentication.
- Server-enforced role permissions.
- Organization/tenant-level data isolation.
- Separate relational tables for pickups, transporters, exceptions, and recovery.
- Full domain validation and state-transition enforcement.
- Complete audit-safe transactions.
- CSRF protection, rate limiting, or comprehensive automated tests.

The original demo login/role checks remain client-side. The state API exposes the entire application-state document without the intended production authorization model. Use only for local development with dummy data.

Before production, implement server-side authentication and authorization, tenant-scoped resource APIs, reviewed database schema/migrations, transactional audit history, input validation, appropriate CSRF/rate limiting controls, automated tests, monitoring, and backup/restore procedures.

## 9. Project layout

```text
dispatch-fullstack-same-to-same/
├── public/
│   └── index.html
├── src/
│   └── server.js
├── .env.example
├── .env                 # local only; never commit
├── package.json
└── README.md
```

Product workflow: `CREATE → CONFIRM → MONITOR → DETECT → RECOVER → RESOLVE → MEASURE`
