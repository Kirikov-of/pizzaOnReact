import React from "react";
import pizzaSelect from "../assets/image 1.png";

function Cart() {
  return (
    <div className="wrapper-cart">
      <div className="content">
        <div className="container-cart">
          <div className="container-cart_header">
            <h1>Корзина</h1>
            <p>
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

          <div className="container-cart_content">
            <div className="container-cart_pizza">
              <img src={pizzaSelect} alt="select-pizza" />
              <h3>Ветчина с сыром</h3>
              <div className="number">
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

                <p>2</p>

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

              <div className="price">400 ₽</div>
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
            </div>

            <div className="container-cart_pizza">
              <img src={pizzaSelect} alt="select-pizza" />
              <h3>Ветчина с сыром</h3>
              <div className="number">
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

                <p>2</p>

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

              <div className="price">400 ₽</div>
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
            </div>

            <div className="container-cart_pizza">
              <img src={pizzaSelect} alt="select-pizza" />
              <h3>Ветчина с сыром</h3>
              <div className="number">
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

                <p>2</p>

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

              <div className="price">400 ₽</div>
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
            </div>
          </div>

          <div className="container-cart_sum">
            <p className="all-pizza">
              Всего пицц: <span>6 шт</span>
            </p>
            <p className="all-sum">
              Сумма заказа: <span>1200 ₽</span>
            </p>
          </div>

          <div className="container-cart_button">
            <button className="back">
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
              <a href="../index.html">Вернуться назад</a>
            </button>
            <button className="next">
              <a href="#">Оплатить сейчас</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
