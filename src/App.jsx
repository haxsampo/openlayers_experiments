import './App.css'
import React, { useState } from 'react';
import MapWrapper from './components/MapWrapper'

function App() {
  const [ features, setFeatures ] = useState([])

  return (
      <MapWrapper features={features} />
  )
}

export default App
