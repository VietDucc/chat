import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://backend:3001";
const socket = io(SOCKET_SERVER_URL);

export default socket;
