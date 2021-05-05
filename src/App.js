import React from 'react'
import ZipSearch from './components/ZipSearch'
// import { WeatherContextProvider } from './context/WeatherContext'

function App() {
  return (
    // <WeatherContextProvider>
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
          <ZipSearch/>
        </header>
      </div>
    // </WeatherContextProvider>
  )
}

export default App;