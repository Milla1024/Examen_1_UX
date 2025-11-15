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
    const amount = direction === "left" ? -400 : 400;
    containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
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
