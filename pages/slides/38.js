import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import Items_37 from "./Items_37";
import CopyClipboard from "./CopyClipboard";

function Slide_39() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/39/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/39/bg.jpg",
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
    // let t = setTimeout(() => {
    //   router.push("/slides/38");
    // }, 10000);
    return () => {
      //   clearTimeout(t);
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
      marginTop: "2rem",
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
        <title>Incrediwear Interactive - 38</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main
          initial={{
            backgroundPosition: "center",
            backgroundSize: "200%",
          }}
          animate={{
            backgroundPosition: "top center",
            backgroundSize: "100%",
          }}
          transition={{ delay: 0, duration: 1 }}
          style={Styles.slide}
          className={`slidePage slidePage`}
        >
          <div className={`container slider-39 isSlideContentWrapper`}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="jsx-456089764 text size-2xl color-standard">
                Thank you!<div style={Styles.blankMargin}>&nbsp;</div>
                <em className="jsx-d0a156eb4f78f1fb">
                  {name != "" ? name : "JOHN"}
                </em>
              </span>
              <span className="jsx-456089764 text size-l color-standard">
                {" "}
                , for taking your time to watch this presentation And{" "}
                <em>THANK YOU</em> for helping to share <em>Incrediwear</em>{" "}
                with the <em>world</em>!
              </span>
            </motion.div>
            <div style={Styles.blankMargin}>&nbsp;</div>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="jsx-977875503 container bg-none isSlideContentWrapper bottomContainer absolute lastSlideBottom"
          >
            <div className="jsx-1098696574 ">
              <div className="">
                <span className="jsx-2589450523 text size-s color-standard">
                  Share this interactive presentation with others
                </span>
                <div className="jsx-1632397927">&nbsp;</div>
                <span className="jsx-3898692377 text size-s color-standard">
                  <span className="jsx-d0a156eb4f78f1fb copyText">
                    http://retail-education.incrediwear.com/
                  </span>
                </span>
              </div>
              <CopyClipboard />
            </div>
          </motion.div>

          <MenuSite next={39} islast={true} islight={true} previous={37} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_39;
