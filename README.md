# Clone GPT Mockup

A ChatGPT-style web app built with Express, TypeScript, EJS, HTMX, and Tailwind CSS.

## What it includes

- Node.js server with Express + TypeScript
- SPA-like interface inspired by ChatGPT
- Simple local chat with mock/echo replies
- Partial updates via HTMX without full page reloads
- Componentized views with EJS partials
- Vitest-based tests
- ESLint and a clean project structure
- Dockerfile and docker-compose

## Requirements

- Node.js 20+ recommended
- npm
- Docker is optional if you want to run in a container

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

This starts the Express server via `ts-node`.

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

Generates `dist/` with the compiled server.

## Production

```bash
npm start
```

## Tests

```bash
npm test
```

## Lint

```bash
npm run lint
```

## Docker

```bash
docker compose up --build
```

## Structure

```text
src/
  app.ts
  server.ts
  chat/
  styles/
  views/
tests/
public/
dist/
```

## How the chat works

- The form sends a message to `/chat`
- The server adds the user message to the in-memory history
- The server generates a mock echo response
- The route returns only the messages HTML partial
- HTMX swaps the message pane content without reloading the page

## Suggested next steps

- Persist messages in a database
- Replace the mock with a real LLM integration
- Add authentication and multiple conversations
