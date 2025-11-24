import CesiumViewer from "./CesiumViewer";
import * as Cesium from "cesium";

export default function VisualImageryScene() {
    function setup(viewer: Cesium.Viewer) {

        if (!viewer || viewer.isDestroyed()) return;
        
        (async () => {
            const baseLayer = await Cesium.ImageryLayer.fromProviderAsync(
                Cesium.IonImageryProvider.fromAssetId(3830183, {
                    // 2 = Cesium World Imagery
                    style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS,
                })
            );

            viewer.scene.imageryLayers.add(baseLayer);

            // Black Marble layer
            const blackMarble = await Cesium.ImageryLayer.fromProviderAsync(
                Cesium.IonImageryProvider.fromAssetId(3812)
            );
            blackMarble.alpha = 0.5;
            blackMarble.brightness = 2.0;

            viewer.scene.imageryLayers.add(blackMarble);

            // Cesium Logo Overlay
            const cesiumLogo = await Cesium.ImageryLayer.fromProviderAsync(
                Cesium.SingleTileImageryProvider.fromUrl(
                    "../images/Cesium_Logo_overlay.png",
                    {
                        rectangle: Cesium.Rectangle.fromDegrees(-75.0, 28.0, -67.0, 29.75),
                    }
                )
            );

            viewer.scene.imageryLayers.add(cesiumLogo);

            // Camera position
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(-75.0, 28.0, 5000000),
            });
        })();
    }

    return <CesiumViewer onViewerReady={setup} />;
}