import Card from "../ui/Card";
import dummyMeals from "./dummy-meals";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {

  const mealsList = dummyMeals.map((meal) => {
    return (
      <MealItem
        description={meal.description}
        id={meal.id}
        key={meal.id}
        name={meal.name}
        price={meal.price}
      >
        {meal.name}
      </MealItem>

    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );

};

export default AvailableMeals;