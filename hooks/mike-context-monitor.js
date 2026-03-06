/**
 * MIKE Context Monitor — PostToolUse hook
 * Monitors context window usage and reports bracket transitions.
 * Brackets: FRESH (>70%), MODERATE (40-70%), DEEP (20-40%), CRITICAL (<20%)
 */

const BRACKETS = [
  { name: 'CRITICAL', threshold: 20, color: '\x1b[31m' },
  { name: 'DEEP', threshold: 40, color: '\x1b[33m' },
  { name: 'MODERATE', threshold: 70, color: '\x1b[33m' },
  { name: 'FRESH', threshold: 100, color: '\x1b[32m' },
];

let lastBracket = null;
let toolCallCount = 0;

export default function mikeContextMonitor({ tool_name, tool_input, tool_output }) {
  toolCallCount++;

  // Estimate remaining context based on tool calls (rough heuristic)
  // Claude Code doesn't expose exact context usage, so we approximate
  const estimatedUsage = Math.min(95, toolCallCount * 1.5);
  const remaining = Math.max(5, 100 - estimatedUsage);

  const bracket = BRACKETS.find(b => remaining <= b.threshold) || BRACKETS[3];

  if (lastBracket !== bracket.name) {
    const prefix = `${bracket.color}[MIKE]`;
    const reset = '\x1b[0m';

    if (bracket.name === 'CRITICAL') {
      return `${prefix} WARNING: Context CRITICAL (<20%) -- complete current task, prepare HANDOFF${reset}`;
    } else if (bracket.name === 'DEEP') {
      return `${prefix} Context: ${remaining}% remaining (DEEP) -- complete current task only${reset}`;
    } else if (bracket.name === 'MODERATE') {
      return `${prefix} Context: ${remaining}% remaining (MODERATE) -- consider plan splits${reset}`;
    }

    lastBracket = bracket.name;
  }

  return undefined;
}
