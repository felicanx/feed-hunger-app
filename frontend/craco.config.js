const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@frontend/common": path.resolve(__dirname, "src/common"),
      "@frontend/core": path.resolve(__dirname, "src/core"),
      "@frontend/auth": path.resolve(__dirname, "src/auth"),
      "@frontend/assets": path.resolve(__dirname, "src/assets"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@frontend(.*)$": "<rootDir>/src/frontend$1",
      },
    },
  },
};
