import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Natural Chicken Sauce",
    description: "Chicken water from an opened package perfectly unfrozen.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Treats",
    description: "Any kind really, just have to be crunchy!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty (That's for my dad.)",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Oreos",
    description: "I only like the crust though, you can have the filling.",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
