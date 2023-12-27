import './App.css'
import React, { useState } from 'react';
import MapWrapper from './components/MapWrapper'
import ControlPanel from './components/ControlPanel';

function App() {
  const [ features, setFeatures ] = useState([])

  return (
    <div className="App">
      <div className="app-label">
        <ControlPanel/>
      </div>
      <MapWrapper features={features} />
    </div>
  )
}

export default App
