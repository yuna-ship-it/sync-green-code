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
