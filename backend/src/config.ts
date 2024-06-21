import { Config } from "./types";

const { PORT } = process.env;

const config: Config = {
  port: PORT ?? "5000",
};

export default config;
