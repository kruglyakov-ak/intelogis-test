import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { Icon } from "leaflet";
import { useSelector } from "react-redux";

import s from "./map.module.css";
import { useEffect, useState } from "react";

const customIcon = new Icon({
  iconUrl: "images/marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -20],
});

export const Map = () => {
  const [map, setMap] = useState(null);
  const markers = useSelector((state) => state.rout.points);
  const polyline = useSelector((state) => state.rout.routPolyline);

  const position = [59.938732, 30.316229];
  const zoom = 11;

  useEffect(() => {
    if (map && markers.length !== 0) {
      map.fitBounds(markers.slice().map((marker) => marker.position));
    }
  }, [map, markers]);

  return (
    <MapContainer
      ref={setMap}
      center={position}
      zoom={zoom}
      className={s.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.length !== 0 &&
        markers.map(({ position, popUpText }, index) => (
          <Marker
            position={position}
            bounds={position}
            key={index}
            icon={customIcon}
          >
            <Popup>
              <h3>Точка №{index + 1}</h3>
              <p>{popUpText} </p>
            </Popup>
          </Marker>
        ))}

      <Polyline positions={polyline} />
    </MapContainer>
  );
};
