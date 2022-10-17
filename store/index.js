import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: [],
});

export const getters = {
  totalPrice: (state) =>
    state.cart.reduce((acc, item) => acc + +item.price, 0) || 0,
  cartCount: (state) => state.cart.length || 0,
};

export const mutations = {
  setFoodData(state, data) {
    state.fooddata = data;
  },
  addToCart(state, data) {
    data.id = uuidv4();
    state.cart.push(data);
  },
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;
    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          commit("setFoodData", data);
        });
    } catch (err) {
      console.log(err);
    }
  },
};
