import CarouselNetflix from "../atomic/design/organisms/CarouselNetflix";
import NavBar from "@/atomic/design/organisms/NavBar";
import './globals.css';

export default function Page() {
  const categories = [
    "Inicio",
    "Series",
    "Películas",
    "Novedades populares",
    "Mi lista",
    "Explora por idiomas"
  ];

  const baseItems = [
    { id: 1, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Título 1" },
    { id: 2, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Título 2" },
    { id: 3, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Título 3" },
    { id: 4, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Título 4" },
    { id: 5, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Título 5" },
    { id: 6, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Título 6" },
    { id: 7, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Título 6" },
    { id: 8, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Título 6" },
  ];

  return (
    <main style={{ background: '#0e0e0eff', minHeight: '100vh', color: '#fff', position: "relative" }}>

      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          padding: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavBar />
      </header>

      <section style={{ position: "relative" }}>
        <div style={{ width: "100%", height: "420px", position: "relative", overflow: "hidden" }}>

          <img
            src="https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.55)"
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "5%",
              transform: "translateY(-50%)",
              color: "#fff",
              maxWidth: "40%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <img
              src="/mondongoTitulo.png"
              alt="title"
              style={{ width: "50%", marginBottom: 10 }}
            />

            <div style={{ display: "flex", gap: 12 }}>
              <button
                style={{
                  background: "#fff",
                  color: "#000",
                  border: "none",
                  padding: "12px 26px",
                  borderRadius: 6,
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                }}
              >
                ▶ Reproducir
              </button>

              <button
                style={{
                  background: "rgba(109,109,110,0.7)",
                  color: "#fff",
                  border: "none",
                  padding: "12px 26px",
                  borderRadius: 6,
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                }}
              >
                ⓘ Más información
              </button>
            </div>
          </div>
        </div>
      </section>

      {categories.map((category, i) => (
        <CarouselNetflix
          key={i}
          title={category}
          items={baseItems}
        />
      ))}
      <footer style={{ backgroundColor: '#141414', color: '#B3B3B3', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="/audio-description" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Audio descriptivo</a>
            <a href="/investor-relations" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Relaciones con inversionistas</a>
            <a href="/legal-notices" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Avisos legales</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="/help-center" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Centro de ayuda</a>
            <a href="/careers" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Empleo</a>
            <a href="/cookie-preferences" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Preferencias de cookies</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="/gift-cards" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Tarjetas de regalo</a>
            <a href="/terms-of-use" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Términos de uso</a>
            <a href="/corporate-info" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Información corporativa</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="/press" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Prensa</a>
            <a href="/privacy" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Privacidad</a>
            <a href="/contact" style={{ textDecoration: 'none', color: '#B3B3B3' }}>Contáctanos</a>
          </div>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center', color: '#B3B3B3' }}>
          <p>&copy; 1997-2025 Netflis, Inc.</p>
        </div>
      </footer>
    </main>

  );
}
