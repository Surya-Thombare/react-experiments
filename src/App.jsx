import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExportToExcel from './components/exportExcel.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  const currentTime = () => {
    setInterval(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString())
    }, 1000);
  } 

useEffect(() => {
  currentTime();
},[time])

  return (
    <>
      
      <ExportToExcel />
      <p>{time}</p>

      <div>
      My github streak
      <p>&nbsp;<img align="center" src="https://streak-stats.demolab.com?user=Surya-Thombare&theme=dark&hide_border=true&card_width=300&hide_total_contributions=true" alt="surya-thombare" /></p>
      </div>
    </>
  )
}

export default App
