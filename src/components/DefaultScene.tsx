import CesiumViewer from "./CesiumViewer";
import * as Cesium from "cesium";

export default function DefaultScene() {
  function setup(viewer) {
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
      },
    });

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(126.9780, 37.5665, 2000),
    });
  }

  return <CesiumViewer onViewerReady={setup} />;
}