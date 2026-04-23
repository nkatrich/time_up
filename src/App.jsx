import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Menu.jsx'

function App() {
  const [time, setTime] = useState(10)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning && time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [time, isRunning])

  const start = () => setIsRunning(true)
  const reset = () => {
    setIsRunning(false)
    setTime(10)
  }

  return (
    <div className="app">
      <h1 className='counter'>Countdown: {time}</h1>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={reset}>Reset</button>
      <Button />
    </div>
  )
}

export default App
