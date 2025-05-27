import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function Clock() {
  const [time, setTime] = useState(new Date())
  const [timezone, setTimezone] = useState('America/New_York')

  const timezones = [
    { value: 'America/New_York', label: 'Eastern' },
    { value: 'America/Chicago', label: 'Central' },
    { value: 'America/Denver', label: 'Mountain' },
    { value: 'America/Los_Angeles', label: 'Pacific' },
    { value: 'UTC', label: 'UTC' },
    { value: 'Europe/London', label: 'London' },
    { value: 'Asia/Tokyo', label: 'Tokyo' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = () => {
    return time.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour12: true
    })
  }

  return (
    <div className="mb-6">
      <div className="text-2xl font-mono bg-gray-800 px-4 py-2 rounded-lg border border-gray-600">
        {formatTime()}
      </div>
      <select 
        value={timezone} 
        onChange={(e) => setTimezone(e.target.value)}
        className="mt-2 px-2 py-1 text-sm bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:border-blue-400"
      >
        {timezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <Clock />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  )
}
