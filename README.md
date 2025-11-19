# React + TypeScript + Vite
https://cesium.com

## create cesium account and get a token
https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/

## init project with React + Vite
```
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