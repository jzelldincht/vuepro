## 打开cmd窗口，cd到你的项目
1. npm init 初始化一个package - package.json
2. npm install --save-dev babel-loader html-webpack-plugin @babel/core @babel/preset-env @babel/plugin-transform-runtime vue@2 vue-loader webpack webpack-cli
3. 新建 .babelrc 并新增以下内容
```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "60",
          "ie": "9"
        }
      }
    ]
  ]
}
```
4. 解决生成的页面，js未生效的错误，在 webpack.config.js 中添加以下代码：
```markdown
module.exports = {
...
resolve: {
    alias: {
        vue: 'vue/dist/vue.js',
    }
},
```

