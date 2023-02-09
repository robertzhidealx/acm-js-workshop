import babel from "@rollup/plugin-babel";

export default {
  input: "src/update.js",
  output: {
    file: "index.js",
    format: "esm",
  },
  plugins: [babel({ babelHelpers: "bundled" })],
};
