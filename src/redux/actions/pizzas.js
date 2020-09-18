import axios from "axios";

export const setLoading = (payload) => ({
  type: "SET_LOADING",
  payload,
});

export const fetchPizzas = (category) => (dispatch) => {
  dispatch({
    type: "SET_LOADING",
    payload: false,
  });

  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
      }`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
