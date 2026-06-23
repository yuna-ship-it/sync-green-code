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
