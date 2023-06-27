var path = require("path");
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer:{
    static: {
      directory: path.resolve(__dirname, 'public'), // Chemin vers le répertoire du contenu statique
    },
    compress:true,
    port:8081,
  },
  devtool:"inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
