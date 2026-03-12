# UsHQ

A shared life dashboard for couples.
UsHQ brings together expenses, plans, tasks, and ideas into one simple place so both partners stay aligned and organized.

This project is designed as a lightweight **Life Operating System for Two**.

---

## Overview

UsHQ is a personal dashboard that helps couples manage everyday life together.

Instead of juggling multiple apps for finances, travel planning, task management, and saved ideas, UsHQ centralizes everything in a single interface.

The goal of V1 is simplicity: provide the most useful shared tools without unnecessary complexity.

---

## Core Features (V1.0.0)

### Expense Tracking

* Add and categorize expenses
* Monthly spending chart
* Category breakdown
* Recent transaction list

### Shared Todo Board

* Manage tasks together
* Status columns:

  * Todo
  * Doing
  * Done
* Assign tasks and due dates

### Shared Calendar

* Google Calendar integration
* Upcoming events
* Important dates and reminders

### Travel Planner

* Plan trips together
* Track travel dates and budgets
* Add notes and checklists

### Saved Links Library

Store useful links from:

* Instagram
* X (Twitter)
* Pinterest
* YouTube
* Articles and blogs

Organize links into categories for easy access.

### Dashboard Widgets

* Weather information
* Savings tips
* Quick daily overview

---

## Dashboard Layout

The dashboard is organized into three primary sections for quick visibility.

Left Panel

* Calendar
* Todo board

Center Panel

* Expense chart
* Recent expenses

Right Panel

* Travel plans
* Saved links

Bottom Widgets

* Weather
* Savings tips
* Daily summary

---

## Tech Stack

Frontend

* Next.js
* TailwindCSS
* ShadCN UI

Charts

* Recharts

Backend / Database

* Supabase

Authentication

* Google OAuth via Supabase

Hosting

* Vercel

---

## Project Structure

```
app
 ├ dashboard
 │ ├ page.tsx
 │ ├ expenses
 │ ├ todos
 │ ├ travel
 │ └ links
components
 ├ ExpenseChart
 ├ TodoBoard
 ├ TravelCards
 └ LinkLibrary
lib
 └ supabase.ts
```

---

## Database Schema

### Users

| Field      | Type      |
| ---------- | --------- |
| id         | uuid      |
| name       | text      |
| email      | text      |
| created_at | timestamp |

---

### Expenses

| Field      | Type   |
| ---------- | ------ |
| id         | uuid   |
| amount     | number |
| category   | text   |
| date       | date   |
| notes      | text   |
| created_by | uuid   |

---

### Todos

| Field       | Type      |
| ----------- | --------- |
| id          | uuid      |
| title       | text      |
| status      | text      |
| assigned_to | uuid      |
| due_date    | date      |
| created_at  | timestamp |

---

### Travel Plans

| Field       | Type   |
| ----------- | ------ |
| id          | uuid   |
| destination | text   |
| start_date  | date   |
| end_date    | date   |
| budget      | number |
| notes       | text   |

---

### Saved Links

| Field    | Type |
| -------- | ---- |
| id       | uuid |
| url      | text |
| title    | text |
| category | text |
| notes    | text |

---

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/yourusername/ushq.git
cd ushq
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file.

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### 4. Run the Development Server

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Deployment

The easiest way to deploy is using **Vercel**.

```
vercel
```

Add your environment variables in the Vercel dashboard.

---

## Future Roadmap

### V1.1

* Budget alerts
* AI savings suggestions
* Link previews

### V1.2

* Habit tracker
* Meal planner
* Subscription tracking

### V2

* AI insights for spending and planning
* Memory timeline for shared moments
* Mobile app

---

## Philosophy

UsHQ is designed to be a calm and useful dashboard for everyday life.

The goal is not to track everything, but to provide a clear shared view of the things that matter most.

---

## License

Private project for personal use.
