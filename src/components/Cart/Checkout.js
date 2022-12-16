import { useState } from "react";
import { useRef } from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputValidation, setFormInputValidation] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    address: true,
  });

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const isEmpty = (value) => value.trim() === "";

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredAddress = addressRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPhoneIsValid = !isEmpty(enteredPhone);
    const enteredAddressIsValid = !isEmpty(enteredAddress);

    setFormInputValidation({
      firstName: enteredAddressIsValid,
      lastName: enteredLastNameIsValid,
      email: enteredEmailIsValid,
      phone: enteredPhoneIsValid,
      address: enteredAddressIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredAddressIsValid;

    if (!formIsValid) {
      return;
    }
    props.onSubmitForm({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
    });
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div
        className={`${styles.control} ${
          !formInputValidation.firstName ? styles.invalid : ""
        }`}
      >
        <label htmlFor="fname">First name</label>
        <input type="fname" id="fname" ref={firstNameRef} />
        {!formInputValidation.firstName && <p>Field must not be empty.</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputValidation.lastName ? styles.invalid : ""
        }`}
      >
        <label htmlFor="lname">Last name</label>
        <input type="lname" id="lname" ref={lastNameRef} />
        {!formInputValidation.lastName && <p>Field must not be empty.</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputValidation.email ? styles.invalid : ""
        }`}
      >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
        {!formInputValidation.email && <p>Field must not be empty.</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputValidation.phone ? styles.invalid : ""
        }`}
      >
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          //pattern="[0-9]{1}([0-9]{3})[0-9]{3}-[0-9]{4}"
          ref={phoneRef}
        />
        {!formInputValidation.phone && <p>Field must not be empty.</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputValidation.address ? styles.invalid : ""
        }`}
      >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressRef} />
        {!formInputValidation.address && <p>Field must not be empty.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.submit} disabled={false}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
