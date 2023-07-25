import { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: "images/marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -20],
});

export const Markers = ({ map }) => {
  const markers = useSelector((state) => state.route.points);
  const isMarkersEmpty = markers.length !== 0;

  useEffect(() => {
    if (map && isMarkersEmpty) {
      map.fitBounds(markers.slice().map((marker) => marker.position));
    }
  }, [isMarkersEmpty, map, markers]);

  return (
    isMarkersEmpty &&
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
    ))
  );
};
