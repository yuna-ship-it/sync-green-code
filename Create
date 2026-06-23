# Create map-app folder
mkdir map-app

# Move all files into map-app (except .git)
mv src public package.json package-lock.json index.html vite.config.ts tsconfig.json tsconfig.node.json tailwind.config.js postcss.config.js map-app/

# Move any other config files
mv *.md *.json *.ts *.js map-app/ 2>/dev/null || true

# Check structure
ls
ls map-app/
git add .
git commit -m "Restructure: move files into map-app folder"
git push
#!/bin/bash
# Green Code Map App - Complete Setup Script Part 1

echo "🚀 Starting Green Code Map App setup..."

# Create directory structure
mkdir -p map-app/src/{components,data}
mkdir -p map-app/public/pdfs

# Configuration files
cat > map-app/package.json << 'EOF'
{
  "name": "green-code-states-map",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3",
    "vite": "^5.0.8"
  }
}
EOF

cat > map-app/vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/'
})
EOF

cat > map-app/tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF

cat > map-app/tsconfig.node.json << 'EOF'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
EOF

cat > map-app/tailwind.config.js << 'EOF'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00ff41',
        'cyber-cyan': '#00ffff',
        'cyber-magenta': '#ff00ff',
        'cyber-yellow': '#ffff00'
      },
      animation: {
        'marquee': 'marquee 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
}
EOF

cat > map-app/postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
EOF

cat > map-app/index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Green Code States Map</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

cat > map-app/src/main.tsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF

cat > map-app/src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: 'Courier New', monospace;
  color-scheme: dark;
  color: #00ff41;
  background-color: #000000;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #000000;
}

#root {
  width: 100%;
  min-height: 100vh;
}
EOF

cat > map-app/src/App.tsx << 'EOF'
import { useState } from 'react'
import ViewSwitcher from './components/ViewSwitcher'
import USMap from './components/USMap'
import SyncConsole from './components/SyncConsole'
import PDFLibrary from './components/PDFLibrary'
import MarqueeFooter from './components/MarqueeFooter'

export type ViewType = 'map' | 'console' | 'library'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('map')

  return (
    <div className="min-h-screen bg-black text-cyber-green flex flex-col">
      <header className="border-b-2 border-cyber-green p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-wider">GREEN CODE STATES</h1>
            <p className="text-xs text-cyber-cyan">REAL-TIME DEPLOYMENT TRACKING</p>
          </div>
          <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
        </div>
      </header>
      <main className="flex-1 p-4 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {currentView === 'map' && <USMap />}
          {currentView === 'console' && <SyncConsole />}
          {currentView === 'library' && <PDFLibrary />}
        </div>
      </main>
      <MarqueeFooter />
    </div>
  )
}

export default App
EOF

echo "✅ Created App.tsx"
echo "🎉 Configuration files created! Run create-map-app-components.sh next."
