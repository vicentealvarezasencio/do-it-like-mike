---
name: mike:update
description: Self-update MIKE to the latest version
allowed-tools: [Bash, AskUserQuestion]
---

<objective>
Check for MIKE updates, show what changed, and install the latest version.

**When to use:** Periodically, or when new features are announced.
</objective>

<context>
$ARGUMENTS
</context>

<process>

<step name="detect_version">
Detect the currently installed version:

```bash
# Check for global install
MIKE_VERSION=$(cat ~/.claude/do-it-like-mike/VERSION 2>/dev/null || echo "not found")

# Check for local install
if [ "$MIKE_VERSION" = "not found" ]; then
  MIKE_VERSION=$(cat .claude/do-it-like-mike/VERSION 2>/dev/null || echo "not found")
fi
```

If no installed version found:
```
MIKE is not installed. Install with:
  npx do-it-like-mike
```
Exit.

Display: `Current version: {{MIKE_VERSION}}`
</step>

<step name="check_latest">
Check the latest published version:

```bash
LATEST=$(npm view do-it-like-mike version 2>/dev/null || echo "unknown")
```

If current == latest:
```
MIKE is up to date (v{{VERSION}}).
```
Exit.

If latest is newer:
```
Update available: v{{CURRENT}} -> v{{LATEST}}
```
</step>

<step name="show_changes">
Fetch and display the changelog:

```bash
npm view do-it-like-mike description 2>/dev/null
```

Present a summary of what's new (if changelog info is available).
</step>

<step name="confirm_update">
Warn about the update process:

```
Updating MIKE will:
- Re-run the installer (npx do-it-like-mike)
- Detect locally modified files and back them up
- Overwrite framework files with latest versions

Any local patches will be saved to ~/.claude/mike-local-patches/

Proceed with update? (y/n)
```

Wait for confirmation.
</step>

<step name="execute_update">
Run the installer:

```bash
npx do-it-like-mike@latest --force
```

The installer handles:
- SHA-256 comparison to detect local modifications
- Backup of modified files to `mike-local-patches/`
- Path replacement in markdown files
- File manifest update

Display results.
</step>

<step name="post_update">
After update:

```
MIKE updated to v{{LATEST}}.

{{IF_PATCHES}}
Local patches backed up:
  ~/.claude/mike-local-patches/

To reapply your modifications, review the backed-up files
and manually apply changes to the updated versions.
{{/IF_PATCHES}}

Restart Claude Code to load the new version.
```
</step>

</process>

<success_criteria>
- [ ] Current version detected
- [ ] Latest version checked
- [ ] User informed of changes
- [ ] Update executed (if user confirmed)
- [ ] Local patches preserved
- [ ] Restart reminder shown
</success_criteria>
