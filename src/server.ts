import { app } from "./app.js";
import { SERVER_CONFIG } from "./config/server-port.js";

const start = async () => {
  try {
    await app.listen({ port: SERVER_CONFIG.PORT, host: "0.0.0.0" });
    console.log(`✅ Server running on http://localhost:${SERVER_CONFIG.PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
