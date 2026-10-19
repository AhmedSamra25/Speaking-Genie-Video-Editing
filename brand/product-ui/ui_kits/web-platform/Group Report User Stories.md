# Speaking Genie — Collective Feedback Report (Group analysis)
User stories and acceptance criteria for the dev team

**Design reference:** `Speaking Genie Platform.dc.html#groupReport` (Reports → Group analysis · A2 Morning), plus the Group detail → Reports tab and the Request report modal. Check it in light, dark and Arabic RTL.
**Components:** Speaking Genie Design System (`SgCard`, `SgMetricCard`, `SgTable`, `SgKpiBar`, `SgListRow`, `SgTag`, `SgBadge`, `SgTabs`, `SgAvatar`, `SgAlert`, `SgButton`). No custom colours or one-off styles.
**Related specs:** `Dashboard User Stories.md`, `Dashboard Notifications Prompt.md` (§3A conversation evidence, §3B ranking).

---

## 1. Summary

The collective feedback report gives a teacher **one picture of how a whole group spoke over a period**, so the next lesson can target what most students got wrong, using what students actually said as the teaching material.

It answers four questions:
1. **Who practised, and how much?** Activity, practice time distribution, and a ranking by sessions and practice time over the same period.
2. **What does the class have in common?** Shared weaknesses and strengths across grammar, pronunciation, vocabulary and fluency.
3. **What did they actually say?** Verbatim excerpts with corrections for each focus area.
4. **What should I do next?** A teaching tip per focus area, plus a suggested task.

### Personas
| Persona | Needs |
|---|---|
| Teacher | Plan the next lesson for their group, and praise and nudge individual students |
| Head of academics | Compare groups, spot curriculum gaps, coach teachers |
| Admin | Share progress with clients or parents (PDF) |

### Out of scope (v1)
- Comparing two groups side by side in one report (use the Dashboard group comparison).
- Editing the AI-generated text inside the report. Teachers can add a note (US-13) but not rewrite findings.
- Student-facing version (students see only their own place in the ranking, via the app; see §3B of the notifications spec).

---

## 2. Generating the report

### US-01 · Request a group report
**As a** teacher, **I want** to request a collective report for my group and a date range, **so that** I get feedback on the whole class.

**Acceptance criteria**
- Entry points:
  - Reports → `Request report`.
  - Group detail → Reports tab → `Generate report`.
  - Dashboard header → `Request report`.
- Modal fields:
  - **Type** segment: Student / Group. Group is preselected when opened from a group.
  - **Target group** (scoped to groups the user can access).
  - **Start date** and **End date**. Default is the last full week, Sun–Sat in workspace time. Maximum range 92 days; the end date can't be in the future.
  - **Recurring schedule** switch. When on: Frequency (Weekly / Monthly), Day, Time, and Report period in days (default 7).
- Validation:
  - The group must have ≥ 1 completed session in range. Otherwise show the inline error "No sessions in this period. Pick a different range."
  - Duplicate guard: if a report already exists for the same group and range, offer `Open existing report` instead of creating a new one.
- On submit: toast "Report requested". The row appears in Reports with status **Pending**, then Processing, then Generated.
- Primary button label: `Request report`, or `Create schedule` when recurring is on.

### US-02 · Report lifecycle and status
**Acceptance criteria**
- Statuses: `pending` → `processing` → `completed` | `failed`. Schedules can also be `paused`.
- Reports list (Reports page and Group detail → Reports tab) shows Target, Type, Status badge, Date range, Schedule / created time, Created by, and actions:
  - Generated: View, Download
  - Processing / Pending: Cancel
  - Failed: Retry
  - Paused: Resume
- When generation finishes, the `report.ready` notification goes to the requester, the group teacher and any scheduled recipients. Failure sends `report.failed` with the reason.
- Target generation time: 95% of reports for groups of ≤ 40 students finish in under 3 minutes.

### US-03 · Recurring schedules
**Acceptance criteria**
- A weekly schedule runs on the chosen day and time and covers the preceding N days (the report period).
- Pausing a schedule stops future runs; reports already generated remain.
- A schedule that fails 3 runs in a row pauses itself and notifies the creator.
- The Group detail → Reports tab lists the history newest first. Columns: Period, Students, Avg fluency, Avg practice, actions.

