import Image from 'next/image';
import CarouselNetflix from "../atomic/design/organisms/CarouselNetflix";
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
    { id: 4, image: "https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg", title: "Recomendado 8" }
  ];

  return (
    <main style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: 20 }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <h1 style={{ color: '#e50914', margin: 0 }}>Netflis</h1>
      </header>

      <section style={{ marginTop: 20 }}>
        <div style={{ width: '100%', height: 380, position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
          <img src="https://i.ytimg.com/vi/16uJ-jxcKHo/hqdefault.jpg" alt="hero" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
        </div>
      </section>

      <CarouselNetflix title="Recomendados para ti" items={items} />
    </main>
  );
}
