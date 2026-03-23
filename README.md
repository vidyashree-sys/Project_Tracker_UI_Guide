# Multi-View Project Tracker UI

A frontend project management interface built using React and TypeScript that visualizes the same task dataset in three different views: **Kanban Board**, **List View**, and **Timeline/Gantt View**.

The application demonstrates advanced frontend engineering concepts including custom drag-and-drop, virtual scrolling for large datasets, URL-synchronized filters, and simulated real-time collaboration indicators.

---

## Live Demo

Live Deployment: project-tracker-ui-guide.vercel.app

Repository: [(Add your GitHub repository link here)](https://github.com/vidyashree-sys/Project_Tracker_UI_Guide.git)

---

## Tech Stack

* React
* TypeScript
* Vite
* CSS Modules

No UI component libraries, drag-and-drop libraries, or virtual scrolling libraries were used. All UI components and interactions were implemented manually.

---

## Features

### Kanban Board

* Four workflow columns: **To Do, In Progress, In Review, Done**
* Tasks displayed as cards inside columns
* Cards display:

  * Task title
  * Assignee avatar (initials-based)
  * Priority badge (color coded)
  * Due date with overdue highlighting
* Columns scroll independently when tasks overflow

---

### List View

* Tasks displayed in a flat sortable table
* Sorting supported for:

  * Title (A–Z)
  * Priority (Critical → Low)
  * Due date (earliest first)
* Inline status update using a dropdown
* **Virtual scrolling** implemented to support large datasets efficiently

---

### Timeline / Gantt View

* Tasks plotted along a horizontal monthly timeline
* Each task represented as a bar from start date to due date
* Bars color-coded by priority
* Current day displayed as a vertical marker
* Tasks without start date appear as single-day markers

---

## Custom Drag-and-Drop Implementation

Drag-and-drop was implemented from scratch using native pointer events rather than external libraries.

When a task card is dragged:

* The card follows the cursor with reduced opacity
* A placeholder element is inserted at the original position to prevent layout shift
* Valid drop columns highlight to indicate drop targets
* If the card is dropped outside a valid column, it smoothly returns to its original position

This approach ensures correct drag behavior while maintaining layout stability.

---

## Virtual Scrolling

The List View supports large datasets (500+ tasks) using a custom virtual scrolling implementation.

Instead of rendering all rows in the DOM, only the rows currently visible in the viewport plus a small buffer are rendered.

Spacer elements maintain the correct scroll height so that the scroll position remains accurate.
This significantly improves performance and prevents rendering slowdowns with large lists.

---

## State Management

Global state is managed using **React Context with useReducer**.

This approach was chosen because it provides centralized state management while remaining lightweight. It allows all three views (Kanban, List, and Timeline) to share the same dataset and remain synchronized without requiring additional libraries or repeated data fetching.

---

## Live Collaboration Indicators

A simulated collaboration system demonstrates real-time presence:

* 2–4 simulated users move between tasks
* Each user has a colored avatar indicator
* Avatars appear on the tasks currently being viewed
* Multiple users on the same task stack together
* A top bar shows how many users are viewing the board

This behavior is simulated using timed state updates.

---

## Filters and URL State

The application provides filters for:

* Status
* Priority
* Assignee
* Due date range

Filters update instantly and synchronize with URL query parameters.
This allows filtered views to be shared and ensures browser navigation restores the exact filter state.

---

## Seed Data

A data generator produces **500+ tasks** with randomized values for:

* Task title
* Assignee
* Priority
* Status
* Start date
* Due date

The generated dataset includes overdue tasks and tasks without start dates to test edge cases.

---

## Setup Instructions

Clone the repository:

git clone [YOUR_REPOSITORY_LINK
](https://github.com/vidyashree-sys/Project_Tracker_UI_Guide.git)
Install dependencies:

npm install

Run development server:

npm run dev

Build the project:

npm run build

Preview production build:

npm run preview

---

## Lighthouse Performance

The application was tested using Lighthouse in production preview mode.

Performance score: **85+**

Add your Lighthouse screenshot here:

![Lighthouse Report]<img width="1895" height="1003" alt="image" src="https://github.com/user-attachments/assets/fec573c8-07ff-4e5d-b87e-2ac4808e6995" />

---

## Future Improvements

If additional time were available, the drag-and-drop logic could be extracted into reusable hooks and the collaboration indicators could be connected to a real WebSocket service instead of simulated updates.
