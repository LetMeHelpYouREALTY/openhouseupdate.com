---
name: ship
description: Ship the current site change. Builds, pushes a preview branch, opens a Vercel preview, and checks the change is on the page. Use only when the user types /ship plus a few words on the change. Wait for GO before merging to production.
disable-model-invocation: true
argument-hint: a few words on the change
---

# /ship

Ship the changes in the current repo. Change description: $ARGUMENTS

Follow `CLAUDE.md` in this repo, and `projects\domains\CLAUDE.md` when that file is present. Steps, in order. Stop and report at the first failure.

This folder is one site. Ship from this folder only. Do not open or commit from the parent domains folder.

1. **Orient.** `git status --porcelain`, `git branch --show-current`, `git remote -v`, read `.vercel/project.json` if present. Name the live domain this repo deploys to. For this repo that domain is https://www.openhouseupdate.com unless `.vercel/project.json` or the Vercel project says otherwise.

2. **Scope the change.** `git diff` on the changed files. Decide which files belong to THIS change. The change description is: $ARGUMENTS. Anything else that is dirty: leave it, list it in the report.

3. **Branch.** If on `main` or `master`, create `ship/<yyyy-mm-dd>-<short-slug>` from the change description. Otherwise stay on the current branch.

4. **Check.** Detect the package manager from the lockfile (`pnpm-lock.yaml` means pnpm). Run install only if `node_modules` is missing. Run `lint` if that script exists, then `build`. This repo uses `pnpm lint` and `pnpm build`. Red means stop, show the error, and propose the fix. Do not push a broken build.

5. **Content gate.** If any user-visible copy changed: run the Fair Housing scan and confirm the CTA phone. Flag problems. Do not silently rewrite.
   - Flag protected-class references and these proxies: "safe neighborhood", "good schools", "family-friendly", "established community". Describe square footage, amenities, school names, and commute times instead.
   - Client CTA phone is 702-222-1964. 702-500-1942 is the professional line. Do not swap them.

6. **Commit + push.** `git add` the scoped files only. Clear commit message. `git push -u origin <branch>`.

7. **PR.** `gh pr create --fill` (or reuse the open PR). Get the Vercel preview URL from `gh pr checks` or `vercel ls`.

8. **Verify.** Wait for the preview to be Ready. Fetch it: HTTP 200, and the changed text or element is present. Retry up to 5 minutes.

9. **Report** these five lines:
   - repo
   - branch and PR link
   - build result
   - preview URL and verify result
   - Reply GO to merge to production.

On her "go": `gh pr merge --squash --delete-branch`, wait for the production deploy, fetch the live domain, confirm the change is live, report.

Do not merge, deploy to production, or send anything until she types GO.
