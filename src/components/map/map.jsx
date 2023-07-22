import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useSelector } from "react-redux";

import s from "./map.module.css";

const customIcon = new Icon({
  iconUrl: "images/marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -20],
});

export const Map = () => {
  const position = [59.84660399, 30.2949639];
  const markers = useSelector((state) => state.rout.points);

  return (
    <MapContainer center={position} zoom={13} className={s.mapContainer}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.lenght !== 0 &&
        markers.map(({ position, popUpText }) => (
          <Marker position={position} key={position[0]} icon={customIcon}>
            <Popup>{popUpText}</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};
