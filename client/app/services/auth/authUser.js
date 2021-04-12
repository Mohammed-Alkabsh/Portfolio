import { apiCall, setTokenHeader } from "../api";

export function authUser(type, userData) {
  return new Promise((resolve, reject) => {
    return apiCall("post", `/api/auth/${type}`, userData)
      .then(({ token, ...user }) => {
        localStorage.setItem("MohammedAlkabshDevJWTToken", token);
        setTokenHeader(token);
        resolve();
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
