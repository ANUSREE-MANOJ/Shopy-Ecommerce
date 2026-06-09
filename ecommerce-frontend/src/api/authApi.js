import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/api/auth`;

export const loginUser = (
  userData
) =>
  axios.post(
    `${API}/login`,
    userData
  );

export const registerUser = (
  userData
) =>
  axios.post(
    `${API}/register`,
    userData
  );