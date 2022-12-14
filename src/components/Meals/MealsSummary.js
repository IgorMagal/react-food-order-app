import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>The most "exotic" meals, delivered to you!</h2>
      <p>
        Enjoy our exclusive selection of dishes from all over the world in the
        confort of your home.
      </p>
      <p>
        All our plates are cooked with the highest quality ingredients,
        just-in-time by our famous Chef <i>DadoMagal aka. "Le Chat"</i>
      </p>
    </section>
  );
};

export default MealsSummary;
