import { Button } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// Fixing the default icon issue in Leaflet
import L from "leaflet";

const nutritionPosition = [35.12772535754392, 36.76750597479324];

const nutritionIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [32, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const openDirections = () => {
  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${nutritionPosition[0]},${nutritionPosition[1]}`,
  );
};

export default function NutritionMap() {
  return (
    <>
      <MapContainer
        center={nutritionPosition}
        zoom={20}
        scrollWheelZoom={false}
        style={{ height: "80vh", width: "100%", position: "relative" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={nutritionPosition} icon={nutritionIcon}>
          <Popup>عيادة عافية وسلام</Popup>
        </Marker>
        <Button
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            padding: "10px 20px",
            marginTop: "20px",
            position: "absolute",
            bottom: "20px",
            left: "20px",
            zIndex: 1000,
          }}
          onClick={openDirections}
        >
          احصل على الاتجاهات
        </Button>
      </MapContainer>
    </>
  );
}
