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
    </>
  )
}

export default App
