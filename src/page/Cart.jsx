import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Cartitem from "../components/Cartitem";
import Button from "../components/Button";
import {
  clearCart,
  removeCartItem,
  plusItem,
  minusItem,
} from "../redux/actions/cart";
import cartEmpty from "../assets/emptyLogo.jpg";

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(({ cart }) => cart);

  const pizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm("Вы действительно ходите удалить эту пиццу?")) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlus = (id) => {
    dispatch(plusItem(id));
  };

  const onMinus = (id) => {
    dispatch(minusItem(id));
  };

  const makeOrder = () => {
    alert("Ваш заказ принят в обработку");
  };

  return (
    <div className="wrapper-cart">
      <div className="content">
        {totalPrice ? (
          <div className="container-cart">
            <div className="container-cart_header">
              <h1>Корзина</h1>
              <div className="clear">
                <p onClick={onClearCart}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 4H3.16667H16.5"
                      stroke="#B6B6B6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.66663 4.00001V2.33334C5.66663 1.89131 5.84222 1.46739 6.15478 1.15483C6.46734 0.842266 6.89127 0.666672 7.33329 0.666672H10.6666C11.1087 0.666672 11.5326 0.842266 11.8451 1.15483C12.1577 1.46739 12.3333 1.89131 12.3333 2.33334V4.00001M14.8333 4.00001V15.6667C14.8333 16.1087 14.6577 16.5326 14.3451 16.8452C14.0326 17.1577 13.6087 17.3333 13.1666 17.3333H4.83329C4.39127 17.3333 3.96734 17.1577 3.65478 16.8452C3.34222 16.5326 3.16663 16.1087 3.16663 15.6667V4.00001H14.8333Z"
                      stroke="#B6B6B6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.33337 8.16667V13.1667"
                      stroke="#B6B6B6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6666 8.16667V13.1667"
                      stroke="#B6B6B6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Очистить корзину
                </p>
              </div>
            </div>

            <div className="container-cart_content">
              {pizzas.map((obj) => (
                <Cartitem
                  id={obj.id}
                  key={obj.id}
                  name={obj.name}
                  imageUrl={obj.imageUrl}
                  totalPrice={items[obj.id].totalPrice}
                  totalCount={items[obj.id].items.length}
                  onRemove={onRemoveItem}
                  onMinus={onMinus}
                  onPlus={onPlus}
                />
              ))}
            </div>

            <div className="container-cart_sum">
              <p className="all-sum">
                Сумма заказа: <span>{totalPrice} ₽</span>
              </p>
            </div>

            <div className="container-cart_button">
              <Button className="back">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link to="/">Вернуться назад</Link>
              </Button>
              <Button onClick={makeOrder} className="next">
                <Link to="#">Оплатить сейчас</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="content-cart">
            <h1>Упс... Ваша корзина пуста</h1>
            <p>Скорее всего, Вы не заказали ни одну пиццу</p>
            <p>Перейдите на главную страницу и закажите пиццу</p>
            <img src={cartEmpty} alt="cat" />

            <Button className="btn-black">
              <Link to="/">
                <span>Вернуться назад</span>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
