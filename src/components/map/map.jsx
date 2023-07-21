import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import s from "./map.module.css";

const markers = [
  { position: [59.84660399, 30.2949639], popUpText: "Точка 1" },
  { position: [59.82934196, 30.42423701], popUpText: "Точка 2" },
  { position: [59.83567701, 30.38064206], popUpText: "Точка 3" },
];

const customIcon = new Icon({
  iconUrl: "images/marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const Map = () => {
  const position = [59.84660399, 30.2949639];

  return (
    <MapContainer center={position} zoom={13} className={s.mapContainer}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map(({ position, popUpText }) => (
        <Marker position={position} key={position[0]} icon={customIcon}>
          <Popup>{popUpText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
