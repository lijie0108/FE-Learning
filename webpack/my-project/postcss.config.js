module.exports = {
  plugins: [
    // 兼容浏览器，添加前缀
    require('autoprefixer')({
      overrideBrowserslist: [
        "last 2 versions",
    "> 1%",
    "iOS 7"
    ],grid: true})

  ]
}