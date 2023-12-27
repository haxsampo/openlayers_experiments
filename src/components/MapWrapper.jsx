import React, { useState, useEffect, useRef } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { transform } from 'ol/proj'
import OSM from 'ol/source/OSM.js'
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer'
import ImageWMS from 'ol/source/ImageWMS'
import Overlay from 'ol/Overlay.js'

function MapWrapper() {
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();
  const [selectedCoord, setSelectedCoord] = useState();
  const mapElement = useRef();
  const mapCenter = [2800000, 10700000];
  const mapRef = useRef()
  mapRef.current = map

  useEffect(() => {
    const initialFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    })

    const eramaat = new ImageLayer({
      source: new ImageWMS({
        url: 'https://paikkatiedot.ymparisto.fi/geoserver/inspire_ps/wms/PS.ProtectedSitesEramaaAlue?service=WMS&version=1.3.0',
        params: { layers: 'PS.ProtectedSitesEramaaAlue' },
        crossOrigin: 'Anonymous',
      }),
    })

    eramaat.setOpacity(0.4)

    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        eramaat,
      ],
      view: new View({
        projection: 'EPSG:3857',
        center: mapCenter,
        zoom: 7,
      }),
      controls: [],
    })

    initialMap.on('click', handleMapClick)
    setMap(initialMap)
    setFeaturesLayer(initialFeaturesLayer)
  }, [])

  const handleMapClick = (event) => {
    const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel)
    const transformedCoord = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326')
    setSelectedCoord(transformedCoord)
    console.log(transformedCoord)
  }

  return (
    <div>
      <div ref={mapElement} className="map-container"></div>
    </div>
  )
}

export default MapWrapper