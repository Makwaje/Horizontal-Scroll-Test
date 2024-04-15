"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import dynamic from "next/dynamic";

import "../../styles/home.scss";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Featured from "../Featured/Featured";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import CustomCursor from "@/CustomCursor";

import useLocoScroll from "@/hooks/useLocoScroll";

const DynamicGallery = dynamic(() => import("@/components/Gallery/Gallery"), {
  ssr: false,
});

function Containers() {
  const ref = useRef<any>(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef<any>(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div
          data-scroll-container
          className="main-container"
          id="main-container"
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <DynamicGallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Containers;
