# Shiva — Creative Technologist & Interactive Portfolio

A continuous web experience featuring a dynamic mouse-scrub interactive video hero section (Page 1) seamlessly connected to the **How We Work** Process Timeline section (Page 2), followed by a minimalist editorial footer.

## ✨ Features

- **Page 1: Mainframe Interactive Hero**
  - Interactive mouse-scrub video playback reacting dynamically to cursor movement.
  - A.R.I.A (Adaptive Response Interface Agent) live typewriter effect with blinking cursor.
  - Interactive action pill buttons with instant clipboard email copy and visual feedback.
  - Smooth-scroll call-to-action button *"See how we operate ↓"* and bottom floating *"Explore How We Work"* prompt.
  - Adaptive frosted glass navigation bar with smooth contrast transitions across light and dark sections.

- **Page 2: Process Timeline ("How We Work")**
  - Complete 4-stage process roadmap:
    - **01 / DISCOVERY & STRATEGY** (25%)
    - **02 / DESIGN & INTERACTION** (50%)
    - **03 / DEVELOPMENT & MOTION** (75%)
    - **04 / TESTING & LAUNCH** (100%)
  - Scroll-triggered entrance animations powered by Framer Motion.
  - Interactive hover state: active cards illuminate in vibrant red (`#FF2A2A`) with glow effects and dynamic status badge updates.
  - Curved dashed timeline SVG with responsive coordinate projection.
  - Hand-drawn sketch accents: *"Follow the path"* directional arrow and *"Ready to be delivered!"* with custom SVG wavy underline.

- **Editorial Footer**
  - Shiva brand signature with live pulse status indicator for 2026 commissions.
  - Direct contact links, social navigation, and smooth *"TOP ↑"* scroll button.

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla CSS, Tailwind CSS CDN
- **Component Engine**: React 18 & ReactDOM 18
- **Motion & Icons**: Framer Motion (v11) & Lucide Icons
- **Typography**: Helvetica Now Display, Caveat (handwritten), Plus Jakarta Sans, JetBrains Mono
- **Backend / Server**: Node.js HTTP server (`server.js`) with Range support for video streaming

---

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sivakunche17/siva-3-webpage.git
   cd siva-3-webpage
   ```

2. Start the local server:
   ```bash
   npm start
   ```
   *(or `node server.js`)*

3. Open your browser at:
   ```
   http://localhost:3000
   ```

---

## 🌐 Deploying to Render

### Option 1: Automatic Blueprint (Recommended)
1. Log in to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Blueprint**.
3. Connect your repository: `https://github.com/sivakunche17/siva-3-webpage.git`.
4. Render will automatically detect `render.yaml` and configure the Web Service with:
   - **Environment**: Node
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
5. Click **Apply** to deploy!

### Option 2: Manual Web Service
1. Click **New +** > **Web Service**.
2. Select repository `siva-3-webpage`.
3. Configure the following settings:
   - **Name**: `siva-3-webpage`
   - **Language / Runtime**: `Node`
   - **Branch**: `main` (or `master`)
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
4. Click **Deploy Web Service**.
