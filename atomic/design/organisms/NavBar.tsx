"use client";
import Button from "../atoms/Button";

export default function NavBar() {
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
        width: "100%",
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <h1 style={{ color: "#e50914", margin: 0 }}>NETFLIX</h1>

        {/* Menu buttons */}
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
        <Button>
          <img 
          src="../../../public/campanita.png"
          alt="campanita"
          style={{ width: 24, height: 24, objectFit: "cover" }}
              />
          </Button>
        <Button>
          <img 
          src="../../../public/user.png"
          alt="usuario"
          style={{ width: 24, height: 24, objectFit: "cover" }}
              />
          </Button>
         
      </div>
    </header>
  );
}