module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFiles: ["./tests/config/eachTest.ts"],
  testMatch: ["**/**/*.spec.ts"],
};
