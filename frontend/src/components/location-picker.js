// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-draw/dist/leaflet.draw.css';
// import L from 'leaflet';

// function LocationPicker({ onLocationSelect }) {
//     const [position, setPosition] = useState(null);

//     // Handle map click to pick a location
//     useMapEvents({
//         click(e) {
//             const { lat, lng } = e.latlng;
//             setPosition([lat, lng]);
//             onLocationSelect(lat, lng);
//         },
//     });

//     return position ? <Marker position={position} /> : null;
// }

// function CampaignMap({ onLocationSelect }) {
//     const defaultPosition = [33.6169, 72.9720]; // Default map center

//     return (
//         <MapContainer center={defaultPosition} zoom={10} style={{ height: '400px', width: '100%' }}>
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <LocationPicker onLocationSelect={onLocationSelect} />
//         </MapContainer>
//     );
// }

// export default CampaignMap;
