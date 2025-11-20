import CesiumViewer from "./CesiumViewer";
import * as Cesium from "cesium";

export default function AirplaneScene() {
  function setup(viewer) {
    // flight route
    const route = [
      { time: 0, lon: 126.97, lat: 37.56, alt: 300 },
      { time: 10, lon: 127.00, lat: 37.57, alt: 600 },
      { time: 20, lon: 127.05, lat: 37.60, alt: 900 },
      { time: 30, lon: 127.10, lat: 37.62, alt: 1200 },
      { time: 40, lon: 127.15, lat: 37.65, alt: 1500 },
    ];

    // trajectory
    const start = Cesium.JulianDate.now();
    const positionProperty = new Cesium.SampledPositionProperty();

    route.forEach((p) => {
      const time = Cesium.JulianDate.addSeconds(start, p.time, new Cesium.JulianDate());
      const pos = Cesium.Cartesian3.fromDegrees(p.lon, p.lat, p.alt);
      positionProperty.addSample(time, pos);
    });

    viewer.clock.startTime = start;
    viewer.clock.stopTime = Cesium.JulianDate.addSeconds(start, 40, new Cesium.JulianDate());
    viewer.clock.currentTime = start;
    viewer.clock.shouldAnimate = true;

    // airplane model entity
    const airplane = viewer.entities.add({
      id: "airplane-1",
      position: positionProperty,
      orientation: new Cesium.VelocityOrientationProperty(positionProperty),
      model: {
        uri: "https://assets.cesium.com/125041/flight.glb",
        minimumPixelSize: 64,
        maximumScale: 200,
      },
      path: {
        material: Cesium.Color.CYAN,
        width: 3,
      },
    });

    viewer.trackedEntity = airplane;

    // initial camera positon
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(126.95, 37.55, 5000),
    });
  }

  return <CesiumViewer onViewerReady={setup} />;
}