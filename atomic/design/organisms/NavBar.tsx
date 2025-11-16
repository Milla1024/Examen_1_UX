"use client";
import { useState } from "react";
import Button from "../atoms/Button";
import styles from "./NavBar.module.css";

interface NavBarProps {
  onCategoryClick: (category: string) => void;
}

export default function NavBar({ onCategoryClick }: NavBarProps) {
  const [showSearch, setShowSearch] = useState(false);

  const categories = [
    "Inicio",
    "Series", 
    "Películas",
    "Novedades populares",
    "Mi lista",
    "Explora por idiomas"
  ];

  const handleCategoryClick = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      "Inicio": "Destacado",
      "Series": "Series",
      "Películas": "Películas", 
      "Novedades populares": "Novedades populares",
      "Mi lista": "Mi lista",
      "Explora por idiomas": "Explora por idiomas"
    };
    
    const targetCategory = categoryMap[category];
    if (targetCategory) {
      onCategoryClick(targetCategory);
    }
  };

  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <h1>NETFLIS</h1>

        <div className={styles["button-container"]}>
          {categories.map((category) => (
            <Button 
              key={category}
              label={category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>

      <div className={styles["right-icons"]}>
        <div className={styles["search-container"]}>
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
        </div>

        <Button label="Niños" />

        <img
          src="/campanita.png"
          alt="campanita"
          style={{
            width: "30px",
            height: "30px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />

        <img
          src="/user.png"
          alt="usuario"
          style={{
            width: "35px",
            height: "35px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </div>
    </header>
  );
}