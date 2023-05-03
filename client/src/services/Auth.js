import axios from "axios";
// import { useParams } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

export const Auth = {

  Login: async (email, password) => {
    console.log({URL})
    return axios.post(`${URL}/login`, {
      email,
      password,
    });
  },

  SignUp: async (firstName, lastName, email, password) => {
    return axios.post(`${URL}/signUp`, {
      firstName,
      lastName,
      email,
      password,
    });
  },
};
