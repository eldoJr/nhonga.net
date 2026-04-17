# Nhonga App Workspace — Architecture Plan

## Vision

The authenticated experience is a **modern workspace** — not a traditional dashboard with charts and widgets. Think **Notion meets LinkedIn meets Slack**: a clean, content-first interface where all user types (professionals, students, freelancers, recruiters, business owners) perform their activities in one unified space.

---

## Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ AppHeader (sticky, slim, 56px)                      │
│ ┌──────┬────────────────────────────────────────────┤
│ │      │                                            │
│ │ Side │           Main Content Area                │
│ │ bar  │           (Outlet)                         │
│ │      │                                            │
│ │ 64px │           Scrollable, max-w-[1000px]       │
│ │ coll │           centered                         │
│ │      │                                            │
│ │ 240px│                                            │
│ │ open │                                            │
│ └──────┴────────────────────────────────────────────┘
```

### Sidebar
- **Collapsed by default** — 64px wide, icon-only
- **Expands on hover** — 240px, smooth transition, shows labels
- **Sections**: Navigation, Shortcuts, User profile at bottom
- **Glass/blur** background consistent with the header system
- **No hamburger menu** — hover-to-expand is the interaction

### App Header
- **Slim** — 56px height (smaller than landing header)
- **Left**: Breadcrumb / page title
- **Center**: Global search (cmd+k style)
- **Right**: Notifications bell, messages icon, user avatar dropdown
- **Sticky**, glass blur when scrolled

### Main Content
- **Centered**, max-width 1000px with padding
- **No sidebar overlap** — content shifts with sidebar
- **Clean white/gray background** alternation like landing pages

---

## Folder Structure

```
src/
├── components/
│   ├── atoms/              # Existing — reuse Button, Avatar, Logo, Badge, Spinner
│   ├── molecules/          # Existing — reuse Dropdown, SearchBar, TabItem, Card
│   ├── layout/
│   │   ├── mainLayout.tsx        # Landing pages (Header + Footer)
│   │   ├── authLayout.tsx        # Auth pages (centered, no nav)
│   │   └── dashboardLayout.tsx   # App workspace (Sidebar + AppHeader + Outlet)
│   ├── app/                # NEW — App-specific components
│   │   ├── appSidebar.tsx        # Collapsible sidebar
│   │   ├── appHeader.tsx         # Slim workspace header
│   │   ├── appSearch.tsx         # Global search modal (cmd+k)
│   │   └── appBreadcrumb.tsx     # Breadcrumb navigation
│   ├── organisms/          # Existing — landing page sections
│   └── templates/          # Existing — landing page templates
├── pages/                  # NEW — App workspace pages
│   ├── feed/
│   │   └── feedPage.tsx          # Home feed (activity, recommendations)
│   ├── profile/
│   │   ├── profilePage.tsx       # View own profile
│   │   └── editProfilePage.tsx   # Edit profile
│   ├── jobs/
│   │   ├── browseJobsPage.tsx    # Search & filter jobs
│   │   ├── jobDetailPage.tsx     # Single job view
│   │   ├── myApplicationsPage.tsx # Track applications
│   │   ├── postJobPage.tsx       # Create/edit job (recruiter)
│   │   └── manageJobsPage.tsx    # Manage posted jobs (recruiter)
│   ├── network/
│   │   ├── connectionsPage.tsx   # My connections
│   │   ├── discoverPage.tsx      # Discover people
│   │   └── messagesPage.tsx      # Direct messages
│   ├── academic/
│   │   ├── scholarshipsPage.tsx  # Browse scholarships
│   │   ├── coursesPage.tsx       # Browse courses
│   │   └── booksPage.tsx         # Browse books
│   ├── freelance/
│   │   ├── servicesPage.tsx      # Browse/offer services
│   │   └── projectsPage.tsx      # Active projects
│   ├── content/
│   │   ├── articlesPage.tsx      # Read articles
│   │   └── writeArticlePage.tsx  # Write/publish article
│   └── settings/
│       ├── settingsPage.tsx      # Account settings
│       ├── privacyPage.tsx       # Privacy settings
│       └── notificationsPage.tsx # Notification preferences
```

---

## Sidebar Navigation Items

### Main
| Icon | Label | Route | Description |
|------|-------|-------|-------------|
| 🏠 | Feed | `/app` | Activity feed, recommendations |
| 💼 | Jobs | `/app/jobs` | Browse & manage jobs |
| 👥 | Network | `/app/network` | Connections & discover |
| 🎓 | Academic | `/app/academic` | Scholarships, courses, books |
| 💬 | Messages | `/app/messages` | Direct messages |
| 📝 | Content | `/app/content` | Articles & newsletter |

### Shortcuts (for recruiters/business)
| Icon | Label | Route |
|------|-------|-------|
| ➕ | Post Job | `/app/jobs/post` |
| 🔍 | Find Talent | `/app/freelance` |

### Bottom
| Icon | Label | Route |
|------|-------|-------|
| ⚙️ | Settings | `/app/settings` |
| 👤 | Profile | `/app/profile` |

---

## Key Pages — Design Direction

### Feed (`/app`)
- **Not a dashboard** — it's a content feed
- Activity from connections (new jobs, articles, achievements)
- Personalized job/scholarship recommendations
- Quick actions: "Post a job", "Write an article", "Find connections"
- Clean card-based layout, infinite scroll

### Profile (`/app/profile`)
- LinkedIn-style profile view
- Cover photo, avatar, headline, bio
- Experience, education, skills sections
- Portfolio/projects showcase
- Public profile link

### Jobs (`/app/jobs`)
- Search bar + filter pills (location, type, category, salary)
- Job cards list (left) + detail panel (right) on desktop
- Save, apply, share actions
- For recruiters: switch to "My Posted Jobs" tab

### Network (`/app/network`)
- Tabs: Connections, Discover, Invitations
- People cards with connect/message actions
- Mutual connections indicator

### Messages (`/app/messages`)
- Split view: conversation list (left) + chat (right)
- Real-time feel (even if not websocket yet)
- Online status indicators

### Academic (`/app/academic`)
- Tabs: Scholarships, Courses, Books
- Filter by country, deadline, field
- Save/bookmark functionality

---

## User Type Adaptations

The sidebar and feed adapt based on user role (set during registration step 2):

| Role | Feed Priority | Extra Sidebar Items |
|------|--------------|-------------------|
| Professional | Jobs, networking, articles | — |
| Student | Scholarships, courses, internships | Academic shortcuts |
| Freelancer | Projects, services, clients | "My Services" |
| Recruiter | Talent, applications, job posts | "Post Job", "Talent Search" |
| Business Owner | B2B connections, hiring, services | "Company Profile" |

---

## Reusable Components from Landing

| Component | Reuse In App |
|-----------|-------------|
| `Button` | All actions, forms |
| `Avatar` | Profile, messages, cards |
| `Badge` | Status indicators, tags |
| `Dropdown` | Menus, filters |
| `Logo` | Sidebar header |
| `SearchBar` | Global search |
| `TabItem` | Page tabs |
| `Card` | Content cards |
| `Spinner` | Loading states |

---

## Routing Structure

```
/                    → Landing (mainLayout)
/academic            → Landing (mainLayout)
/jobs                → Landing (mainLayout)
/newsletter          → Landing (mainLayout)
/networking          → Landing (mainLayout)
/hire/*              → Landing (mainLayout)
/login               → Auth (authLayout)
/register            → Auth (authLayout)
/forgot-password     → Auth (authLayout)
/reset-password      → Auth (authLayout)
/app                 → Workspace (dashboardLayout) — Feed
/app/jobs            → Workspace — Browse Jobs
/app/jobs/:id        → Workspace — Job Detail
/app/jobs/post       → Workspace — Post Job
/app/jobs/manage     → Workspace — Manage Jobs
/app/jobs/applied    → Workspace — My Applications
/app/network         → Workspace — Connections
/app/network/discover → Workspace — Discover People
/app/messages        → Workspace — Messages
/app/academic        → Workspace — Academic Hub
/app/content         → Workspace — Articles
/app/content/write   → Workspace — Write Article
/app/freelance       → Workspace — Services/Projects
/app/profile         → Workspace — My Profile
/app/profile/edit    → Workspace — Edit Profile
/app/settings        → Workspace — Settings
```

---

## Implementation Order

### Phase 1 — Layout Shell
1. `dashboardLayout.tsx` — Sidebar + Header + Outlet
2. `appSidebar.tsx` — Collapsible sidebar with navigation
3. `appHeader.tsx` — Slim header with search, notifications, avatar
4. Wire routing in `App.tsx`

### Phase 2 — Core Pages
5. Feed page (activity feed)
6. Profile page (view + edit)
7. Browse Jobs page (search + filter + list)
8. Network page (connections + discover)

### Phase 3 — Communication
9. Messages page (conversation list + chat)
10. Notifications system

### Phase 4 — Content & Academic
11. Academic hub (scholarships, courses, books)
12. Articles (read + write)

### Phase 5 — Recruiter/Business
13. Post Job flow
14. Manage Jobs + applicants
15. Talent search / freelance marketplace

---

## Design Tokens (Consistent with Landing)

- **Border radius**: `rounded-2xl` (cards), `rounded-xl` (inputs), `rounded-lg` (buttons)
- **Shadows**: `shadow-sm` default, `shadow-lg shadow-nhonga-200/20` on hover
- **Borders**: `border-gray-200/60` light, `border-gray-800/60` dark
- **Backgrounds**: `bg-white/60 backdrop-blur-xl` cards, `bg-gray-50/70` alternating sections
- **Typography**: Montserrat, `text-xs` labels, `text-sm` body, `text-base` headings
- **Colors**: nhonga-500 primary, gray-900 text, gray-400 secondary text
- **Animations**: framer-motion entrance, `duration: 0.3-0.5`, spring transitions
