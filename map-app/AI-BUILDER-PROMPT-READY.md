# 🤖 COPY THIS ENTIRE PROMPT FOR AI BUILDERS

**Platform:** v0.dev / Claude / Bolt.new  
**Project:** Interactive US States Deployment Map  
**Authorization:** YUNA-ANCHOR-001

---

## 🎯 WHAT TO BUILD

Build an interactive, terminal-inspired SVG map showing all 50 U.S. states for the Green Code Protocol deployment portal. The map will showcase 9 active "symbiotic sectors" with detailed metrics and 41 pending states awaiting authorization.

**Tech Stack:** React + TypeScript + Tailwind CSS  
**Target:** silxi.pages.dev (Cloudflare Pages)  
**Theme:** Terminal/cyberpunk aesthetic with green/cyan accents on dark background

---

## 🎨 DESIGN SYSTEM

### Colors (Terminal Theme)
```css
--bg-dark: #0a0a0a;           /* Deep black background */
--border: #333333;             /* Dark grey borders */
--terminal-green: #00ff00;     /* Bright green (active elements) */
--zkp-cyan: #00ffff;           /* Bright cyan (ROI highlights) */
--active-state: #10b981;       /* Emerald (state fills) */
--active-glow: rgba(16, 185, 129, 0.3); /* Glow effect */
--pending-gray: #444444;       /* Grey (pending states) */
--text-primary: #e5e7eb;       /* Light grey text */
--text-secondary: #9ca3af;     /* Medium grey text */
```

### Typography
- **Font:** "Fira Code", "Courier New", monospace
- **Headings:** 1.5rem - 2rem, font-weight 700
- **Body:** 0.875rem - 1rem, font-weight 400
- **ROI Numbers:** 1.25rem, cyan color, font-weight 700

### Animations
- Pulsing glow on active states (2s loop)
- Smooth hover transitions (300ms)
- Modal slide-in from right (300ms ease-out)
- Continuous marquee scroll (60s linear)
- Tooltip fade in/out (150ms)

---

## ✨ FEATURES TO IMPLEMENT

### 1. Interactive SVG Map of All 50 States

**Active States (9 total):** CA, CO, FL, IL, NV, NY, OK, TX, VA
- Fill: `#10b981` with 20% opacity
- Stroke: `#00ff00` with 2px width
- Add pulsing animation on these states
- On hover: Increase opacity to 40%, add glow shadow

**Pending States (41 remaining):**
- Fill: `#444444` (solid grey)
- Stroke: `#666666` with 1px width
- On hover: Slight brightness increase

**Make all states clickable!**

### 2. Hover Tooltip (Active States Only)

When hovering over CA, CO, FL, IL, NV, NY, OK, TX, or VA, show tooltip:

```
┌────────────────────┐
│ California         │
│ 20-Year ROI: 913:1 │
└────────────────────┘
```

- Position above state or follow cursor
- Background: `#1a1a1a`
- Border: 1px solid `#00ff00`
- Padding: 12px
- Border-radius: 8px
- Smooth fade-in/fade-out (150ms)

### 3. Active State Modal (Click on Active States)

Full-screen or side panel modal with terminal styling:

**Header:**
```
═══════════════════════════════════════════════════════
[ISO-G Standard 2.0] :: REGIONAL DEPLOYMENT METRICS
═══════════════════════════════════════════════════════
```

**Content (use grid layout):**
```
STATE: {state_name}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 POPULATION SERVED
   {population} citizens

💰 DEPLOYMENT COST
   ${deployment_cost}

💧 5-YEAR WATER SAVED
   {water_saved} acre-feet

🪙 WBT TOKENS GENERATED
   {wbt_tokens} tokens

⚡ 20-YEAR ENERGY ROI
   >>> {roi} <<<  ← HIGHLIGHT THIS IN CYAN, LARGER FONT

🔋 ENERGY INDEPENDENCE
   {energy_independence}

👷 JOBS CREATED
   {jobs_created} positions

🎯 KEY CHALLENGE ADDRESSED
   {key_challenge}

[CLOSE] [DOWNLOAD SIMULATION PDF]
```

