const path = require("path");
require("dotenv").config();
const Dotenv = require("dotenv-webpack");
const axios = require("axios");

module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./src")
    };
    config.plugins = [
      ...config.plugins,
      // NOTE: 環境変数を優先して読み込む
      new Dotenv({
        systemvars: true
      })
    ];
    return config;
  },
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" }
    };
    const key = {
      headers: { "X-API-KEY": process.env.API_KEY }
    };
    const res = await axios.get(
      `https://samuraikun.microcms.io/api/v1/blogs`,
      key
    );
    const data = await res.data.contents;

    data.forEach(blog => {
      paths[`/blogs/${blog.id}`] = {
        page: "/blogs/[id]",
        query: { id: blog.id }
      };
    });

    return paths;
  }
};
