import axios from "axios";

export const getProducts = (calllback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
