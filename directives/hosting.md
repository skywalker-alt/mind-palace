# Universal Hosting & Deployment Directive

This directive instructs the agent on how to deploy updates to any project workspace by pushing changes to a remote Git repository (e.g. GitHub), which triggers automated builds on connected cloud hosting platforms (e.g., Vercel, Netlify, Cloudflare Pages).

## Goal
Detect the project stack, validate changes locally, and securely commit and push code to the remote repository.

## Inputs
- None directly, but operates on modified source code files in the active workspace.

## Tools to use
- Dynamic tool/command execution based on the detected stack (e.g., `npm run build` for Node, `pytest` for Python).
- `git` via the terminal (`run_command`) for staging, committing, and pushing code.

## Logic

1. **Detect the Stack**:
   - Check the project root for package files:
     - If `package.json` exists, identify package manager (`npm`, `yarn`, `pnpm`).
     - If `requirements.txt` or `pyproject.toml` exists, identify Python tools (`pip`, `poetry`).
     - If only static assets exist (no build configuration), treat as a static website.

2. **Validate Locally**:
   - Run stack-specific linting/validation commands (e.g. `npm run lint` or `npm run build`).
   - Confirm that the build process exits with code `0`. If errors occur, resolve them locally before proceeding.

3. **Check Git Configuration**:
   - Verify if a Git repository is initialized: `git status`
   - If not initialized:
     - Run `git init`.
     - Request the user's remote Git repository URL and add it: `git remote add origin <url>`.

4. **Verify Ignored Files**:
   - Inspect `.gitignore` to ensure `.env`, `.tmp/`, `node_modules/`, and private credential files are ignored.
   - Run `git diff --cached` or check statuses to confirm no secrets are staged.

5. **Stage, Commit, & Push**:
   - Stage the changes: `git add .`
   - Commit with a descriptive message: `git commit -m "feat: deploy updates"`
   - Identify the default remote branch (typically `main` or `master`).
   - Push changes: `git push origin <branch-name>`

6. **Confirm and Notify**:
   - Inform the user that the code has been pushed.
   - Advise the user to monitor their hosting provider's build pipeline (e.g., Vercel / Netlify dashboard).

## Edge Cases
- **No Git Remote**: If no remote origin is configured, prompt the user for the Git repository URL.
- **Merge Conflicts**: If pushing is rejected due to remote updates, run `git pull` or ask the user for assistance to resolve conflicts safely.
- **Git Authentication Failure**: If the push command fails with access/credentials errors, prompt the user to configure their Git credentials/SSH keys.
