// import React from "react"

// const MapComponent = () => {
//   return <div>hello</div>
// }

// export default MapComponent

import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { LatLngExpression } from "leaflet"

interface ILocation {
  position: LatLngExpression
  text: string
}
const MapComponent = () => {
  // Define multiple positions as an array of LatLngExpression
  const positions = [
    {
      position: [27.70625542812409, 85.34013055149305],
      text: "Head office",
    },
    {
      position: [28.691780723777264, 80.6208759083275],
      text: "Branch office",
    },
  ] as ILocation[]

  return (
    <MapContainer
      center={[28.553104412291884, 83.9275572921903]}
      zoom={7}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Render a Marker for each position */}
      {positions.map((position, index) => (
        <Marker
          key={index}
          position={position.position}>
          <Popup>{position.text}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapComponent
