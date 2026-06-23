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
