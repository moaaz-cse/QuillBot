import SignupFree from "./SignupFree";
import SignupPremium from "./SignupPremium";
import classes from "./SubscriptionModel.module.css";
const SubscriptionModel = () => {
  return (
    <>
      <div className={classes['subscription-title']}>
        <p>Experience the full power of QuillBot</p>
      </div>
      <section className={classes.subscription}>
        <SignupFree />
        <SignupPremium />
      </section>
    </>
  );
};
export default SubscriptionModel;
