"use client";
import React, { useRef } from "react";
import styles from "./carouselNetflix.module.css";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
}

interface Props {
  title: string;
  items: CarouselItem[];
}

export default function CarouselNetflix({ title, items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const amount = direction === "left" ? -400 : 400;

    container.scrollBy({ left: amount, behavior: "smooth" });

    setTimeout(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft <= 0) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <div className={styles.carouselWrapper}>
      <h2 className={styles.carouselTitle}>{title}</h2>

      <div className={styles.buttons}>
        <button onClick={() => scroll("left")} className={styles.navBtn}>
          ◀
        </button>
        <button onClick={() => scroll("right")} className={styles.navBtn}>
          ▶
        </button>
      </div>

      <div className={styles.carousel} ref={containerRef}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <p className={styles.label}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
