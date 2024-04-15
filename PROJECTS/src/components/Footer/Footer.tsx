"use client";
import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";

import gsap from "gsap";

// @ts-ignore
import SplitText from "../../utils/Split3.min.js";

import SectionHeader from "../SectionHeader/SectionHeader";
import useOnScreen from "@/utils/useOnScreen";

import cn from "classnames";

function Footer() {
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
        const split = new SplitText("#location-text", {
          type: "lines",
          linesClass: "lineChildren",
        });

        gsap.fromTo(
          split.lines,
          {
            y: 200,
          },
          {
            duration: 1,
            y: 0,

            stagger: 0.25,
            ease: "power2",
          }
        );
      }
    },
    [reveal]
  );
  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made in" />
      <h1
        ref={ref}
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
      >
        Rio de Janeiro
      </h1>
    </section>
  );
}

export default Footer;
