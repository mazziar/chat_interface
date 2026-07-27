# Doodle Chat Interface

A sample real-time-style chat app built with Next.js, MUI, and Redux Toolkit Query.

## Features

- Enter a name (or generate a random guest name) to join the chat — no real auth backend, just a local session token.
- Send and receive messages against a REST API (`/api/v1/messages`).
- Infinite scroll in both directions: older messages load when you scroll to the top, newer ones load/refresh at the bottom.
- Scroll position is preserved when older messages are prepended, and the view auto-scrolls to the bottom on new messages.
- Light/dark theme toggle, persisted to `localStorage`.
- Logout clears the local session and returns to the name screen.

## Getting started

### Prerequisites

- Node.js 20+
- pnpm

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy the example environment file and adjust it if needed:

   ```bash
   cp .env.example .env
   ```

3. Run the dev server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable                    | Description                                      | Example                 |
| ---------------------------- | ------------------------------------------------- | ------------------------ |
| `NEXT_PUBLIC_API_BASE_URL`   | Base URL of the messages API consumed by the app  | `http://localhost:3000` |

## Scripts

| Command       | Description                  |
| ------------- | ----------------------------- |
| `pnpm dev`    | Start the Next.js dev server  |
| `pnpm build`  | Build for production          |
| `pnpm start`  | Run the production build      |

## Project structure

```
app/                  Next.js app router routes (/ and /chat)
core/                 Redux store, slices, RTK Query API services, shared hooks
theme/                MUI theme setup (palette, typography, shadows, dark mode)
ui/
  layout/             App shell: header, main layout, chat layout, message form
  pages/
    main/             Name entry / landing page
    chat/             Chat page, message list, and its scroll/observer hooks
```

## Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [MUI](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + RTK Query
- [date-fns](https://date-fns.org/)
