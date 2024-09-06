"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import cls from "./image-slideshow.module.css";

import balm from "@/assets/balsamo.jpg";
import balmMint from "@/assets/mint balm.jpg";
import candle from "@/assets/candle.jpg";
import marbleSoap from "@/assets/marble soap.jpg";

const images = [
  { image: balm, alt: "A delicious, juicy burger" },
  { image: balmMint, alt: "A delicious, spicy curry" },
  { image: candle, alt: "Steamed dumplings" },
  { image: marbleSoap, alt: "Mac and cheese" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cls.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? cls.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
