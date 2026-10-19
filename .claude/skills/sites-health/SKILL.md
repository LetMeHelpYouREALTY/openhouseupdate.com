---
name: sites-health
description: Read-only weekly check of every site folder under the domains directory. Lists uncommitted work, unpushed commits, and Vercel deploy state. Use only when the user types /sites-health from the domains folder.
disable-model-invocation: true
---

# /sites-health

Read-only. Change nothing, commit nothing, deploy nothing.

The weekly scan runs from the domains folder, `C:\Users\geneb\projects\domains`. Shipping runs from one site folder at a time. If the open folder is a single site (it has its own `package.json` and `.git`, and it is not the domains folder), stop. Tell her to open `C:\Users\geneb\projects\domains` and type `/sites-health` there. Do not scan sibling sites from inside one site.

When the open folder is the domains folder:

1. For each child folder that has a `.git`:
   - uncommitted file count (`git status --porcelain`)
   - commits ahead of origin (`git rev-list --count @{u}..HEAD`, skip if no upstream)
   - last commit date
   - linked Vercel project (`.vercel/project.json`) if present
2. Pull the latest deployment state per Vercel project (`vercel ls <project> --yes` or the Vercel MCP): state, age.
3. Output one table, sorted worst first: Failed deploy, then unpushed commits, then uncommitted work, then no deploy in 90+ days.
4. Close with counts: repos checked, failing, at risk, clean. State planned vs actual repo count.
5. Save the table to `C:\Users\geneb\projects\domains\_reports\SitesHealth_Report_<YYYY-MM-DD>_v1.0.md`.

If a Vercel lookup fails, leave that row's deploy state as unknown and keep going. Do not fix, commit, or deploy anything this command finds.
