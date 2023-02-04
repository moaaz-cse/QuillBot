import { useEffect, useState } from "react";
import UpgradeToPremium from "../upgrade-to-premium-text/UpgradeToPremium";
import accessImage from "../../assets/access-all-modes.svg";
import comparisionTable from "../../assets/comparision-table.svg";
import increaseProductivity from "../../assets/increase-productivity.svg";
import plagiarism from "../../assets/scan-plag.svg";
import classes from "./ImageText.module.css";

const sliderData = [
  {
    id: 1,
    heading: "Increase your productivity",
    paragraph: "Paraphrase more text at once to finish writing faster.",
    img: increaseProductivity,
  },
  {
    id: 2,
    heading: "Access all modes",
    paragraph: "Get maximum control over how you paraphrase.",
    img: accessImage,
  },
  {
    id: 3,
    heading: "Scan for plagiarism",
    paragraph:
      "Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.",
    img: plagiarism,
  },
  {
    id: 4,
    heading: "Compare all mode outputs at once",
    paragraph: "Paraphrase in and compare outputs from all seven modes.",
    img: comparisionTable,
  },
];

const ImageText = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [randomImage, setRandomImage] = useState(increaseProductivity);

  const imageSlider = () => {
    const image = [];
    const heading = [];
    sliderData.map((index) => {
      image.push(index.img);
      heading.push(index.heading);
    });
    let index = 0;
    let width = 0;
    const slideImage = () => {
      setRandomImage(image[index]);
      const line = document.getElementById(heading[index]);
      const interval = setInterval(function () {
        width += 0.5;
        line.style.width = width + "%";
        if (width > 100) {
          width = 0;
          line.style.width = width + "%";
          clearInterval(interval);
        }
      }, 18);
      index = (index + 1) % image.length;
      setTimeout(slideImage, 4000);
    };
    slideImage();
  };
  useEffect(() => {
    imageSlider();
  }, []);

  return (
    <>
      <UpgradeToPremium />
      <section
        className={
          classes.backgroundbanner + " " + classes["slider-text-image"]
        }
      >
        <div>
          {selectedImage && <img src={selectedImage} className={classes['slider-img']} alt="Respective feature image"/>}
          {!selectedImage && randomImage && <img src={randomImage} className={classes['slider-img']} alt="Respective feature image"/>}
        </div>
        <div>
          {sliderData.map((index) => (
            <div
              key={index.id}
              className={classes["slider-text"]}
              onClick={() => {
                setSelectedImage(index.img);
                setTimeout(() => {
                  setSelectedImage();
                }, 2000);
              }}
            >
              <h3 className={classes["slider-text--heading"]}>
                {index.heading}
              </h3>
              <p className={classes['slider-text--paragraph']}>{index.paragraph}</p>
              <div className={classes.timer}>
                <div id={index.heading} className={classes.line}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default ImageText;
