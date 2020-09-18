import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzas } from "../redux/actions/cart";

import { Categories, LoadingBlock, PizzaBlock } from ".././components";
import { setCategory } from "../redux/actions/filters";

const categoryNames = ["Мясные", "Острые", "Вегетарианские"];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category));
  }, [category, dispatch]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const addPizzaToCart = (obj) => {
    dispatch(addPizzas(obj));
  };

  return (
    <div className="content">
      <Categories onClickItem={onSelectCategory} items={categoryNames} />

      <h2>Пиццы</h2>

      <div className="pizza">
        {isLoading
          ? items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                id={obj.id}
                addPizza={addPizzaToCart}
                name={obj.name}
                isLoading={true}
                imageUrl={obj.imageUrl}
                desctiption={obj.desctiption}
                price={obj.price}
              />
            ))
          : Array(21)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
