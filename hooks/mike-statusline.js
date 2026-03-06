/**
 * MIKE Statusline — Statusline hook
 * Displays current project state in the Claude Code status bar.
 * Format: [MIKE] Phase 3/5 | EXECUTE | Shard 4/7 | FORGE | Context: FRESH
 */

import fs from 'fs';
import path from 'path';

export default function mikeStatusline() {
  try {
    const mikePath = path.join(process.cwd(), '.mike');
    if (!fs.existsSync(mikePath)) return undefined;

    const stateFile = path.join(mikePath, 'state.json');
    if (!fs.existsSync(stateFile)) return undefined;

    const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    const profile = (state.profile || 'gold').toUpperCase();
    const phase = state.current_phase || '?';
    const status = state.phase_status || 'init';
    const bracket = state.session?.context_bracket || 'FRESH';

    // Count total phases from roadmap
    let totalPhases = '?';
    const roadmapFile = path.join(mikePath, 'ROADMAP.md');
    if (fs.existsSync(roadmapFile)) {
      const roadmap = fs.readFileSync(roadmapFile, 'utf8');
      const phaseMatches = roadmap.match(/^### Phase \d/gm);
      if (phaseMatches) totalPhases = phaseMatches.length;
    }

    const parts = [
      `Phase ${phase}/${totalPhases}`,
      status.toUpperCase(),
      profile,
      `Context: ${bracket}`,
    ];

    return `[MIKE] ${parts.join(' | ')}`;
  } catch {
    return undefined;
  }
}
