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