---

## 3. Report content

Sections render in this order. Each section must handle missing data on its own (see §5).

### US-10 · Header
**Acceptance criteria**
- `← All reports` back link.
- Title: **Group analysis · {groupName}**.
- Subtitle: `Collective feedback for {course} · Level {level} · {from}–{to}`.
- Actions: `Download PDF` (primary).
- When opened from a notification or the group page, the back link returns to that origin.

### US-11 · Headline metrics
| Card | Definition |
|---|---|
| Total students | Students enrolled in the group at the end of the period |
| Active students | Students with ≥ 1 counted session in the period. Note: "{n} did not practise" (warning tone when > 0). |
| Avg practice time | Total counted minutes ÷ active students, shown as "1h 52m". Note: "Per student". |
| Avg fluency score | Mean fluency of counted sessions. Delta vs the previous equivalent period, e.g. "↑ 4 vs last week". |

A **counted session** is a completed session ≥ 2 minutes long and not ended in the first 30 seconds. This definition is used everywhere in the report.

### US-12 · Practice time distribution
**Acceptance criteria**
- Three `SgListRow`s with a 3px marker, title, range and count. The thresholds apply to a 7-day period and scale linearly for longer periods.
  - **Need more practice time** (danger marker): < 1 hour.
  - **Good progress** (amber marker): 1–3 hours.
  - **Excellent engagement** (success marker): > 3 hours.
- Clicking a row filters the ranking table (US-14) to those students.

### US-13 · Class-wide focus areas
**As a** teacher, **I want** the patterns most students share, **so that** I can address them in one lesson.

**Acceptance criteria**
- Up to 6 `SgKpiBar` rows, sorted by the share of active students affected.
  - Each row has a name like "Grammar · Past simple irregular verbs", a value like "58% of students", a bar, and a note: **Weakness** or **Common strength**.
  - Weakness bars are amber; strength bars are success green.
- A finding needs ≥ 3 students **and** ≥ 20% of active students; anything smaller is left out.
- Categories come from the session analysis taxonomy: grammar, pronunciation, vocabulary, fluency.
- **Teacher note:** the teacher can add one free-text note to the report (max 500 characters). It is shown under the focus areas with their name and the time, and included in the PDF.

### US-14 · Student ranking (same period)
**As a** teacher, **I want** to rank my students by sessions and practice time over the same period, **so that** I compare effort fairly.

**Acceptance criteria**
- Card title: **Student ranking · {from}–{to}**. Description: "Every student measured over the same {n} days".
- Segment in the card header: `By practice hours` (default) · `By sessions`.
- Sort rules:
  - By practice hours: counted minutes, then sessions, then average score.
  - By sessions: counted sessions, then minutes, then average score.
  - Students with 0 sessions go last, alphabetically.
- Columns:
  - **#**
  - **Student** (avatar + name)
  - **Sessions** (meter relative to the group max)
  - **Practice time** (meter; "58 min" under 1 hour, "1h 12m" otherwise — never decimal hours)
  - **Avg / session** ("8 min", or "—" if 0)
  - **Avg score** (green ≥ 75, amber 62–74, red < 62)
  - **vs last week** (↑ n / ↓ n / →, the change in rank vs the previous equivalent period)
- The meter for the active sort metric is purple; the other is green.
- Footer: "Ranked by {rule}. Sessions under 2 minutes are not counted. {n} student(s) had no sessions." Use the correct singular or plural.
- Students who joined mid-period show "Joined {date}" under their name and are still ranked.
- Rows open Student detail. All rows are shown (no pagination up to 60 students). With ≥ 5 columns the table scrolls horizontally on narrow screens.

### US-15 · What students said this week (conversation evidence)
**As a** teacher, **I want** real examples of what my students said for each focus area, **so that** I can use them as teaching material and trust the analysis.

