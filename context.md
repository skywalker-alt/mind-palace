# GTD System & CEO Notebook: System Context & Architecture

This document provides a comprehensive, detailed blueprint of the **GTD-system** (Getting Things Done System) and **CEO Notebook** project. It is compiled specifically to onboard other AI builders or developers, explaining every layer of the architecture, data schemas, design philosophies, and custom runtime environments present in this codebase.

---

## 1. Project Overview & Mission

The **CEO Notebook** is an AI-powered Startup Advisor and Chief-of-Staff dashboard designed using the Getting Things Done (GTD) methodology. Its primary goal is to act as a conversational partner ("AI co-founder") where a founder or CEO can think out loud via a "Capture" interface. 
The system parses natural language brain-dumps, automatically extracts tasks or commitments, categorizes them, and files them into the GTD system without manual categorization.

### Key Capabilities
*   **Conversational Capture**: AI parses chaotic stream-of-consciousness input, responding empathetically while extracting structured commitments.
*   **GTD Task Management**: Automatically separates items into:
    *   `Next Actions`: Concrete next physical steps for the CEO.
    *   `Waiting For`: Commitments owed to the CEO by other people (tracked by person).
    *   `Projects`: Multi-step outcomes the CEO is committed to.
    *   `Someday/Maybe`: Future ideas, wishes, and parking-lot considerations.
*   **Weekly Review**: A structured ritual to clean up lists, chase open threads, and reset priorities for the upcoming week.
*   **Memory Logging**: Automatically builds a persistent repository of categorized startup facts (strategy, finance, product, marketing, team, etc.).

---

## 2. Technical Architecture Deep-Dive

The repository consists of a unique multi-tier architecture, combining a custom React-based template engine, a Supabase backend database, a 3-layer agent execution system, and a modular skill extension kit.

### A. Frontend Architecture: The Dynamic Component Engine (`dc-runtime`)
Unlike conventional React applications built with `.jsx` or `.tsx` modules, the main user interface runs on a custom framework called **`dc-runtime`** (embedded in [support.js](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/support.js)).
*   **Framework Concept**: `dc-runtime` parses dynamic HTML templates containing custom XML elements and compiles them at runtime into React 19 elements.
*   **Core Templates**: Located in [index.html](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/index.html) and [mind-palace-UI/CEO Notebook.dc.html](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/mind-palace-UI/CEO%20Notebook.dc.html).
*   **Custom XML Directives**:
    *   `<x-dc>`: The root container of the dynamic component.
    *   `<sc-if value="{{ expression }}" hint-placeholder-val="{{ default }} ...">`: Conditional rendering blocks.
    *   `<sc-for list="{{ expression }}" as="item" hint-placeholder-count="N">`: Loop blocks that iterate over arrays.
    *   `{{ variable.path }}`: Double-curly interpolation for displaying variables, resolving paths, and evaluating basic equality (e.g. `===`, `!==`).
    *   `<dc-import name="ComponentName" ...>` or `<x-import component="name" from="url">`: Dynamic imports of sub-components.
*   **Logic Definition**:
    Components define their state, lifecycle methods (e.g., `componentDidMount`), event handlers, and data bindings inside a `<script type="text/x-dc" data-dc-script>` tag. The script declares a class extending `DCLogic` (e.g., `class Component extends DCLogic`).
    *   State is managed through `this.setState(...)`.
    *   Inputs/refs are bound using React refs (`React.createRef()`).
    *   Data is passed to templates through the `renderVals()` method, which maps state variables to parameters interpolatable by the HTML.
*   **CSS / Styling**:
    Uses **TailwindCSS v3** along with a custom design system ("Eko Design System", defined in [_ds/eko-design-system-edae4f23-498d-4793-9c49-5342fc419881/colors_and_type.css](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/_ds/eko-design-system-edae4f23-498d-4793-9c49-5342fc419881/colors_and_type.css)) that dictates harmonized color palettes (Ocean Depths, Sunset Boulevard, Arctic Frost, etc.), sleek typography (e.g., Montserrat, Outfit, Inter), and micro-animations (logo floats, fading, dot shimmers).

### B. Database Schema & Supabase Integration (`supabase_schema.sql`)
The backend storage uses PostgreSQL hosted on Supabase. Row-Level Security (RLS) is enabled on all tables to restrict access to authenticated owners. The schema (defined in [supabase_schema.sql](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/supabase_schema.sql)) consists of:

