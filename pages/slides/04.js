import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import MenuSite from "./MenuSite";
import { useSelector } from "react-redux";

function Slide_02() {
  const bgs = useSelector((state) => state.incrediwear.bgs);
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();

  const audio = useAudio("/slides/04/s04.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: bgs[3],
    title_1: "It's going to be <em>interactive</em",
    title_2: "For taking a few minutes to watch this presentation",
  });

  useEffect(() => {
    setDim();

    window.addEventListener("resize", function (e) {
      setDim();
    });

    setTimeout(() => {
      audio.play();
    }, 1000);

    let t = setTimeout(() => {
      router.push("/slides/05");
    }, 6000);

    return () => {
      clearTimeout(t);
      audio.pause();
    };
  }, []);

  const Styles = {
    slide: {
      backgroundImage: `url(${slideData.bg})`,
    },
    blankMargin: {
      height: "0px",
      marginBottom: "0rem",
      marginLeft: "0rem",
      marginRight: "0rem",
      marginTop: "4rem",
    },
  };

  const setDim = () => {
    let h = document.body.clientHeight;
    let w = (baseImgSize.w * h) / baseImgSize.h;

    if (document.body.clientWidth <= w) {
      w = document.body.clientWidth;
      let ch = (baseImgSize.h * w) / baseImgSize.w;
      h = ch;
    }

    // PAGE
    let sp = document.querySelector(".slidePage");
    if (sp) {
      sp.style.width = `${w}px`;
      sp.style.height = `${h}px`;
    }

    //FONT size
    let cFS = (baseFontSize * h) / baseImgSize.h;
    let b = document.getElementsByTagName("html")[0];
    b.style.fontSize = `${cFS}px`;
    return { w, h, cFS };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Incrediwear Interactive - 04</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage`}>
          <div className={`container bg-none slider-4`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span
                className="text size-2xl color-standard"
                dangerouslySetInnerHTML={{ __html: slideData.title_1 }}
              ></span>
            </motion.div>
            <div style={Styles.blankMargin}></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="jsx-1883533983 text size-m color-standard">
                <div className="jsx-66bca6dac4267587">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4rem"
                    height="4rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="jsx-66bca6dac4267587"
                  >
                    <line
                      x1="4"
                      y1="12"
                      x2="20"
                      y2="12"
                      className="jsx-66bca6dac4267587"
                    ></line>
                    <line
                      x1="4"
                      y1="6"
                      x2="20"
                      y2="6"
                      className="jsx-66bca6dac4267587"
                    ></line>
                    <line
                      x1="4"
                      y1="18"
                      x2="20"
                      y2="18"
                      className="jsx-66bca6dac4267587"
                    ></line>
                  </svg>
                  You may control the presentation
                  <br />
                  by clicking on the icon at the top
                  <br />
                  right of your screen
                </div>
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 20, x: -100, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <MenuSite next={5} previous={3} />
          </motion.div>
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_02;
