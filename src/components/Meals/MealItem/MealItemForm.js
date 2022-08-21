import Input from "../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "999",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