1.  **`profile`**: Holds startup profile parameters for each authenticated user.
    *   `user_id` (uuid, Primary Key references `auth.users`)
    *   `startup_name` (text)
    *   `one_liner` (text)
    *   `target_audience` (text)
    *   `business_model` (text)
    *   `updated_at` (timestamp)
2.  **`items`**: Houses the GTD tasks and commitments.
    *   `id` (text, Primary Key)
    *   `user_id` (uuid references `auth.users`)
    *   `text` (text - description of commitment)
    *   `bucket` (text - must be `'next' | 'waiting' | 'someday' | 'project' | 'done'`)
    *   `who` (text - name of person for `'waiting'` actions)
    *   `created_at` (bigint)
    *   `completed_at` (bigint)
3.  **`memory_log`**: Captures strategic facts extracted from founder logs.
    *   `id` (uuid, Primary Key)
    *   `user_id` (uuid references `auth.users`)
    *   `fact` (text)
    *   `category` (text - `'strategy' | 'finance' | 'product' | 'marketing' | 'team' | 'general'`)
    *   `created_at` (timestamp)
4.  **`chat_sessions`**: Manages conversational threads.
    *   `id` (uuid, Primary Key)
    *   `user_id` (uuid references `auth.users`)
    *   `title` (text)
    *   `summary` (text)
    *   `created_at` / `updated_at` (timestamp)
5.  **`chat_messages`**: Stores individual messages within a session.
    *   `id` (uuid, Primary Key)
    *   `session_id` (uuid references `chat_sessions`)
    *   `user_id` (uuid references `auth.users`)
    *   `role` (text - `'user' | 'assistant'`)
    *   `content` (text)
    *   `captured` (jsonb array containing parsed tasks, e.g. `[{"text": "...", "type": "next"}]`)
    *   `created_at` (timestamp)

---

## 3. The 3-Layer Agent Framework (`AGENTS.md`)

This repository is governed by an agentic orchestration structure described in [AGENTS.md](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/AGENTS.md). It isolates deterministic execution from probabilistic AI routing:

```
┌────────────────────────────────────────────────────────┐
│               LAYER 1: DIRECTIVE                       │
│  - SOPs written in Markdown (e.g. directives/)         │
│  - Natural language instructions explaining "What"     │
└───────────┬────────────────────────────────────────────┘
            │ Orchestrator reads instructions
            ▼
┌────────────────────────────────────────────────────────┐
│               LAYER 2: ORCHESTRATION                   │
│  - The AI Builder/Agent (Gemini/Claude)                │
│  - Intelligent routing, error handling, planning       │
└───────────┬────────────────────────────────────────────┘
            │ Executing scripts synchronously/async
            ▼
┌────────────────────────────────────────────────────────┐
│               LAYER 3: EXECUTION                       │
│  - Deterministic Python/Bash scripts (execution/)      │
│  - API calls, data transforms, file actions            │
└────────────────────────────────────────────────────────┘
```

### Self-Annealing Debug Loop
When an execution script fails:
1.  The orchestrator captures the error log and stack trace.
2.  It edits the Python code in [execution/](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/execution) to fix the bug.
3.  It runs the execution script again to verify it works.
4.  It updates the corresponding directive file in [directives/](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/directives) to reflect the new workflow or learned constraint (e.g. API rate limits, schema details).

---

## 4. The Extension/Skill System

This project contains a modular extension structure called the **Skill System**. Skills are packaged capabilities that extend what the AI developer can do in the environment.

*   **Skill Guide**: Documented in [skill-creator/SKILL_creator.md](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/skill-creator/SKILL_creator.md).
*   **Anatomy of a Skill**:
    *   `SKILL.md`: Root markdown file containing metadata (name, description) in YAML frontmatter and operational rules in the body.
    *   `scripts/`: Python or shell utilities (run as black-boxes).
    *   `references/`: Supplementary schemas, templates, or guides loaded conditionally (Progressive Disclosure).
    *   `assets/`: Image assets, template slides, or starter boilerplates.

