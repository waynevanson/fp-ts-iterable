import { Config } from "@jest/types"

export default {
  preset: "ts-jest",
  roots: ["src"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
} as Config.InitialOptions
