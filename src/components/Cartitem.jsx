import React from "react";
import Button from "./Button";

function Cartitem({
  id,
  name,
  imageUrl,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
}) {
  const handleRemove = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <div className="container-cart_pizza">
      <img src={imageUrl} alt="select-pizza" />
      <h3>{name}</h3>
      <div className="number">
        <div onClick={handleMinusItem} className="number_minus">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15"
              cy="15"
              r="14"
              fill="white"
              stroke="#FE5F1E"
              strokeWidth="2"
            />
            <path d="M10 15H20" stroke="#FE5F1E" strokeWidth="2" />
          </svg>
        </div>

        <p>{totalCount}</p>

        <div onClick={handlePlusItem} className="number_plus">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15"
              cy="15"
              r="14"
              fill="white"
              stroke="#FE5F1E"
              strokeWidth="2"
            />
            <path d="M10 15H20" stroke="#FE5F1E" strokeWidth="2" />
            <path d="M15 10V20" stroke="#FE5F1E" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="price">{totalPrice} ₽</div>
      <Button onClick={handleRemove}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            fill="white"
            stroke="#CACACA"
            strokeWidth="2"
          />
          <path
            d="M11.5356 18.6066L18.6067 11.5355"
            stroke="#CACACA"
            strokeWidth="2"
          />
          <path
            d="M11.5356 11.5356L18.6067 18.6067"
            stroke="#CACACA"
            strokeWidth="2"
          />
        </svg>
      </Button>
    </div>
  );
}

export default Cartitem;