### Packaged Skills in this Repository
1.  **[frontend-design](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/skills/frontend-design/SKILL.md)**: Styling and layouts engine. Enforces high aesthetic standards, unique typography pairings (display + body), and custom visual details (noise textures, micro-interactions, asymmetrical grids) to prevent generic "AI-generated" looks.
2.  **[pdf](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/skills/pdf/SKILL.md)**: Toolkit for reading, writing, merging, splitting, rotating, password-securing, and performing OCR on PDFs (using `pypdf`, `pdfplumber`, `reportlab`, `qpdf`, `pdftotext`).
3.  **[theme-factory](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/skills/theme-factory/SKILL.md)**: Styling theme injector for slides, documentation, and reporting. Hosts 10 preconfigured color/typography themes (Ocean Depths, Sunset Boulevard, Desert Rose, etc.).
4.  **[web-artifacts-builder](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/skills/web-artifacts-builder/SKILL.md)**: Scaffold manager. Compiles React + TypeScript + Tailwind + shadcn/ui applications and uses Parcel to bundle them into a single inline HTML file for immediate deployment.
5.  **[webapp-testing](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/skills/webapp-testing/SKILL.md)**: Playwright-powered UI visual regression and automation framework. Coordinates webapp server lifecycles using `scripts/with_server.py`.

---

## 5. Repository Directory Layout

Here is a map of the repository's directory structure:

```
GTD-system/
├── .env                  # Secret keys (Supabase tokens, LLM API keys)
├── .gitignore            # Excludes node_modules, .tmp, credentials
├── .tmp/                 # Temp directory for intermediate files during runs
├── _ds/                  # Local CSS design tokens and Eko theme stylesheets
├── assets/               # Shared logos, imagery, and UI media resources
├── directives/           # Standard Operating Procedures for Agent Layers
│   ├── hosting.md        # GitOps & Vercel deployment SOP
│   └── sample_task.md    # Starter SOP example
├── dist/                 # Compiled static distribution build artifacts
├── execution/            # Executable scripts run by the Agent Orchestrator
│   └── sample_task.py    # Standard execution template script
├── hosting.md            # Project Hosting & Deployment Guide
├── index.html            # Main entry point for the CEO Notebook web client
├── mind-palace-UI/       # Archive containing screenshots, templates, and UI backups
│   ├── CEO Notebook (offline).html
│   ├── CEO Notebook.dc.html
│   └── support.js
├── package.json          # Node dependencies (Vite, React 19, Tailwind v3, Lucide)
├── public/               # Public assets folder served by Vite
├── screenshots/          # Saved UI screenshots for verification and review
├── skill-creator/        # Framework tools for generating/compiling skills
│   └── SKILL_creator.md  # Onboarding guide for skill compilation
├── skills/               # Target workspace for packaged Agent Skills
│   ├── frontend-design/  # Visual enhancement rules
│   ├── pdf/              # Document assembly and extraction utilities
│   ├── theme-factory/    # Presentational themes
│   ├── web-artifacts-builder/ # React compilation wrapper
│   └── webapp-testing/   # Automated browser visual test scripts
├── supabase_schema.sql   # Postgres DB creation scripts and security policies
├── support.js            # Compiled dc-runtime engine for compiling UI templates
└── vite.config.js        # Vite bundler parameters (React plugin configuration)
```

---

## 6. How to Build & Develop

### Prerequisites
*   Node.js (v18+)
*   Python (v3.9+)

### Local Development Server
Launch the development server to preview and test UI changes in real-time:
```bash
npm install
npm run dev
```
By default, the Vite server will spin up on `http://localhost:5173`.

### Bundling and Packaging Production Code
To compile and build static assets into the `dist/` directory:
```bash
npm run build
```

### Writing a New Execution Script (Layer 3)
1.  Place the new script in [execution/](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/execution).
2.  Ensure it is deterministic, reads values from standard parameters or environment variables, and logs clear errors to stderr.
3.  Write a corresponding SOP markdown file in [directives/](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/directives) so the Layer 2 orchestrator knows when and how to call it.

### Creating a New Agent Skill
1.  Execute the skill initializer script:
    ```bash
    python skill-creator/scripts/init_skill.py <your-skill-name> --path skills/<your-skill-name>
    ```
2.  Fill in the YAML metadata inside `skills/<your-skill-name>/SKILL.md`.
3.  Implement executable helper scripts inside `skills/<your-skill-name>/scripts/` and reference guides in `skills/<your-skill-name>/references/`.
4.  Package the skill for distribution:
    ```bash
    python skill-creator/scripts/package_skill.py skills/<your-skill-name>
    ```

### Hosting & Deployment
The system is configured for automatic hosting on Vercel via GitHub. For a step-by-step guide on how the deployment workflow is triggered, see [hosting.md](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/hosting.md) and the corresponding agent directive [directives/hosting.md](file:///c:/Users/eltayeb%20abdalla/Desktop/GTD-system/directives/hosting.md).
