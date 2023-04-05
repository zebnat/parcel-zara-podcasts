import type { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ["./src/jest-setup.ts"],
  testEnvironment: "jsdom",
};

export default config;
