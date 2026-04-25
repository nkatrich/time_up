import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Menu.jsx'
import CountdownPage from './assets/pages/Countdown.jsx'
import TimerPage from './assets/pages/Timer.jsx'

function App() {
  const [time, setTime] = useState(10)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    
  }, )

  return (
    <div>
      <TimerPage />
      <Button />
    </div>
  )
}

export default App
