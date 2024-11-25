import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Lắng nghe trên tất cả các địa chỉ IP
    port: 5173, // Bạn có thể giữ lại cổng 5173 hoặc thay đổi tùy theo nhu cầu
  },
});
