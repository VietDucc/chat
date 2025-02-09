import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "https://chat-woad-alpha.vercel.app";
const socket = io(SOCKET_SERVER_URL, {
  transports: ["websocket"], // Giúp tối ưu kết nối
  withCredentials: true, // Nếu có sử dụng cookies hoặc xác thực
});

export default socket;