**Styling:**
- Max-width: 600px
- Background: `#0a0a0a`
- Border: 2px solid `#00ff00`
- Header background: `#10b981`
- ROI line: `#00ffff` (cyan), bold, 1.25rem
- Close button: Terminal green with hover effect
- Download button: Links to PDF file

### 4. Pending State Modal (Click on Pending States)

Simple message modal:

```
╔════════════════════════════════════════════╗
║  STATUS: PENDING DEPLOYMENT                ║
║                                            ║
║  This region has not yet been authorized   ║
║  for symbiotic sector deployment.          ║
║                                            ║
║  AWAITING ANCHOR AUTHORIZATION             ║
║  Code: YUNA-ANCHOR-001                     ║
║                                            ║
║  Expected Timeline: Q3 2026                ║
╚════════════════════════════════════════════╝

              [CLOSE]
```

### 5. Scrolling Marquee Footer

Fixed to bottom of viewport, continuously scrolling:

```
🌎 NATIONAL DEPLOYMENT SUMMARY :: Total Investment: $891.94M :: 5-Year Water Saved: 204.49M acre-ft :: WBT Tokens: 238.5B :: Average 20-Year ROI: 962:1 :: Protocol: ISO-G v2.1.0 :: Authorization: YUNA-ANCHOR-001 :: 🌎
```

- Background: `#1a1a1a`
- Border-top: 1px solid `#00ff00`
- Text: Cyan for numbers, light grey for labels
- Animation: Continuous scroll left (60s)
- Font-size: 0.875rem

---

## 📊 DATA - JSON PAYLOAD FOR 9 ACTIVE STATES

