import { config } from "dotenv";

config();

export const SERVER_CONFIG = {
  PORT: Number(process.env.PORT!),
};
