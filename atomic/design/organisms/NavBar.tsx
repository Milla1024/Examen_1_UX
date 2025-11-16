"use client";
import { useState } from "react";
import Button from "../atoms/Button";

export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "rgba(0,0,0,0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <h1 style={{ color: "#e50914", margin: 0 }}>NETFLIS</h1>

        <div style={{ display: "flex", gap: 18 }}>
          <Button label="Inicio" />
          <Button label="Series" />
          <Button label="Películas" />
          <Button label="Novedades populares" />
          <Button label="Mi lista" />
          <Button label="Explora por idiomas" />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
          <span
            style={{
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={() => setShowSearch(!showSearch)}
          >
            ⌕
          </span>

          <input
            type="text"
            placeholder="Títulos, personas, géneros"
            style={{
              background: "rgba(0,0,0,0.7)",
              border: "1px solid white",
              color: "white",
              padding: showSearch ? "6px 10px" : "6px 0px",
              borderRadius: 4,
              outline: "none",
              width: showSearch ? "220px" : "0px",
              opacity: showSearch ? 1 : 0,
              transition: "width 0.35s ease, opacity 0.25s ease, padding 0.35s ease", 
            }} 
          />
        </div>

        <Button label="Niños" />

        <img
          src="/campanita.png"
          alt="campanita"
          style={{ width: '18%', height: 30, objectFit: "fill", cursor: "pointer" }}
        />

        <img
          src="/user.png"
          alt="usuario"
          style={{ width: '40%', height: 38, objectFit: "fill", cursor: "pointer" }}
        />
      </div>
    </header>
  );
}