**Acceptance criteria**
- Section title: "What students said {this week | in this period}". Subtitle: "Verbatim excerpts behind each focus area, chosen from at least 2 students. Use them as warm-up examples in class."
- **One card per focus area** (max 4: the top 3 weaknesses + the top 1 strength). Each card has:
  - Header: the focus-area title, meta ("14 of 24 students · 41 errors this week" or "used correctly 112 times"), and a badge (**Weakness** amber, **Strength** green, **Watch** neutral).
  - **2 excerpts from 2 different students** when available (1 is allowed only if just one student shows the pattern). Each excerpt shows:
    - A meta line: avatar · student name · task title · timestamp in session.
    - Optional context: the AI turn just before, in italics, e.g. *AI: "What did you have for breakfast yesterday?"*.
    - The student utterance in a bubble, verbatim. Fillers are trimmed with "…" and pauses ≥ 3s are marked as "[pause 4.1s]".
    - For errors: the wrong span struck through in danger, →, and the correction in success.
    - For strengths, or excerpts with no correction: a one-line note (e.g. "Clear, natural request. Model answer for the group."). Never show an empty strike-through or an arrow without a correction.
  - Footer: **Teaching tip** (1–2 sentences, specific and actionable, e.g. "Minimal pairs: three / free / tree, think / sink.").
- Excerpt rules:
  - The student's words are never paraphrased or invented.
  - Pick the most recent clear examples, preferring different tasks.
  - Excerpts stay in the practised language and render LTR inside the RTL layout.
  - Audio clips (if available) play in-app only, for signed-in users with access to the student.
- `Copy for lesson`: copies all excerpts (with corrections and tips) as plain text and shows the toast "Examples copied". Student names are replaced with "Student A / B…" in the copied text.
- If there is not enough evidence for a focus area, its card is not shown. If there is none at all, the section shows the inline note "Not enough conversation data for examples in this period."

**Worked example (fixture data)**
> **Past simple · irregular verbs** · 14 of 24 students · 41 errors this week · WEAKNESS
> - Mahmoud Youssef · Ordering at a café · 00:47
>   *AI: "What did you have for breakfast yesterday?"*
>   "Yesterday I go to the café and I eat eggs and bread." — ~~I go … I eat~~ → **I went … I ate**
> - Karim Saleh · Describing your weekend · 01:12
>   "On Friday I buyed new shoes with my brother." — ~~buyed~~ → **bought**
>
> **Teaching tip ·** Drill go/went, buy/bought, eat/ate with a "yesterday" chain game before *Describing your weekend*.

> **Polite requests** · 19 of 24 students · used correctly 112 times · STRENGTH
> - Hana Ezzat · Booking a hotel room · 01:44
>   "Would it be possible to have a room with a sea view?" — *Above level: B1 structure used confidently.*
>
> **Teaching tip ·** Praise this in class and raise the bar: ask for "Would you mind…?" next.

### US-16 · Most common discussion topics
**Acceptance criteria**
- Up to 8 goal tags, sorted by the number of students: "Ordering food · 21 students", "Weekend plans · 18", and so on.
- Clicking a tag filters the excerpts (US-15) to sessions on that topic.

### US-17 · Suggested next steps (optional block, AI)
**Acceptance criteria**
- Up to 3 actions linked to the weaknesses found, e.g. "Assign *Describing your weekend* to the 14 students with past-simple errors".
- The `Assign` button opens Add task, prefilled with the level, the students and the task. Nothing is assigned automatically.
- The block is hidden if the AI service is unavailable.

---

## 4. Sharing, export and access

### US-20 · Download PDF
**Acceptance criteria**
- An A4 portrait PDF with every section in screen order. Tables are not truncated (the ranking can span pages). Audio controls are hidden.
- Header: workspace logo (from Company profile) or the Speaking Genie logo, report title, group, period, and the generated timestamp.
- Footer: "Generated by Speaking Genie · {date} · Page n of N".
- **Privacy option** at download: `Show student names` (default on for teachers and admins). When off, names become "Student 1…n" and avatars become initials.
- The file name is `group-report-{group-slug}-{from}-{to}.pdf`.
- The PDF uses the report's language (en/ar). The Arabic PDF is RTL, with excerpts left LTR.

### US-21 · Permissions and scope
| Permission | Grants |
|---|---|
| `reports.request` | Request and schedule group reports |
| `reports.view` | Open generated reports |
| `reports.download` | Download PDF |
| `session.audio` | Play excerpt audio |

- Teachers can only request and view reports for their own groups. The Head of academics and Admins can for every group. Finance has no access to excerpts. If Finance is given `reports.view`, US-15 is hidden for them.
- An opened report records an audit entry (user, time) for the Head of academics.

