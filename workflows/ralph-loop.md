# Workflow: Ralph Loop

Autonomous iteration loop for stuck tasks. When an executor hits the same error 3+ times, the Ralph Loop provides a fresh-context retry mechanism using git as memory.

Adapted from PRP's Ralph Loop concept.

---

## When to Activate

The Ralph Loop is triggered when:
1. An executor has retried the same error >= `ralph_threshold` times (default: 3)
2. The user explicitly requests it: "try Ralph Loop on this"
3. `config.json` has `execution.ralph_loop: true`

---

## Concept

Each iteration runs in a **fresh context** — it reads the state file to understand what previous iterations did, implements the next piece, validates, and either completes or leaves notes for the next iteration. Git history serves as durable memory across context resets.

---

## State File

Location: `.mike/ralph-state.md`

```markdown
---
iteration: 1
max_iterations: 10
task_source: ".mike/phases/{N}-{name}/PLAN.md"
task_id: "Task 3"
started_at: "{{ISO_TIMESTAMP}}"
---

# Ralph Loop State

## Codebase Patterns
(Consolidated reusable patterns — future iterations read this first)

## Original Error
{{THE_ERROR_THAT_TRIGGERED_RALPH}}

## Instructions
1. Read the task from task_source
2. Read codebase patterns above
3. Review git log for previous iteration changes
4. Implement fix / continue implementation
5. Run ALL validation commands
6. If all pass: mark COMPLETE
7. If any fail: update progress log, end response

## Progress Log
(Append after each iteration)

---
```

---

## Iteration Protocol

### Step 1: Read Context
1. Read `.mike/ralph-state.md` — current iteration, history, patterns
2. Read the task source (PLAN.md task or SHARD file)
3. Check git log for changes from previous iterations:
   ```bash
   git log --oneline -10
   git diff HEAD~1 --stat
   ```
4. Review "Codebase Patterns" section for accumulated learnings

### Step 2: Assess Current State
1. What's already been implemented by previous iterations?
2. What validations are passing/failing?
3. What's blocking completion?
4. What did the last iteration learn?

### Step 3: Implement
1. Pick the next logical piece of work
2. Keep changes focused and minimal
3. Follow existing code patterns (check Codebase Patterns)
4. Commit after each meaningful change:
   ```
   mike(ralph-{N}): {description}
   ```

### Step 4: Validate
Run ALL validation commands. Never skip any.

```bash
# Adapt to project stack:
npm run build 2>&1 || true
npm test 2>&1 || true
npm run lint 2>&1 || true
```

### Step 5: Update Progress Log
Append to `.mike/ralph-state.md`:

```markdown
## Iteration {{N}} — {{ISO_TIMESTAMP}}

### Completed
- {{What was implemented}}
- Files changed: {{list}}

### Validation Status
- Build: PASS/FAIL (details)
- Tests: PASS/FAIL (details)
- Lint: PASS/FAIL (details)

### Learnings
- {{Pattern discovered}}
- {{Gotcha found}}

### Next Steps
- {{What the next iteration should focus on}}

---
```

If a **reusable pattern** is discovered, add it to the "Codebase Patterns" section at the top.

### Step 6: Decide — Complete or Continue

**COMPLETE** when ALL of these are true:
- All task requirements met
- Build passes
- Tests pass
- Lint passes
- Changes committed

When complete:
1. Update the task status in PLAN.md (mark done)
2. Archive the Ralph state to `.mike/ralph-archives/{{DATE}}-{{SLUG}}.md`
3. Delete `.mike/ralph-state.md`
4. Report completion

**CONTINUE** when any validation fails or work remains:
- End response normally
- The next iteration picks up from the progress log

---

## Activation Command Flow

When the lead (main context) activates Ralph:

1. Create `.mike/ralph-state.md` with iteration=1
2. Record the original error
3. Display:
   ```
   Ralph Loop activated for {{TASK_ID}}
   Max iterations: {{N}}

   The loop will iterate until all validations pass.
   Each iteration runs with fresh context, using git as memory.
   ```
4. Begin first iteration

---

## Cancellation

User can cancel at any time:
1. Delete `.mike/ralph-state.md`
2. Git history preserves all work done so far
3. Report what was accomplished across iterations

---

## Guardrails

- **Max iterations**: Default 10, configurable via `config.json` or argument
- **Same error 3x**: If the same exact error persists across 3 iterations, stop and escalate to user
- **Scope**: Ralph works on ONE task at a time. It does not expand scope.
- **Commits**: Each iteration commits its changes. Git is the memory.

---

## Anti-Patterns

- Don't skip validations ("it probably works")
- Don't try to fix everything in one iteration
- Don't ignore the Codebase Patterns section
- Don't expand scope beyond the original task
- Don't output completion if any validation fails
