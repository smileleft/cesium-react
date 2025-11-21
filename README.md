
# React + TypeScript + Vite

<https://cesium.com>

## create cesium account and get a token

<https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/>

## init project with React + Vite

```bash
npm create vite@latest cesium-viewer --template react
cd cesium-viewer
npm install cesium

# modify vite.config.js
import { defineConfig } from "vite";
import cesium from "vite-plugin-cesium";

export default defineConfig({
  plugins: [cesium()],
});
```

## modify index.css

```css
@import "cesium/Build/Cesium/Widgets/widgets.css";

html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
```

## run

```bash
npm run dev
```

## build

```bash
npm run build
```

## nodejs version

need to node version > 22.12
