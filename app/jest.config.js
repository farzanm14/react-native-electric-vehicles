module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  globals: {
    "ts-jest": {
      babelConfig: "./babel.config.js",
      diagnostics: false,
    },
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
    "\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  moduleDirectories: ["node_modules", "src"],
};
