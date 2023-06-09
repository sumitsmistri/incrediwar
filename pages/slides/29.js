import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";

function Slide_30() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/30/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/30/bg.jpg",
    logo: "/incrediwear_logo.webp",
    title_1: `<em>Thanks</em><br/>${name != "" ? name : "JOHN"},`,
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
      router.push("/slides/30");
    }, 20000);
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
      marginTop: "3rem",
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
        <title>Incrediwear Interactive - 29</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main
          initial={{
            backgroundPosition: "center",
            backgroundSize: "150%",
          }}
          animate={{
            backgroundPosition: "top right",
            backgroundSize: "100%",
          }}
          transition={{ delay: 0, duration: 1 }}
          style={Styles.slide}
          className={`slidePage slidePage`}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1 }}
            className="slide-header"
            style={{ textAlign: "center", marginTop: "1rem" }}
          >
            <span
              className="text size-xxl"
              style={{ textShadow: "-4px 0px 1px #ff7d00" }}
            >
              RECOVERY
            </span>
          </motion.div>
          <motion.div
            initial={{ marginLeft: 50, opacity: 0 }}
            animate={{ marginLeft: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className={`container bg-white slider-29 isSlideContentWrapper`}
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <motion.img
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                src={slideData.logo}
                style={{ maxWidth: "100%" }}
              />
              <motion.span
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
                className="jsx-456089764 text size-l color-standard"
              >
                <div style={Styles.blankMargin}></div>
                Enhances the <em>body&apos;s</em> innate ability to{" "}
                <em>heal</em>. We decrease muscle load <em>post-workout</em> by{" "}
                <em className="size-xl">40%</em>.
              </motion.span>
            </motion.div>
          </motion.div>

          <MenuSite next={30} islight={false} previous={28} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_30;
