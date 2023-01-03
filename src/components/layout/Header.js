import mealsIMG from "../../assets/meals.jpg";
import HeaderCartButton from "../layout/HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {

  return (
    <>
      <header className={classes.header}>
        <h1>
            ReactMeals
        </h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img
            src={mealsIMG}
            alt="A table full of food"
        />
      </div>
    </>
  );

};

export default Header;