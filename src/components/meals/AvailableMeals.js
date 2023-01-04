import dummyMeals from "./dummy-meals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {

  const mealsList = dummyMeals.map((meal) => {
    return (
      <li>
        {meal.name}
      </li>
    );
  });

  return (
    <section className={classes.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  );

};

export default AvailableMeals;