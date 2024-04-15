"use client";

import React, { useEffect, useRef, useState } from "react";

import gallery1 from "../../../public/gallery-1.jpeg";
import gallery2 from "../../../public/gallery-2.jpeg";
import gallery3 from "../../../public/gallery-3.jpeg";
import gallery4 from "../../../public/gallery-4.jpeg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";

import "./styles.scss";
import Image, { type StaticImageData } from "next/image";
import useOnScreen from "@/utils/useOnScreen";

const images = [
  {
    src: gallery1,
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: gallery2,
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: gallery3,
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: gallery4,
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

const mainEl = document.querySelector("#main-container");

function Gallery() {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef<any>(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: mainEl,
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section className="section-wrapper gallery-wrap" data-scroll-section>
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>

        {images.map((img, i) => (
          <GalleryItem
            key={img.title}
            index={i}
            {...img}
            updateActiveImage={(index: number) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}

type GalleryItemProps = {
  src: StaticImageData;
  category: string;
  subtitle: string;
  title: string;
  updateActiveImage: Function;
  index: number;
};

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}: GalleryItemProps) {
  const ref = useRef<any>();
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(
    function () {
      if (onScreen) {
        updateActiveImage(index);
      }
    },
    [onScreen, index, updateActiveImage]
  );
  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div />
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h6 className="gallery-info-subtitle">{subtitle}</h6>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{
            backgroundImage: `url(${src.src})`,
          }}
        ></div>
      </div>
      <div />
    </div>
  );
}

export default Gallery;
