# donespaghetti.com

Company site for Done Spaghetti LLC: home page, plus the single Privacy Policy and Terms of Service shared by every app we ship.

- **Stack:** Vite + React 19 + TypeScript + React Router, prerendered to static HTML at build time
- **Hosting:** Firebase Hosting
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)

## Pages

| URL | Source |
| --- | --- |
| `/` | `src/pages/Home.tsx` |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` |
| `/terms-of-service` | `src/pages/TermsOfService.tsx` |

`/home`, `/privacy`, and `/terms` 301-redirect to the pages above (see `firebase.json`). Keep `/privacy-policy` and `/terms-of-service` stable: they are linked from Google Play listings.

## Common changes

**Ship a new app:** add it to `apps` in `src/content/site.ts`. It shows up on the home page and in the Privacy Policy's "Apps covered" section. If the app uses an SDK or service the policy doesn't list yet (see "Third-party services we use"), update the policy too.

**Edit a policy:** edit the page component and bump `PRIVACY_EFFECTIVE_DATE` / `TERMS_EFFECTIVE_DATE`.

## Development

```bash
nvm use            # Node 22
npm ci
npm run dev        # http://localhost:5173
npm test
npm run build      # outputs dist/ with prerendered HTML per page
npm run serve      # serves dist/ via the Firebase Hosting emulator (redirects, headers, 404)
```

`npm run build` does three things: a client build, an SSR build of `src/entry-server.tsx`, and `scripts/prerender.mjs`, which writes `index.html`, `privacy-policy.html`, `terms-of-service.html`, and `404.html` with full content and per-page `<title>`/meta. The client then hydrates them.

## Deployment

- **Pull request:** lint, typecheck, test, and build, then deploy to a Firebase preview channel. The preview URL is posted on the PR and expires after 7 days.
- **Push to `main`:** same checks, then deploy to the live site.

Authentication is keyless: GitHub OIDC → Workload Identity Federation (pool `github`, provider `donespaghetti-site`, restricted to this repo) → service account `github-deploy@donespaghetti.iam.gserviceaccount.com` (Firebase Hosting Admin). No secrets are stored in the repo. Firebase project: `donespaghetti` (see `.firebaserc`).
