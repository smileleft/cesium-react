import { useEffect, useRef } from "react";
import * as Cesium from "cesium";

function App() {
  const viewerRef = useRef(null);

  useEffect(() => {
    // Ion Token
    Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ION_ACCESS_TOKEN;

    // Viewer
    const viewer = new Cesium.Viewer(viewerRef.current, {
      animation: false,
      timeline: false,
      baseLayerPicker: true,
      geocoder: false,
      //terrainProvider: Cesium.createWorldTerrain(),
      terrain: Cesium.Terrain.fromWorldTerrain(),
      shadows: true,
      shouldAnimate: true,
    });

    // sample Entity (Drone)
    viewer.entities.add({
      id: "drone-1",
      name: "Demo Drone",
      position: Cesium.Cartesian3.fromDegrees(126.9780, 37.5665, 200),
      point: {
        pixelSize: 12,
        color: Cesium.Color.YELLOW,
      },
      label: {
        text: "Drone A",
        font: "14px sans-serif",
        fillColor: Cesium.Color.WHITE,
        outlineWidth: 2,
      },
    });

    // ZoomIn Seoul
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(126.9780, 37.5665, 2000),
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{ width: "100%", height: "100vh", display: "block" }}
    ></div>
  );
}

export default App;

