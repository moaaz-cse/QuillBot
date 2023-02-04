import commonClasses from "./SignupCommon.module.css";
import classes from "./SignupFree.module.css";
import checkedImg from "../../assets/checked-mark.svg";
import uncheckedImg from "../../assets/unchecked-mark.svg";
const features = [
  {
    available: true,
    feature: "125 words in the Paraphraser",
  },
  {
    available: true,
    feature: "Standard and Fluency modes",
  },
  {
    available: true,
    feature: "3 synonym options",
  },
  {
    available: true,
    feature: "1 Freeze word or phrase",
  },
  {
    available: true,
    feature: "1200 words in the Summarizer",
  },
  {
    available: false,
    feature: "Faster processing speed",
  },
  {
    available: false,
    feature: "Advanced grammar rewrites",
  },
  {
    available: false,
    feature: "Compare Modes (Desktop only)",
  },
  {
    available: false,
    feature: "Plagiarism Checker*",
  },
  {
    available: false,
    feature: "Tone detection",
  },
];
const SignupFree = () => {
  return (
    <>
      <section className={commonClasses.container}>
        <div
          className={
            commonClasses["container-heading"] + " " + classes.green
          }
        >
          Free
        </div>
        <div className={commonClasses["container-btn"]}>
          <button className={commonClasses.btn + " " + classes["btn--green"]}>
            Sign Up - It's Free
          </button>
        </div>
        <ul>
          {features.map((index) => (
            <li className={commonClasses.list}>
              {index.available && (
                <img src={checkedImg} className={commonClasses.checked} alt="Marked as Checked"/>
              )}
              {!index.available && (
                <img src={uncheckedImg} className={commonClasses.checked} alt="Not marked as Checked"/>
              )}
              <div className={commonClasses['container-feature']}>{index.feature}</div>
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
export default SignupFree;
