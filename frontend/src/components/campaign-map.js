// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// // Define the icon for the marker
// const icon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// const CampaignMap = ({ lat, lng, locationName }) => {
//   return (
//     <MapContainer
//       center={[lat, lng]} // Center the map on the campaign's coordinates
//       zoom={13}           // Set an appropriate zoom level
//       style={{ height: '250px', width: '100%', borderRadius: '10px' }} // Match the style from your layout
//     >
//       {/* Tile layer from OpenStreetMap (free) */}
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />

//       {/* Marker with popup */}
//       <Marker position={[lat, lng]} icon={icon}>
//         <Popup>
//           <div style={{ textAlign: "center" }}>
//             <strong>{locationName}</strong>
//             <p>Details about this location can go here.</p>
//           </div>
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default CampaignMap;

import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

function CampaignMap() {
  const campaign = {
      lat: 33.6169, // Replace with the actual latitude
      lng: 72.9720, // Replace with the actual longitude
      name: "Central Park, New York City",
  };
  const position = [campaign.lat, campaign.lng];

  return (
    <MapContainer center={position} zoom={10} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} />
    </MapContainer>
  );
}

export default CampaignMap;

