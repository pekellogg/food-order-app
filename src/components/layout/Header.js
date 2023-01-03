import mealsIMG from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    ReactMeals
                </h1>
                <button>
                    Cart
                </button>
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