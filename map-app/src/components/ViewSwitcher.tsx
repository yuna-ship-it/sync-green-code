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
