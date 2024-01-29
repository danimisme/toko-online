import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, calllback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      calllback(true, res.data.token);
    })
    .catch((err) => {
      calllback(false, err);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