### US-22 · Notifications
- `report.ready` / `report.failed`: see the notifications spec.
- `group.ranking.weekly`: the weekly digest to the teacher links to this report's ranking section (anchor `#ranking`).
- When a report contains a new focus area that wasn't in the previous report for the group, send `issue.trend.new` to the Head of academics.

---

## 5. States

| State | Behaviour |
|---|---|
| Pending / Processing | A full-page skeleton with an `SgAlert tone="info"`: "This report is being generated. You can leave this page; we'll notify you when it's ready." |
| Failed | An `SgAlert tone="danger"` with the failure reason, plus `Retry` |
| Partial data | Sections without enough data show an inline "Not enough data in this period" note. The other sections still render. |
| No active students | Metrics show 0. Ranking lists everyone at 0 sessions. US-13, US-15 and US-16 are replaced by one `SgEmptyState`: "No sessions in this period" / "Students in {group} didn't practise between {from} and {to}." / [Send reminder] |
| Archived group | The report is read-only, with the banner "This group ended on {date}." |

---

## 6. Data & API

```
POST /reports                          { type: 'group', targetId, from, to, schedule? }
GET  /reports?type=group&targetId&status&page
GET  /reports/{id}                     → full payload below
POST /reports/{id}/retry
POST /reports/{id}/cancel
PATCH /reports/schedules/{id}          { status: 'active' | 'paused' }
PUT  /reports/{id}/note                { text }
GET  /reports/{id}/pdf?names=true|false&lang=en|ar
```

**`GET /reports/{id}` payload (group)**
```ts
{
  id, status, group: { id, name, course, level, teacher }, period: { from, to, days },
  metrics: { totalStudents, activeStudents, avgPracticeMinutes, avgFluency, avgFluencyPrev },
  distribution: { low: number, medium: number, high: number },
  focusAreas: [{ key, category, label, kind: 'weakness' | 'strength' | 'watch', studentsAffected, sharePct, occurrences }],
  ranking: [{ studentId, name, initials, sessions, minutes, avgScore, prevRank, joinedAt? }],
  evidence: [{ focusKey, items: ConversationEvidence[], tip }],   // ConversationEvidence as in notifications §3A
  topics: [{ label, students }],
  nextSteps?: [{ title, taskId, studentIds }],
  teacherNote?: { text, author, at },
  generatedAt
}
```
- The ranking can be re-sorted on the client, so no extra request is needed when switching between hours and sessions.
- Evidence is immutable once the report is generated. It is a snapshot, even if the session data later changes.

---

## 7. Localisation, accessibility, analytics

- **Arabic:** all labels have i18n keys under `reports.group.*`. The layout mirrors in Arabic; excerpts, numbers and percentages stay LTR with Western digits.
- **Contrast:** all text is at least 4.5:1. Secondary text uses `--sg-ink-muted`. Status always has a text label as well as colour.
- **Screen readers:** excerpt bubbles are a `blockquote` with `cite` = "{student}, {task}, {timestamp}". Strike-throughs are announced as "said '{wrong}', correct form '{right}'".
- **Events:**
  - `group_report_requested {groupId, range, recurring}`
  - `group_report_viewed {reportId, source}`
  - `group_report_rank_toggle {by}`
  - `group_report_examples_copied {reportId}`
  - `group_report_pdf {reportId, names}`
  - `group_report_next_step_assigned {reportId, taskId}`

## 8. Definition of done

- [ ] All stories meet their acceptance criteria in light, dark and Arabic RTL, on screen and in the PDF.
- [ ] Ranking sort, tie-breaks and the singular/plural footer are covered by unit tests. Practice time is never shown in decimal hours.
- [ ] Every excerpt in a generated report matches the source transcript exactly (automated check against the session store).
- [ ] Strength excerpts never render a strike-through or an arrow.
- [ ] A teacher cannot open a report for a group they don't teach (API returns 403).
- [ ] Generation time and PDF output are verified with a 40-student group over 30 days.
- [ ] Visual QA against `Speaking Genie Platform.dc.html#groupReport` at 1280 / 1440 / 1920 wide, with tables scrolling correctly at 1024.
