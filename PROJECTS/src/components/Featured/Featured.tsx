import Image from "next/image";
import React from "react";

import "./styles.scss";

import photo1 from "@/../public/photo-2.jpeg";
import photo2 from "@/../public/photo-1.jpeg";

function Featured() {
  return (
    <section data-scroll-section className="featured-section">
      <div className="featured-row-layout">
        <h6>green</h6>
        <Image src={photo1} alt="flowers" quality={75} data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <Image src={photo2} alt="flowers" quality={75} data-scroll />
      </div>
    </section>
  );
}

export default Featured;
