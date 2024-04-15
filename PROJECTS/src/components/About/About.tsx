"use client";
import "./styles.scss";
import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import gsap from "gsap";

import cn from "classnames";
// @ts-ignore
import SplitText from "../../utils/Split3.min.js";
import useOnScreen from "../../utils/useOnScreen";

function About() {
  const ref = useRef<any>(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(
    function () {
      if (reveal) {
        const split = new SplitText("#headline", {
          type: "lines",
        });

        gsap.to(split.lines, {
          duration: 1,
          y: -20,
          opacity: 1,
          stagger: 0.2,
          ease: "power2",
        });
      }
    },
    [reveal]
  );
  return (
    <section data-scroll-section className="about-section">
      <SectionHeader title="about" />
      <p className={cn({ "is-reveal": reveal })} ref={ref} id="headline">
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of &apos;making&apos; require
        dialogue. The full purpose of the Flirty Flowers blog is to encourage
        and inspire. We value art, we value insight, and we value opinion.
      </p>
    </section>
  );
}

export default About;
