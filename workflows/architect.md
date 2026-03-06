# Workflow: Architecture Design

Defines system structure with solutioning gate and optional party mode.

---

## Solutioning Gate

10-dimension self-evaluation:

| Dimension | Weight |
|-----------|--------|
| Completeness | Does it cover all requirements? |
| Feasibility | Can it be built with chosen stack? |
| Scalability | Will it handle growth? |
| Security | Are threats addressed? |
| Performance | Are bottlenecks identified? |
| Testability | Can components be tested in isolation? |
| Simplicity | Is it the simplest viable approach? |
| Consistency | Do patterns repeat predictably? |
| Extensibility | Can features be added without rewrites? |
| Risk | Are risks documented with mitigations? |

**Gate threshold:** 90% (configurable via config.architecture.gate_threshold)
**Max iterations:** 3 (revise and re-score if <90%)

---

## Party Mode (CITADEL / GOLD L4)

Multi-perspective architecture review that catches blind spots before execution begins.

### Reviewer Personas

Spawn 3 reviewer agents, each with a distinct lens:

**1. Security Reviewer**
- Auth model: are credentials stored securely? Is session management sound?
- Data protection: PII handling, encryption at rest/in transit, input validation
- Attack surface: exposed endpoints, CORS policy, rate limiting, CSRF/XSS vectors
- Secrets management: no hardcoded keys, proper env var usage
- Dependency risk: known CVEs in chosen libraries

**2. Performance Reviewer**
- Data flow: N+1 queries, unnecessary joins, missing indexes
- Caching strategy: what's cached, TTL policy, invalidation approach
- Concurrency: race conditions, deadlocks, connection pool sizing
- Payload size: API response bloat, missing pagination, unbounded queries
- Bottleneck identification: single points of contention, I/O-bound paths

**3. DX Reviewer**
- API ergonomics: consistent naming, predictable patterns, clear error messages
- Developer onboarding: can a new developer understand the architecture in 30 minutes?
- Code organization: separation of concerns, file discoverability, naming conventions
- Documentation needs: are complex decisions documented in the code/docs?
- Testing ergonomics: are components testable in isolation?

### Review Protocol

1. Each reviewer receives ARCHITECTURE.md + PROJECT.md (requirements context)
2. Each produces a findings report with severity classification:
   - **CRITICAL** — Must fix before execution begins (security vulnerabilities, data loss risks, fundamental design flaws)
   - **IMPORTANT** — Should fix; if deferred, document in ISSUES.md with justification
   - **NICE-TO-HAVE** — Log for future consideration; do not block progress
3. Orchestrator collects all findings and groups by severity

### Resolution Process

For each CRITICAL finding:
1. Revise ARCHITECTURE.md to address the concern
2. Document the change and rationale
3. Re-score the affected solutioning gate dimension(s)

For each IMPORTANT finding:
1. Either fix in ARCHITECTURE.md, OR
2. Document as a known limitation with mitigation plan and add to ISSUES.md

For NICE-TO-HAVE findings:
- Log in ARCHITECTURE.md appendix for future reference

### Post-Review Gate

After addressing all CRITICAL findings:
1. Re-run the solutioning gate (10 dimensions)
2. Final score must still be >=90%
3. If score dropped below 90% due to reviewer-driven changes, iterate (max 2 additional rounds)
4. Document reviewer feedback summary in ARCHITECTURE.md

---

## Output
- Architecture document (ARCHITECTURE.md or section in PROJECT.md)
- Gate score with dimension breakdown
- Reviewer feedback summary (CITADEL)
- State: phase_status="architected", loop_position="ARCHITECT"
