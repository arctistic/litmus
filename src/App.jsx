import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-3xl font-bold h-screen flex items-center justify-center">
        <span className="text-blue-500">LIT</span>
        <span className="text-red-500">MUS</span>
      </div>
    </>
  )
}

export default App
