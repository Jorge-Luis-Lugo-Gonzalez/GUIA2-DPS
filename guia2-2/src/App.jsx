import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  const Equipos = ({equipos}) => {
  return (
    <div className = "equipos-container">
      <h2 className = 'title'>Equipos de futbol</h2>
      {
        equipos.map((equipo) => (
           <div key={equipo.id}>
            <h3 className='nameClub'>{equipo.nombre}</h3>
            <ul>
              {equipo.plantiulla.map((jugador) => (
                <li className = 'equipos-container' key={jugador.id}>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.altura} cm <br /></p>
                  <p>Peso: {jugador.peso} kg</p>
                </li>
              ))}
            </ul>
            </div>
        ))
      }
    </div>
  )
}

function App() {
  //Simular la obtencion de datos desde tu JSON
  const equiposData = [
    {
      id: 1,
      nombre: 'FC Barcelona',
      plantiulla: [
        { id: 1, nombre: 'Lionel Messi', altura: 170, peso: 72 },
        { id: 2, nombre: 'Gerard Piqué', altura: 194, peso: 85 },
      ],
    },
    {
      id: 2,
      nombre: 'Real Madrid',
      plantiulla: [
        { id: 1, nombre: 'Sergio Ramos', altura: 184, peso: 82 },
        { id: 2, nombre: 'Karim Benzema', altura: 185, peso: 81 },
      ],
    },
  ]

  return (
    <div className="App">
      <h1>Lista de Equipos de Futbol</h1>
      <Equipos equipos={equiposData} />
    </div>
  )

}

export default App
