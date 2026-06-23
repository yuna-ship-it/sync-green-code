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
