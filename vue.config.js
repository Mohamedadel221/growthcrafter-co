const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("videos")
      .test(/\.(mp4|webm|ogg|avi|mov)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/videos/[name].[hash:8].[ext]",
      });
  },
});
