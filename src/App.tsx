import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React loo" />
        </a>
      </div>
      <h1>Oleksandr Reactor</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          КЛІКАЙ {count}
        </button>
        <p>
          Клікай і не будь байдужим до світу навколо!
        </p>

        
      </div>
    </>
  )
}

export default App
