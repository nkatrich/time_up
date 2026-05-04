import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import CountdownPage from './assets/pages/Countdown.jsx'
import TimerPage from './assets/pages/Timer.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('timer')

  return (
    <div>
      {currentPage === 'countdown' ? <TimerPage /> : <CountdownPage />}
      <Menu onPageChange={setCurrentPage} />
    </div>
  )
}

export default App
