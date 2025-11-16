import CarouselNetflix from "../atomic/design/organisms/CarouselNetflix";
import NavBar from "@/atomic/design/organisms/NavBar";
import './globals.css';

export default function Page() {
  const items = [
    { id: 1, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 1" },
    { id: 2, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 2" },
    { id: 3, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 3" },
    { id: 4, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 4" },
    { id: 5, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 5" },
    { id: 6, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 6" },
    { id: 7, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 7" },
    { id: 8, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 8" }
  ];

  return (
    <main style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: 20 }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <NavBar />
      </header>

        <section style={{ marginTop: 20, position: "relative" }}>
          <div style={{ width: '100%', height: 380, position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
            <img src="https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />

            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "5%",
                transform: "translateY(-40%)",
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

              {/* BOTONES */}
              <div style={{ display: "flex", gap: 12 }}>
                {/* Reproducir */}
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

                {/* Más información */}
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

        <CarouselNetflix title="Recomendados para ti" items={items} />
    </main>
  );
}
