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
