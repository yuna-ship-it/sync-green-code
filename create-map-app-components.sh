#!/bin/bash
# Green Code Map App - Components Part 2

echo "🚀 Creating React components..."

# ViewSwitcher component
cat > map-app/src/components/ViewSwitcher.tsx << 'EOF'
import { ViewType } from '../App'
import { Map, Radio, Library } from 'lucide-react'

interface ViewSwitcherProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

export default function ViewSwitcher({ currentView, onViewChange }: ViewSwitcherProps) {
  const views: { id: ViewType; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'map', label: 'MAP', icon: <Map size={20} />, color: '#00ff41' },
    { id: 'console', label: 'SYNC', icon: <Radio size={20} />, color: '#00ffff' },
    { id: 'library', label: 'VAULT', icon: <Library size={20} />, color: '#ff00ff' },
  ]

  return (
    <div className="flex gap-2 border-2 border-cyber-green p-1">
      {views.map((view) => (
        <button
          key={view.id}
          onClick={() => onViewChange(view.id)}
          className="flex items-center gap-2 px-4 py-2 font-bold tracking-wider transition-all"
          style={{
            backgroundColor: currentView === view.id ? view.color : 'transparent',
            color: currentView === view.id ? '#000' : view.color,
            border: `2px solid ${currentView === view.id ? view.color : 'transparent'}`
          }}
        >
          {view.icon}
          {view.label}
        </button>
      ))}
    </div>
  )
}
EOF

# MarqueeFooter component
cat > map-app/src/components/MarqueeFooter.tsx << 'EOF'
export default function MarqueeFooter() {
  const stats = [
    'TOTAL WATER SAVED: 847M GAL',
    'ACTIVE COUNTIES: 247',
    'LEAK DETECTION ACCURACY: 94.7%',
    'AVG NRW REDUCTION: 19.4%',
    'ACTIVE SENSORS: 12,847',
    'DATA CENTERS MONITORED: 156'
  ]

  return (
    <footer className="border-t-2 border-cyber-green bg-black overflow-hidden">
      <div className="py-3 whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-cyber-cyan font-bold tracking-wider text-sm">
            {[...stats, ...stats].join(' • ')}
          </span>
        </div>
      </div>
    </footer>
  )
}
EOF

# USMap component
cat > map-app/src/components/USMap.tsx << 'EOF'
import { statesData } from '../data/statesData'

export default function USMap() {
  const activeStates = statesData.filter((s) => s.status === 'active')

  return (
    <div className="space-y-6">
      <div className="flex gap-6 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-cyber-green"></div>
          <span>ACTIVE ({activeStates.length})</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {activeStates.map((state) => (
          <div key={state.id} className="border-2 border-cyber-green p-4 bg-black">
            <h3 className="text-lg font-bold mb-2">{state.name}</h3>
            <div className="space-y-1 text-sm text-cyber-cyan">
              <p>Counties: {state.counties}</p>
              <p>Population: {state.population.toLocaleString()}</p>
              <p>Deployment: {state.deploymentDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
EOF

# SyncConsole component
cat > map-app/src/components/SyncConsole.tsx << 'EOF'
import { Activity } from 'lucide-react'

export default function SyncConsole() {
  const metrics = [
    { label: 'TOTAL COUNTIES', value: '247', change: '+12' },
    { label: 'ACTIVE SYSTEMS', value: '1,894', change: '+156' },
    { label: 'WATER SAVED (GAL)', value: '847M', change: '+42M' },
    { label: 'AVG NRW REDUCTION', value: '19.4%', change: '+1.2%' }
  ]

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="border-2 border-cyber-green p-4 bg-black">
            <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
            <p className="text-3xl font-bold text-cyber-green">{metric.value}</p>
            <p className="text-xs text-cyber-cyan mt-1">{metric.change} THIS WEEK</p>
          </div>
        ))}
      </div>
      <div className="border-2 border-cyber-cyan p-4 bg-black">
        <h2 className="text-xl font-bold mb-4 text-cyber-cyan flex items-center gap-2">
          <Activity size={24} />
          SYSTEM STATUS
        </h2>
        <p className="text-cyber-green">All systems operational</p>
      </div>
    </div>
  )
}
EOF

# PDFLibrary component
cat > map-app/src/components/PDFLibrary.tsx << 'EOF'
import { useState } from 'react'
import { FileText, Search } from 'lucide-react'

export default function PDFLibrary() {
  const [searchTerm, setSearchTerm] = useState('')

  const documents = [
    { id: '1', title: 'Green Code Technical Specification', date: '2024-01' },
    { id: '2', title: 'Newark NJ Pilot Program Report', date: '2023-12' },
    { id: '3', title: 'Acoustic Leak Detection Protocol', date: '2023-11' },
    { id: '4', title: 'ROI Framework: 5-Year Projections', date: '2023-10' },
    { id: '5', title: 'Texas County Implementation Guide', date: '2023-09' }
  ]

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-cyber-green" size={20} />
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-black border-2 border-cyber-green text-cyber-green"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {documents.map((doc) => (
          <div key={doc.id} className="border-2 border-cyber-green p-4 bg-black hover:bg-gray-900 transition-colors">
            <FileText className="text-cyber-magenta mb-2" size={24} />
            <h3 className="font-bold text-cyber-green mb-2">{doc.title}</h3>
            <p className="text-xs text-gray-500">{doc.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
EOF

# States data
cat > map-app/src/data/statesData.ts << 'EOF'
export interface StateData {
  id: string
  name: string
  abbr: string
  status: 'active' | 'pending' | 'inactive'
  counties: number
  population: number
  deploymentDate: string
}

export const statesData: StateData[] = [
  {
    id: 'NJ',
    name: 'New Jersey',
    abbr: 'NJ',
    status: 'active',
    counties: 21,
    population: 9288994,
    deploymentDate: '2023-06'
  },
  {
    id: 'OK',
    name: 'Oklahoma',
    abbr: 'OK',
    status: 'active',
    counties: 77,
    population: 3959353,
    deploymentDate: '2023-08'
  },
  {
    id: 'AZ',
    name: 'Arizona',
    abbr: 'AZ',
    status: 'active',
    counties: 15,
    population: 7151502,
    deploymentDate: '2023-09'
  },
  {
    id: 'NM',
    name: 'New Mexico',
    abbr: 'NM',
    status: 'active',
    counties: 33,
    population: 2117522,
    deploymentDate: '2023-10'
  },
  {
    id: 'TX',
    name: 'Texas',
    abbr: 'TX',
    status: 'active',
    counties: 254,
    population: 29145505,
    deploymentDate: '2023-11'
  },
  {
    id: 'MO',
    name: 'Missouri',
    abbr: 'MO',
    status: 'active',
    counties: 115,
    population: 6154913,
    deploymentDate: '2023-12'
  },
  {
    id: 'KS',
    name: 'Kansas',
    abbr: 'KS',
    status: 'active',
    counties: 105,
    population: 2937880,
    deploymentDate: '2024-01'
  },
  {
    id: 'NV',
    name: 'Nevada',
    abbr: 'NV',
    status: 'active',
    counties: 17,
    population: 3104614,
    deploymentDate: '2024-02'
  }
]
EOF

echo "✅ All components created!"
echo ""
echo "🎉 Setup complete! Now run in Codespaces terminal:"
echo "   bash create-map-app-files.sh"
echo "   bash create-map-app-components.sh"
echo "   git add map-app"
echo "   git commit -m 'Add complete map-app'"
echo "   git push origin main"
