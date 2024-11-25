import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://192.168.1.40:3001";
const socket = io(SOCKET_SERVER_URL);

export default socket;
