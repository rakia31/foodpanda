import classes from './MealsSummary.module.css';
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome to our E-food service</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients and it's made by a professional chief 
      </p>
    </section>
  );
};

export default MealsSummary;