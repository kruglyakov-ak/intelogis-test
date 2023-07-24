import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { useSelector } from "react-redux";
import { useState } from "react";

import { Markers } from "../markers/markers";

import "leaflet/dist/leaflet.css";
import s from "./map.module.css";

const position = [59.938732, 30.316229];
const zoom = 11;

export const Map = () => {
  const [map, setMap] = useState(null);
  const polyline = useSelector((state) => state.rout.routPolyline);

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

      <Markers map={map} />

      <Polyline positions={polyline} />
    </MapContainer>
  );
};
