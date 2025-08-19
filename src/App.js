import React from "react";
import { playNote, playScale } from "./piano";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎹 Virtual Pianist</h1>
      <button onClick={() => playScale()}>Play Scale</button>
      <div style={{ marginTop: "20px" }}>
        {["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"].map((note) => (
          <button
            key={note}
            onClick={() => playNote(note)}
            style={{ margin: "5px", padding: "10px 20px" }}
          >
            {note}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
