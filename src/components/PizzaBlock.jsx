import React from "react";
import Button from "./Button";

function PizzaBlock({ id, name, imageUrl, price, desctiption, addPizza }) {
  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
    };
    addPizza(obj);
  };

  return (
    <div className="pizza_cart">
      <img src={imageUrl} alt="pizza" />
      <div className="pizza_cart-title">{name}</div>
      <div className="pizza_cart-subtitle">{desctiption}</div>
      <div className="pizza_cart-price">от {price} ₽</div>
      <Button onClick={onAddPizza} className="pizza_cart-add">
        Добавить
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6 5.6H8.4V1.4C8.4 0.62685 7.77315 0 7 0C6.22685 0 5.6 0.62685 5.6 1.4V5.6H1.4C0.62685 5.6 0 6.22685 0 7C0 7.77315 0.62685 8.4 1.4 8.4H5.6V12.6C5.6 13.3731 6.22685 14 7 14C7.77315 14 8.4 13.3731 8.4 12.6V8.4H12.6C13.3731 8.4 14 7.77315 14 7C14 6.22685 13.3731 5.6 12.6 5.6Z"
            fill="#FE5F1E"
          />
        </svg>
      </Button>
    </div>
  );
}

export default PizzaBlock;
