import { useState } from "react";
import DefaultScene from "./components/DefaultScene";
import AirplaneScene from "./components/AirplaneScene";
import "./index.css";

export default function App() {
  const [tab, setTab] = useState("default");

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          background: "#1e1e1e",
          color: "white",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h3>Scenes</h3>
        <button
          style={{ width: "100%", marginBottom: "10px" }}
          onClick={() => setTab("default")}
        >
          default screen
        </button>
        <button style={{ width: "100%" }} onClick={() => setTab("airplane")}>
          Airplane Trajectory
        </button>
      </div>

      {/* Main Viewer */}
      <div style={{ flex: 1 }}>
        {tab === "default" && <DefaultScene />}
        {tab === "airplane" && <AirplaneScene />}
      </div>
    </div>
  );
}