import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import RangeInput from "./RangeInput";
import MenuSite from "./MenuSite";

function Slide_02() {
  const [fistans, setfistans] = useState(false);
  const [secondans, setsecondans] = useState(false);

  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();

  const audio = useAudio("/slides/05/t05.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/05/bg.jpg",
    title_1: "<em>To start,</em><br/>",
    title_2:
      "here are 2 <em>critical questions</em><br/> about the customers in your store:",
  });

  useEffect(() => {
    setDim();

    window.addEventListener("resize", function (e) {
      setDim();
    });

    setTimeout(() => {
      audio.play();
    }, 1000);
    console.log("Sdf");
    // setTimeout(() => {
    //   router.push("/slides/06");
    // }, 35000);

    return () => {
      audio.pause();
    };
  }, []);

  // useEffect(() => {
  //   if (fistans && secondans) {
  //     console.log(fistans, secondans);

  //     setTimeout(() => {
  //       router.push("/slides/06");
  //     }, 2000);
  //     return () => {
  //       audio.pause();
  //     };
  //   }
  // }, [fistans, secondans]);

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
        <title>Incrediwear Interactive - 05</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage `}>
          <div className={`container bg-none color-white slider-5`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span
                className="text size-2xl color-standard "
                dangerouslySetInnerHTML={{ __html: slideData.title_1 }}
              ></span>
              <span
                className="text size-m color-standard "
                dangerouslySetInnerHTML={{ __html: slideData.title_2 }}
              ></span>
            </motion.div>
            <div style={{ marginBottom: "8rem" }}></div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 6, duration: 0.5 }}
            >
              <span className="text size-s color-standard ">
                1. Guess what <em>percent of people</em> coming into
                <br /> your store will have an injury or
                <br /> chronic pain <em>this year</em>?
              </span>
              <RangeInput ischanged={setfistans} />
            </motion.div>
            <div style={Styles.blankMargin}></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 16, duration: 0.5 }}
            >
              <span className="text size-s color-standard ">
                2.What <em>percentage of customers</em> in your store
                <br /> want to <em>prevent</em>
                injuries, perform better, &<br /> recover faster?
              </span>
              <RangeInput ischanged={setsecondans} />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 26, duration: 0.5 }}
              className="jsx-6aa79e3230815163 horizontalEnd"
              style={{ paddingRight: "10rem" }}
            >
              <div className="jsx-6aa79e3230815163">
                <div className="">
                  <button
                    className="jsx-dd33fbfc98d4eb22 button size-l color-transparent"
                    onClick={() => router.push("/slides/06")}
                  >
                    <div className="jsx-dd33fbfc98d4eb22 bg"></div>
                    <span className="jsx-2945311205 text size-m color-standard">
                      Next
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <MenuSite next={6} previous={4} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_02;
