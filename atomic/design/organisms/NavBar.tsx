"use client";
import { useState } from "react";
import Button from "../atoms/Button";
import styles from "./NavBar.module.css"; // Importar el archivo CSS del componente

export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <h1 style={{ color: "#e50914", margin: 0, fontSize: "1.6rem" }}>NETFLIS</h1>

        {/* Contenedor de botones, con clase para estilo y responsividad */}
        <div className={styles["button-container"]}>
          <Button label="Inicio" />
          <Button label="Series" />
          <Button label="Películas" />
          <Button label="Novedades populares" />
          <Button label="Mi lista" />
          <Button label="Explora por idiomas" />
        </div>
      </div>

      {/* Contenedor de los íconos a la derecha */}
      <div className={styles["right-icons"]}>
        <span
          style={{
            fontSize: "24px",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={() => setShowSearch(!showSearch)}
        >
          ⌕
        </span>

        <input
          type="text"
          placeholder="Títulos, personas, géneros"
          className={`${styles["search-bar"]} ${showSearch ? styles.expanded : ""}`}
        />

        <Button label="Niños" />

        <img
          src="/campanita.png"
          alt="campanita"
          style={{
            width: "18%",
            height: 30,
            objectFit: "contain",
            cursor: "pointer",
            maxWidth: "40px",
            maxHeight: "40px",
          }}
        />

        <img
          src="/user.png"
          alt="usuario"
          style={{
            width: "40%",
            height: 38,
            objectFit: "contain",
            cursor: "pointer",
            maxWidth: "40px",
            maxHeight: "40px",
          }}
        />
      </div>
    </header>
  );
}
