import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "https://chat-woad-alpha.vercel.app/api/socket"; // Kết nối đúng API route

const socket = io(SOCKET_SERVER_URL, {
  transports: ["websocket", "polling"], // Cần hỗ trợ polling
  withCredentials: true,
});

export default socket;
