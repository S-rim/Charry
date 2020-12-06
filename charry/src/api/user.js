import { client, getClientAccessToken } from "./client";

export const register = (userId, password, nickname) => {
  return client.post("/user", { userId, password, nickname });
};

export const login = (userId, password) => {
  return client.post("/user/login", { userId, password });
};

export const userInfo = () => {
  return getClientAccessToken.get("/user/main");
};
