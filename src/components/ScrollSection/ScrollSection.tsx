"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import "./styles.scss";

import Lenis from "@studio-freight/lenis";

function ScrollSection() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-90%"]);
  console.log(x);

  useEffect(function () {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="section-container" ref={ref}>
      <div className="scroll-wrapper">
        <motion.div style={{ x }} className="imgs-container">
          <Image
            src={"/gallery-4.jpeg"}
            alt="flowers"
            width={400}
            height={400}
            quality={40}
            className="img"
          />
          <Image
            src={"/gallery-3.jpeg"}
            alt="flowers"
            width={400}
            height={400}
            quality={40}
            className="img"
          />
          <Image
            src={"/gallery-2.jpeg"}
            alt="flowers"
            width={400}
            height={400}
            quality={40}
            className="img"
          />
          <Image
            src={"/gallery-1.jpeg"}
            alt="flowers"
            width={400}
            height={400}
            quality={40}
            className="img"
          />
          <Image
            src={"/gallery-4.jpeg"}
            alt="flowers"
            width={400}
            height={400}
            quality={40}
            className="img"
          />
          <Image
            src={"/photo-1.jpeg"}
            alt="flowers"
            width={400}
            height={400}
            quality={40}
            className="img"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ScrollSection;
