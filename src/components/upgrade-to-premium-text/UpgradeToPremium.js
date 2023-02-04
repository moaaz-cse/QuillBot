import classes from "./UpgradeToPremium.module.css";

const UpgradeToPremium = () => {
  return (
    <section className = {classes.center}>
      <p className={classes['upgrade-title']}>Save Time and write with confidence</p>
      <button className = {classes['upgrade-btn']}>Upgrade to QuillBot Premium</button>
    </section>
  );
};
export default UpgradeToPremium;
