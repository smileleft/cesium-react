import { useEffect, useRef } from "react";
import * as Cesium from "cesium";

export default function CesiumViewer({ onViewerReady }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ION_ACCESS_TOKEN;

    const viewer = new Cesium.Viewer(viewerRef.current, {
      animation: false,
      timeline: false,
      baseLayerPicker: false,
      geocoder: false,
      terrain: Cesium.Terrain.fromWorldTerrain(),
      shadows: true,
      shouldAnimate: true,
    });

    if (onViewerReady) onViewerReady(viewer);

    return () => viewer.destroy();
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    ></div>
  );
}