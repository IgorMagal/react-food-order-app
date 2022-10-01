import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles.control}>
        <label htmlFor="fname">First name</label>
        <input
          type="fname"
          id="fname"
          onChange={() => {}}
          onBlur={() => {}}
          value={() => {}}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="lname">Last name</label>
        <input
          type="lname"
          id="lname"
          onChange={() => {}}
          onBlur={() => {}}
          value={() => {}}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={() => {}}
          onBlur={() => {}}
          value={() => {}}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          pattern="[0-9]{1}([0-9]{3})[0-9]{3}-[0-9]{4}"
          onChange={() => {}}
          onBlur={() => {}}
          value={() => {}}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="email">Address</label>
        <input
          type="email"
          id="email"
          onChange={() => {}}
          onBlur={() => {}}
          value={() => {}}
        />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit} disabled={false}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
