import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Are you on the hunt for a better credit card deal? Look no further! Our
        user-friendly platform makes it a breeze to find the perfect credit card
        offer tailored to your needs. With just a few easy steps, you'll be on
        your way to enjoying the benefits of a better card deal.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%" />
    </div>
  </section>
);

export default CardDeal;
