# Nephorion Website

The Nephorion organization website. Built with **React 18**, **Vite**, and styled with modern dark-theme aesthetics.

## 🎯 What is Nephorion?

Nephorion builds **AI-powered financial tools** — from automated portfolio management to custom stock-picking models. The website showcases our products and services.

## 🛠 Tech Stack

- **Frontend:** React 18.3.1 + React Router 6
- **Build Tool:** Vite 7.3.1 (ultrafast build & HMR)
- **Styling:** styled-components 6.1.11 + Bootstrap 5
- **Analytics:** Google Analytics 4 (react-ga4)
- **Deployment:** Google Cloud Storage (GCS) via GitHub Actions CI/CD

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+** (Vite requires Node 20.19+ or 22.12+)
- **npm** (comes with Node)
- **git**

### Local Development

1. **Clone the repo:**
   ```bash
   git clone git@github.com:nephorion/website.git
   cd website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   - Dev server starts at `http://localhost:3000`
   - Hot Module Replacement (HMR) enabled — changes auto-reload instantly
   - Startup time: ~98ms (Vite is fast!)

4. **Navigate:**
   - Homepage: `/`
   - Catalogue: `/catalogue`

### Building for Production

```bash
npm run build
```

Outputs optimized build to `build/` directory:
- `build/index.html` — Main entry point
- `build/assets/` — Bundled JS/CSS (minified + gzipped)
- `build/` — Static files (webp images, logos, etc.)

### Previewing Production Build Locally

```bash
npm run preview
```

Serves the `build/` directory locally to verify production output.

## 📦 Project Structure

```
nephorion/website/
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles
│   ├── pages/
│   │   ├── HomePage.jsx      # Landing page
│   │   └── CataloguePage.jsx # Products page
│   ├── components/
│   │   ├── PageHeader.jsx    # Header with logo + nav
│   │   ├── Heading.jsx       # Neon title
│   │   ├── CatalogueCard.jsx # Product card
│   │   └── ...
│   └── utils/
│       └── analytics.jsx     # GA4 tracking
├── public/
│   ├── index.html            # HTML template
│   ├── background.webp       # Hero background
│   ├── logo.png              # Brand logo
│   ├── favicon.ico
│   └── manifest.json         # PWA manifest
├── vite.config.js            # Vite build config
├── package.json              # Dependencies
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline
└── README.md                 # This file
```

## 🚢 Deployment

### Automatic Deployment (via CI/CD)

The website **automatically deploys to Google Cloud Storage** when you push to `master`:

1. **Push to master:**
   ```bash
   git push origin master
   ```

2. **GitHub Actions triggers:**
   - `.github/workflows/deploy.yml` runs automatically
   - Checks out code
   - Installs Node 20
   - Runs `npm run build`
   - Authenticates to GCP via Workload Identity Federation (OIDC)
   - Uploads `build/` contents to GCS bucket

3. **Live immediately:**
   - No manual deployment needed
   - Website updates within 2-3 minutes

### CI/CD Pipeline Details

**Workflow:** `.github/workflows/deploy.yml`

**Triggers on:** Push to `master`

**Steps:**
1. Checkout code
2. Setup Node.js 20
3. Install deps (`npm ci`)
4. Build (`npm run build`)
5. Authenticate to GCP via OIDC (Workload Identity Federation)
6. Deploy `build/` to GCS bucket (`website-427022`)

**Secrets required:**
- `GCP_PROJECT_ID` — GCS bucket name
- `GCP_WORKLOAD_IDENTITY_PROVIDER` — OIDC provider path
- `GCP_SERVICE_ACCOUNT` — Service account email

### Manual Deployment (if needed)

If you need to deploy manually:

```bash
# Build locally
npm run build

# Authenticate to GCP
gcloud auth login
gcloud config set project website-427022

# Deploy to GCS bucket
gcloud storage cp --recursive build/** gs://website-427022
```

## 📋 Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🔒 Security

### Recent Updates
- ✅ Migrated from Create React App → Vite (eliminated 1321 vulnerable dependencies)
- ✅ Patched 29 npm vulnerabilities via `npm audit fix`
- ✅ Remaining 7 low-risk vulnerabilities are locked behind old CRA toolchain

See [`Dependabot`](https://github.com/nephorion/website/security/dependabot) for full vulnerability status.

### Labels for Issues

Use these labels to prioritize work:
- 🔴 `priority:high` — Urgent, Scout will route immediately
- 🟡 `priority:medium` — Important, medium timeframe
- 🔵 `priority:low` — Nice-to-have, backlog

## 📚 Resources

- [Vite Docs](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)
- [styled-components Docs](https://styled-components.com)
- [Google Cloud Storage](https://cloud.google.com/storage)
- [GitHub Actions](https://github.com/features/actions)

## 🤝 Contributing

1. Create a branch off `master`: `git checkout -b feature/your-feature`
2. Make changes and test locally: `npm run dev`
3. Build and verify: `npm run build`
4. Commit with descriptive message
5. Push and open a Pull Request
6. Merge after review
7. CI/CD auto-deploys to GCS

## 📝 Notes

- **No need to commit `build/` directory** — it's generated during CI/CD
- **Hot reload in dev mode** — changes instantly reflect in the browser
- **Production builds are optimized** — minified JS/CSS + gzipped
- **Vite startup is ~98ms** — massively faster than Create React App

---

**Maintained by:** Dev Agent  
**Last Updated:** 2026-03-08  
**Status:** ✅ Production-ready with automated CI/CD deployment
