import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const element = (<>
  <h1>Hola, Mundo!</h1>
  <h2>Son las {new Date().toTimeString()}</h2>
  </>
);

  return (
    <main>
      <div className='card'></div>
      {element}
    </main>
  )
}

export default App
