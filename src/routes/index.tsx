import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function Clock() {
  const [time, setTime] = useState(new Date())
  const [timezone, setTimezone] = useState('America/New_York')

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  const formatTime = (date: Date, tz: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date)
  }


  return (
    <div className="mb-6">
      <div className="text-2xl font-mono bg-gray-800 px-4 py-2 rounded-lg border border-gray-600">
        {formatTime(time, timezone)}
      </div>
      <select 
        value={timezone} 
        onChange={(e) => setTimezone(e.target.value)}
        className="mt-2 px-2 py-1 bg-gray-700 text-white border border-gray-600 rounded text-sm"
      >
        <option value="America/New_York">Eastern</option>
        <option value="America/Chicago">Central</option>
        <option value="America/Denver">Mountain</option>
        <option value="America/Los_Angeles">Pacific</option>
        <option value="Europe/London">London</option>
        <option value="Asia/Tokyo">Tokyo</option>
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
