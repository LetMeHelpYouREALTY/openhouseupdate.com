# How to change this site

Instructional guide for editing openhouseupdate.com in Cursor. This page is for the person making the edit. It is not copy for the public site.

Live site: https://www.openhouseupdate.com

## One-time setup

1. Open Cursor.
2. File → Open Folder and pick this site folder. On the domains computer the same step for another site looks like `C:\Users\geneb\projects\domains\drjanduffy.com`.
3. Click the orange Claude icon in the top-right of the editor. If you don't see it, press Ctrl+Esc.
4. Type `/` in the Claude panel. `/ship` should be in the list. It comes from `.claude/skills/ship` in this folder.

`/sites-health` is in this folder too. It runs the weekly scan only when the open folder is `C:\Users\geneb\projects\domains`. To use it there, copy `.claude/skills/sites-health` into `C:\Users\geneb\projects\domains\.claude\skills\sites-health` once. That parent folder is outside this repo.

## Every time you change the site

1. Make the edit. Type it yourself, or ask in the Claude panel: "Change the hero headline to …"
2. Save with Ctrl+S.
3. In the Claude panel, type `/ship` plus a few words on the change. Example: `/ship updated hero headline`
4. If it asks to approve a command, click Allow. If you're unsure what it's asking, send a screenshot.
5. Wait 2–5 minutes. It builds, pushes to GitHub, opens a Vercel preview, and checks the change is on the page.
6. Click the preview link and look at the page.
7. If it looks right, type GO and it goes live. If not, say what to fix and run `/ship` again.

## Once a week

Open the `projects\domains` folder and type `/sites-health` to see which sites need attention.

## Two rules

- Open one site folder at a time when you ship.
- If it asks to approve a command, click Allow. If you're unsure what it's asking, send a screenshot.
