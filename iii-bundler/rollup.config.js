// rollup -c --bundleConfigAsCjs

export default {
  input: "update.js",
  output: {
    file: "index.js",
    format: "esm",
  },
};
