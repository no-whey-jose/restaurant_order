import { useContext } from "react";
import { currencyFormatter } from "../utils/formatters";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const MealItem = ({ meal }) => {
  const { name, image, price, description } = meal;

  const cartCtx = useContext(CartContext);

  const handleAddMeal = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMeal}>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
