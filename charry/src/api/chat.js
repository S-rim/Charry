import { getClientAccessToken } from "./client";

export const createRoom = (title) => {
  return getClientAccessToken.post("/chat/room", { title });
};

export const roomSearch = (title) => {
  return getClientAccessToken.get("/chat/room/search?title=" + title);
};

export const joinRoom = (roomId) => {
  return getClientAccessToken.post("/chat/room/join", { roomId });
};

export const getRoom = () => {
  return getClientAccessToken.get("/chat/room");
};

export const destoryRoom = (roomId) => {
  return getClientAccessToken.delete(`/chat/room/${roomId}`);
};

export const leaveRoom = (roomId) => {
  return getClientAccessToken.delete("/chat/member", { roomId });
};

export const getRoomTitle = (roomId) => {
  return getClientAccessToken.get(`/chat/room/title/${roomId}`);
};

export const getChat = (roomId, page) => {
  return getClientAccessToken.get(`/chat?id=${roomId}&page=${page}`);
};
