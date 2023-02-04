import commonClasses from "./SignupCommon.module.css";
import classes from "./SignupPremium.module.css";
import diamond from "../../assets/diamond.svg";
import checkedImg from "../../assets/checked-mark.svg";
import infoIcon from "../../assets/info-icon.svg";

import toolTip from "../../assets/synonyms-tooltip.png";
const features = [
  {
    id: 1,
    available: true,
    feature: "Unlimited words in the Paraphraser",
  },
  {
    id: 2,
    available: true,
    feature:
      "Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes",
  },
  {
    id: 3,
    available: true,
    feature: "4 synonym options",
  },
  {
    id: 4,
    available: true,
    feature: "Unlimited Freeze words and phrases",
  },
  {
    id: 5,
    available: true,
    feature: "6000 words in the Summarizer",
  },
  {
    id: 6,
    available: true,
    feature: "Faster processing speed",
  },
  {
    id: 6,
    available: true,
    feature: "Advanced grammar rewrites",
  },
  {
    id: 7,
    available: true,
    feature: "Compare Modes (Desktop only)",
  },
  {
    id: 8,
    available: true,
    feature: "Plagiarism Checker*",
  },
  {
    id: 9,
    available: true,
    feature: "Tone detection",
  },
];
const SignupPremium = () => {
  return (
    <>
      <section className={commonClasses.container}>
        <div
          className={commonClasses["container-heading"] + " " + classes.golden}
        >
          <img src={diamond} className={commonClasses.checked} />
          <span>PREMIUM</span>
        </div>
        <div className={commonClasses["container-btn"]}>
          <button className={commonClasses.btn + " " + classes["btn--golden"]}>
            Upgrade to Premium
          </button>
        </div>
        <ul>
          {features.map((index) => (
            <li className={commonClasses.list + " " + classes.grid}>
              <div
                className={
                  commonClasses["container-feature"] + " " + classes.flex
                }
              >
                {index.available && (
                  <img src={checkedImg} className={commonClasses.checked} alt="Marked as Checked" />
                )}
                <div>{index.feature}</div>
              </div>
              <div>
                <img src={infoIcon} className={classes.info} alt="Click to know more"/>
                {/* <div className={classes.hide}>
                  <p>Write faster</p>
                  <p>This is info field with image</p>
                  <img src={toolTip} />
                </div> */}
              </div>
            </li>
          ))}
        </ul>
        <div className={commonClasses["container-desclaimer"]}>
          3-Day Money-Back Guarantee
        </div>
      </section>
    </>
  );
};
export default SignupPremium;
