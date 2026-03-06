---
name: mike:init
description: Initialize a MIKE project — select profile, capture goal, set up .mike/ directory
allowed-tools: [Read, Write, Bash, Glob, Grep, AskUserQuestion]
---

<objective>
Initialize the `.mike/` structure in a project directory through conversational setup. Captures the project vision, selects a profile, detects scale level (for GOLD), and creates all foundation state files.

**When to use:** Starting a new project with MIKE, or adding MIKE to an existing codebase.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/workflows/profile-resolution.md
@~/.claude/do-it-like-mike/workflows/scale-detection.md
@~/.claude/do-it-like-mike/templates/config.json
@~/.claude/do-it-like-mike/templates/state.json
@~/.claude/do-it-like-mike/templates/STATE.md
@~/.claude/do-it-like-mike/templates/PROJECT.md
@~/.claude/do-it-like-mike/templates/ROADMAP.md
@~/.claude/do-it-like-mike/templates/ISSUES.md
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
Current directory state (check for existing .mike/)
</context>

<process>

<step name="check_existing">
Check if `.mike/` already exists in the current directory.

- **If `.mike/` exists and has state files:** Ask the user if they want to:
  - Resume the existing project (route to `/mike:resume`)
  - Re-initialize (will overwrite — confirm first)
- **If `.mike/` does not exist:** Proceed to step 2.
</step>

<step name="greeting">
Display the MIKE greeting:

```
 ███╗   ███╗██╗██╗  ██╗███████╗
 ████╗ ████║██║██║ ██╔╝██╔════╝
 ██╔████╔██║██║█████╔╝ █████╗
 ██║╚██╔╝██║██║██╔═██╗ ██╔══╝
 ██║ ╚═╝ ██║██║██║  ██╗███████╗
 ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚══════╝
  Don't half ass it. Do it like Mike.
```

Then say: "Let's set up your project. I'll ask you a few questions to understand what we're building."
</step>

<step name="capture_goal">
Ask the user about their project. Adapt depth based on what they share:

**Question 1:** "What are we building? Give me the elevator pitch — or a brain dump, either works."

Wait for response. Extract:
- Project name (infer from description or directory name)
- Core value proposition
- Product type (web app, mobile app, API, CLI, library, etc.)
- Industry/domain (if mentioned)

**Question 2:** "Who's this for? Who are the users?"

Wait for response. Extract:
- Target audience
- User personas (if shared)

**Question 3:** "What's the tech stack? Or should I recommend one?"

Wait for response. Extract:
- Languages, frameworks, databases
- Existing codebase (brownfield) vs new (greenfield)

**Key behaviors:**
- Ask ONE question at a time
- Wait for response before next question
- Be conversational, not interrogative
- If the user gives a brain dump that answers multiple questions, don't re-ask
- Infer what you can, confirm what you must
</step>

<step name="select_profile">
Based on the project description, recommend a profile:

| Signal | Recommended Profile |
|--------|-------------------|
| "quick fix", "bug", "small change" | BLITZ |
| Single feature, few files, 1-2 sessions | SPRINT |
| Multi-feature, needs architecture, team-quality | FORGE |
| Production system, compliance, mission-critical | CITADEL |
| Existing codebase, adding features | SCOUT |
| Unsure / let MIKE decide | GOLD (auto-adaptive) |

Present the recommendation with a brief explanation:

```
Based on what you've described, I'd recommend the **FORGE** profile:
- Front-loaded planning with architecture gate
- Document sharding for efficient parallel execution
- Independent QA verification
- Design system generation (since you have a UI)

Other options: SPRINT (lighter), CITADEL (heavier), GOLD (let MIKE adapt).
Which one feels right?
```

Wait for confirmation or selection.
</step>

<step name="detect_scale">
**If profile is GOLD:**
Follow the scale detection workflow (`workflows/scale-detection.md`) to determine L0-L4.
Present the detected level and confirm.

**If profile is not GOLD:**
Skip this step.
</step>

<step name="create_state_directory">
Create the `.mike/` directory structure:

```
.mike/
├── config.json
├── state.json
├── STATE.md
├── PROJECT.md
├── ROADMAP.md
├── ISSUES.md
├── phases/
├── codebase/
├── debug/
│   └── resolved/
└── milestones/
```

Populate all files from the conversation:
1. **config.json** — from template, with profile, project_name, design settings filled in
2. **state.json** — from template, with project name, profile, timestamp
3. **STATE.md** — from template, with project info and "INITIALIZE complete" as next action
4. **PROJECT.md** — from template, populated with vision, users, tech stack, constraints from conversation
5. **ROADMAP.md** — from template, with initial phase structure based on complexity
6. **ISSUES.md** — empty template
</step>

<step name="build_roadmap">
Based on the project scope, create an initial roadmap:

**BLITZ:** Single phase, inline task list in PROJECT.md. ROADMAP.md has 1 phase.

**SPRINT:** 2-5 phases based on natural feature boundaries. Each phase has a clear goal.

**FORGE/CITADEL:** 3-8 phases with milestone groupings. Phases are ordered by dependency and risk.

**SCOUT:** 1-3 phases focused on the specific feature/change being added to the existing codebase.

**GOLD:** Scale-adaptive — L0-L1 get 1 phase, L2 gets 3-5, L3 gets 5-8, L4 gets 8+.

Present the roadmap to the user for confirmation. Adjust if they have feedback.
</step>

<step name="route_next">
Display the completed state summary and route to exactly ONE next action:

| Profile | Next Action |
|---------|------------|
| BLITZ | `/mike:execute` (inline task list ready) |
| SPRINT | `/mike:progress` (routes to discuss/research/plan) |
| FORGE | `/mike:discover` (front-loaded planning) |
| CITADEL | `/mike:discover` (front-loaded planning) |
| SCOUT | `/mike:map` (codebase analysis first) |
| GOLD L0-L1 | `/mike:execute` |
| GOLD L2 | `/mike:progress` |
| GOLD L3-L4 | `/mike:discover` |

Display: `--> Next: /mike:{command}`
</step>

</process>

<success_criteria>
- [ ] .mike/ directory created with all subdirectories
- [ ] config.json populated with profile and project settings
- [ ] state.json initialized with timestamps and profile
- [ ] STATE.md reflects current position (init complete)
- [ ] PROJECT.md populated from conversation (not template placeholders)
- [ ] ROADMAP.md has at least 1 phase with goals
- [ ] ISSUES.md exists (empty template)
- [ ] User confirmed profile selection
- [ ] Single next action displayed
</success_criteria>
