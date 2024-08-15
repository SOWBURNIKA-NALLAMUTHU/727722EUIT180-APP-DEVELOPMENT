import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ center, zoom = 13, district }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>{district}</Popup>
      </Marker>
    </MapContainer>
  );
};

<<<<<<< HEAD
export default MapComponent;
=======
export default MapComponent;
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