```json
{
  "active_states": [
    {
      "state": "California",
      "abbr": "CA",
      "population": "39.2 million",
      "deployment_cost": "$251.36 million",
      "water_saved_5yr": "31.92 million acre-feet",
      "wbt_tokens": "37.2 billion",
      "roi_20yr": "913:1",
      "energy_independence": "Solar-neuromorphic self-sufficiency",
      "jobs_created": "8,470",
      "key_challenge": "Seismic pipe failure prediction (30-day advance warning)",
      "pdf_url": "/pdfs/California-Simulation.pdf"
    },
    {
      "state": "Texas",
      "abbr": "TX",
      "population": "30.0 million",
      "deployment_cost": "$192.00 million",
      "water_saved_5yr": "46.7 million acre-feet",
      "wbt_tokens": "54.5 billion",
      "roi_20yr": "2,465:1",
      "energy_independence": "Ogallala Aquifer preservation",
      "jobs_created": "6,480",
      "key_challenge": "Groundwater depletion mitigation",
      "pdf_url": "/pdfs/Texas-Simulation.pdf"
    },
    {
      "state": "Florida",
      "abbr": "FL",
      "population": "22.0 million",
      "deployment_cost": "$141.12 million",
      "water_saved_5yr": "17.98 million acre-feet",
      "wbt_tokens": "20.9 billion",
      "roi_20yr": "260:1",
      "energy_independence": "Hurricane-resilient infrastructure",
      "jobs_created": "4,752",
      "key_challenge": "Sinkhole detection using 140 Hz sensing",
      "pdf_url": "/pdfs/Florida-Simulation.pdf"
    },
    {
      "state": "New York",
      "abbr": "NY",
      "population": "19.5 million",
      "deployment_cost": "$125.10 million",
      "water_saved_5yr": "15.94 million acre-feet",
      "wbt_tokens": "18.6 billion",
      "roi_20yr": "745:1",
      "energy_independence": "Urban grid-failure resilience",
      "jobs_created": "4,212",
      "key_challenge": "150-year-old pipe infrastructure replacement",
      "pdf_url": "/pdfs/New-York-Simulation.pdf"
    },
    {
      "state": "Illinois",
      "abbr": "IL",
      "population": "12.6 million",
      "deployment_cost": "$80.76 million",
      "water_saved_5yr": "10.30 million acre-feet",
      "wbt_tokens": "12.0 billion",
      "roi_20yr": "1,204:1",
      "energy_independence": "Chicago Metro self-sufficiency",
      "jobs_created": "2,722",
      "key_challenge": "Lake Michigan watershed protection",
      "pdf_url": "/pdfs/Illinois-Simulation.pdf"
    },
    {
      "state": "Virginia",
      "abbr": "VA",
      "population": "8.7 million",
      "deployment_cost": "$55.68 million",
      "water_saved_5yr": "7.11 million acre-feet",
      "wbt_tokens": "8.3 billion",
      "roi_20yr": "624:1",
      "energy_independence": "Federal capital region security",
      "jobs_created": "1,878",
      "key_challenge": "Chesapeake Bay ecosystem protection",
      "pdf_url": "/pdfs/Virginia-Simulation.pdf"
    },
    {
      "state": "Colorado",
      "abbr": "CO",
      "population": "5.8 million",
      "deployment_cost": "$37.12 million",
      "water_saved_5yr": "47.42 million acre-feet",
      "wbt_tokens": "55.3 billion",
      "roi_20yr": "8,123:1",
      "energy_independence": "Headwaters sovereignty (80% snowpack)",
      "jobs_created": "1,252",
      "key_challenge": "Colorado River headwaters control (serves 40M downstream)",
      "pdf_url": "/pdfs/Colorado-Simulation.pdf"
    },
    {
      "state": "Oklahoma",
      "abbr": "OK",
      "population": "3.9 million",
      "deployment_cost": "$25.02 million",
      "water_saved_5yr": "3.19 million acre-feet",
      "wbt_tokens": "3.7 billion",
      "roi_20yr": "147:1",
      "energy_independence": "First statewide pilot verified",
      "jobs_created": "843",
      "key_challenge": "Rural water security",
      "pdf_url": "/pdfs/Oklahoma-Simulation.pdf"
    },
    {
      "state": "Nevada",
      "abbr": "NV",
      "population": "3.1 million",
      "deployment_cost": "$19.86 million",
      "water_saved_5yr": "23.96 million acre-feet",
      "wbt_tokens": "27.9 billion",
      "roi_20yr": "7,734:1",
      "energy_independence": "Driest-state water sovereignty",
      "jobs_created": "669",
      "key_challenge": "Lake Mead dependency (4-10 inches rainfall/year)",
      "pdf_url": "/pdfs/Nevada-Simulation.pdf"
    }
  ],
  "national_totals": {
    "total_population": "144.8 million",
    "total_cost": "$891.94 million",
    "total_water_5yr": "204.49 million acre-feet",
    "total_wbt": "238.5 billion",
    "average_roi": "962:1",
    "total_jobs": "31,278",
    "coverage_percent": "47% of U.S. population, 25% of counties"
  }
}
```

---

## 🗺️ SVG MAP REQUIREMENTS

### Create a Simplified US Map SVG

You can use a simplified 50-state SVG map. Each state should be a separate `<path>` element with:
- Unique `id` (e.g., `id="california"`, `id="texas"`)
- Class name: `"state"` for all, plus `"active"` for the 9 active states
- onClick handler to open appropriate modal
- onMouseEnter/onMouseLeave for tooltips

**Example structure:**
```jsx
<svg viewBox="0 0 1000 600" className="w-full h-auto">
  <path
    id="california"
    className="state active"
    d="M 100,200 L 150,250 ..." // SVG path data
    onClick={() => handleStateClick('California')}
    onMouseEnter={() => setHoveredState('California')}
    onMouseLeave={() => setHoveredState(null)}
  />
  {/* ... other 49 states ... */}
</svg>
```

### Styling with Tailwind + Custom CSS

```css
.state {
  fill: #444444;
  stroke: #666666;
  stroke-width: 1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.state:hover {
  filter: brightness(1.2);
}

.state.active {
  fill: rgba(16, 185, 129, 0.2);
  stroke: #00ff00;
  stroke-width: 2;
  animation: pulse 2s infinite;
}

.state.active:hover {
  fill: rgba(16, 185, 129, 0.4);
  filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.5));
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
```

---

## 📱 RESPONSIVE DESIGN

- **Desktop (1920px):** Full-width map, side panel modals
- **Tablet (768px):** Scaled map, full-screen modals
- **Mobile (375px):** Vertical scroll, full-screen modals, touch-friendly

Ensure:
- Minimum touch target size: 44px x 44px
- Modal close buttons clearly visible
- Marquee text readable on small screens
- Map scales proportionally

---

## ♿ ACCESSIBILITY

- Add `aria-label` to all interactive elements
- Ensure keyboard navigation works (Tab, Enter, Escape)
- Color contrast meets WCAG AA standards
- Focus indicators visible on all interactive elements
- Screen reader friendly state names and data

---

## 🎯 USER INTERACTIONS

### State Hover (Active Only)
1. User hovers over CA, CO, FL, IL, NV, NY, OK, TX, or VA
2. Cursor changes to pointer
3. Tooltip appears showing state name + ROI
4. State opacity increases
5. Mouse leave → tooltip fades out

### State Click (Active)
1. User clicks active state
2. Modal slides in from right
3. Display full metrics from JSON
4. Highlight ROI in cyan
5. Show close button and PDF download link
6. Click close or press Escape → modal closes

### State Click (Pending)
1. User clicks any of the 41 pending states
2. Pending modal appears
3. Show "Awaiting Authorization" message
4. Display expected timeline
5. Click close → modal closes

---

## 🚀 TECHNICAL IMPLEMENTATION NOTES

### Component Structure
```
<App>
  <Header />
  <USMap>
    <svg>{/* 50 state paths */}</svg>
    {hoveredState && <Tooltip />}
    {selectedState?.isActive && <ActiveStateModal />}
    {selectedState && !selectedState.isActive && <PendingModal />}
  </USMap>
  <MarqueeFooter />
</App>
```

### State Management (React Hooks)
```typescript
const [hoveredState, setHoveredState] = useState<string | null>(null);
const [selectedState, setSelectedState] = useState<StateData | null>(null);
const [showModal, setShowModal] = useState(false);

const activeStates = ['CA', 'CO', 'FL', 'IL', 'NV', 'NY', 'OK', 'TX', 'VA'];

const handleStateClick = (stateAbbr: string) => {
  const stateData = getStateData(stateAbbr);
  setSelectedState(stateData);
  setShowModal(true);
};
```

---

## 📋 CHECKLIST FOR AI BUILDER

When building this, please ensure:

- [ ] All 50 states are present in SVG map
- [ ] 9 active states have green glow and are clickable
- [ ] 41 pending states are grey and clickable
- [ ] Hover tooltips show on active states only
- [ ] Active state modal displays all JSON data correctly
- [ ] ROI is highlighted in cyan in modal
- [ ] Pending state modal shows authorization message
- [ ] Marquee footer scrolls continuously
- [ ] All animations are smooth (300ms transitions)
- [ ] Responsive on mobile/tablet/desktop
- [ ] Keyboard navigation works (Escape closes modals)
- [ ] Terminal theme colors are correct
- [ ] Fira Code or monospace font is used
- [ ] PDF download buttons link correctly
- [ ] Close buttons work on all modals

---

## 🎨 EXAMPLE MODAL LAYOUT (Active State)

