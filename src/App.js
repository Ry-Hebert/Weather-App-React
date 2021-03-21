import React from 'react'
import { WeatherContextProvider } from './context/WeatherContext'

function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    </WeatherContextProvider>
  )
}

export default App;