import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("oncreate store : ", store.getState());

// const action2 = { type: "ADD_TO_CART", payload: { id: 10, qty: 5 } };
// store.dispatch(action2);

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(addToCart({ id: 10, qty: 5 }));
store.dispatch(login());
