import './App.css'
import React, { useState, useEffect } from 'react';
import GeoJSON from 'ol/format/GeoJSON'
import MapWrapper from './components/MapWrapper'

function App() {
  const [ features, setFeatures ] = useState([])
  const [ testi, setTesti ] = useState('eh')

  // initialization - retrieve GeoJSON features from Mock JSON API get features from mock 
  //  GeoJson API (read from flat .json file in public directory)
  /* useEffect( () => {
    fetch('/mock_api.json')
      .then(response => response.json())
      .then( (fetchedFeatures) => {
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857'
        }
        const parsedFeatures = new GeoJSON().readFeatures(fetchedFeatures, wktOptions)
        setFeatures(parsedFeatures)

      })

  },[]) */

  return (
    <div className="App">
      <div className="app-label">
        <p>React Functional Components with OpenLayers Example</p>
        <p>Click the map to reveal location coordinate via React State</p>
      </div>
      <MapWrapper features={features} />
    </div>
  )
}

export default App