```jsx
<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
  <div className="bg-[#0a0a0a] border-2 border-[#00ff00] rounded-lg max-w-2xl w-full m-4 p-6 font-mono">
    
    {/* Header */}
    <div className="bg-[#10b981] text-white px-4 py-3 -mx-6 -mt-6 mb-6 rounded-t-lg">
      <h2 className="text-xl font-bold">[ISO-G Standard 2.0] :: REGIONAL DEPLOYMENT METRICS</h2>
    </div>
    
    {/* State Name */}
    <div className="text-2xl font-bold text-[#00ff00] mb-4">
      STATE: {state.state}
    </div>
    <div className="border-b border-[#333333] mb-6"></div>
    
    {/* Metrics Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#e5e7eb]">
      
      <div>
        <div className="text-[#9ca3af] text-sm mb-1">📊 POPULATION SERVED</div>
        <div className="text-lg font-semibold">{state.population} citizens</div>
      </div>
      
      <div>
        <div className="text-[#9ca3af] text-sm mb-1">💰 DEPLOYMENT COST</div>
        <div className="text-lg font-semibold">{state.deployment_cost}</div>
      </div>
      
      <div>
        <div className="text-[#9ca3af] text-sm mb-1">💧 5-YEAR WATER SAVED</div>
        <div className="text-lg font-semibold">{state.water_saved_5yr}</div>
      </div>
      
      <div>
        <div className="text-[#9ca3af] text-sm mb-1">🪙 WBT TOKENS GENERATED</div>
        <div className="text-lg font-semibold">{state.wbt_tokens}</div>
      </div>
      
      {/* ROI - HIGHLIGHTED */}
      <div className="col-span-full bg-[#00ffff] bg-opacity-10 border border-[#00ffff] rounded p-4 my-2">
        <div className="text-[#9ca3af] text-sm mb-1">⚡ 20-YEAR ENERGY ROI</div>
        <div className="text-3xl font-bold text-[#00ffff]">
          >>> {state.roi_20yr} <<<
        </div>
      </div>
      
      <div>
        <div className="text-[#9ca3af] text-sm mb-1">🔋 ENERGY INDEPENDENCE</div>
        <div className="text-lg">{state.energy_independence}</div>
      </div>
      
      <div>
        <div className="text-[#9ca3af] text-sm mb-1">👷 JOBS CREATED</div>
        <div className="text-lg font-semibold">{state.jobs_created} positions</div>
      </div>
      
      <div className="col-span-full">
        <div className="text-[#9ca3af] text-sm mb-1">🎯 KEY CHALLENGE ADDRESSED</div>
        <div className="text-lg">{state.key_challenge}</div>
      </div>
    </div>
    
    {/* Buttons */}
    <div className="flex gap-4 mt-8">
      <button 
        onClick={onClose}
        className="flex-1 bg-[#10b981] hover:bg-[#059669] text-white px-6 py-3 rounded transition-colors"
      >
        CLOSE
      </button>
      <a 
        href={state.pdf_url}
        className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 rounded transition-colors text-center"
        download
      >
        DOWNLOAD SIMULATION PDF
      </a>
    </div>
  </div>
</div>
```

---

## 🎯 FINAL NOTES

**Project Name:** Green Code Protocol - State Deployment Map  
**Portal:** silxi.pages.dev  
**Authorization Code:** YUNA-ANCHOR-001  
**Protocol:** ISO-G Standard v2.1.0  
**Effective Date:** March 2026

**Aesthetic:** Terminal/cyberpunk, dark background, green/cyan accents, monospace fonts, glowing effects, smooth animations

**Key Message:** This map demonstrates proof-of-scale for the Green Code Protocol — 9 states deployed covering 47% of the U.S. population with an average 962:1 energy ROI.

---

## 🚀 NOW BUILD IT!

Copy this entire prompt and paste it into:
- **v0.dev** - Will generate React code instantly
- **Claude** - Will build step-by-step with code
- **Bolt.new** - Will create full project structure

**Expected Result:** A beautiful, interactive terminal-styled map with working tooltips, modals, and scrolling footer showcasing the Green Code Protocol's state deployments.

Good luck! 🎉
