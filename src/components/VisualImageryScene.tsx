import CesiumViewer from "./CesiumViewer";
import * as Cesium from "cesium";

export default function VisualImageryScene() {
    function setup(viewer: Cesium.Viewer) {

        if (!viewer || viewer.isDestroyed()) return;



    }

    return <CesiumViewer onViewerReady={setup} />;
}