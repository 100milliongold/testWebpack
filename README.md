# TEST Webpack

웹팩 테스트를 위한 샘플 입니다.

## 웹팩 설정하기
---
1. ### 기본폴더 생성

   ```bash
   mkdir fxTest
   ```
---
2. ### npm init 설정

   ```bash
   npm init -y
   ```
---
3. ### webpack 설치

   ```bash
   npm install webpack-cli babel-loader style-loader css-loader mini-css-extract-plugin html-webpack-plugin webpack-dev-server --save-dev
   ```
---
4. ### 기본 폴더 / 파일 만들기

    ```bash
      mkdir src
      mkdir dist
      mkdir public

      touch webpack.config.js
      touch public/index.html
      touch src/index.js
    ```
---
5. ### `webpack.config.js` 설정

    ```javascript
      const path = require("path");
      const htmlWebpackPlugin = require("html-webpack-plugin");
      const miniCssExtractPlugin = require("mini-css-extract-plugin");

      module.exports = {
        module: {
          rules: [
            {
              test: /\.html$/,
              use: {
                loader: "html-loader",
                options: { minimize: true },
              },
            },
            {
              test: /\.js$/,
              include: [path.resolve(__dirname, "src")],
              exclude: /node_modules/,
              use: ["babel-loader", "eslint-loader"],
            },
            {
              test: /\.css$/i,
              use: [miniCssExtractPlugin.loader, "css-loader"],
            },
          ],
        },
        plugins: [
          new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
          }),
          new miniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
          }),
        ],
      };
    ```
---
6. ### package.json 설정

    ```json
    {
      "name": "fx-test",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --mode production",
        "start": "webpack-dev-server --open --progress --inline --mode development"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/100milliongold/testWebpack.git"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@babel/core": "^7.9.0",
        "@babel/plugin-proposal-class-properties": "^7.8.3",
        "@babel/preset-env": "^7.9.5",
        "babel-eslint": "^10.1.0",
        "babel-loader": "^8.1.0",
        "css-loader": "^3.5.2",
        "eslint": "^6.8.0",
        "eslint-loader": "^4.0.0",
        "html-loader": "^1.1.0",
        "html-webpack-plugin": "^4.2.0",
        "mini-css-extract-plugin": "^0.9.0",
        "style-loader": "^1.1.4",
        "webpack": "^4.43.0",
        "webpack-cli": "^3.3.11",
        "webpack-dev-server": "^3.10.3",
        "webpack-node-externals": "^1.7.2"
      },
      "dependencies": {
        "fxjs": "^0.15.0",
        "fxjs2": "^0.15.0"
      }
    }
    ```
---
7. ### 동작 테스트

    1. dev server

        ```bash
        npm run start
        ```

    2. build

        ```bash
        npm run dev
        ```
---
8. ### `.babelrc` 파일 설정

    ```json
    {
      "presets": [
          "@babel/preset-env"
      ],
      "plugins": [
          "@babel/plugin-proposal-class-properties"
      ]
    }
    ```
---
9. ### `.eslintrc` 파일 설정

    ```json
    {
      "parser": "babel-eslint",
      "rules": {}
    }
    ```
---
10. ### `src/index.js`파일 정의

    ```javascript
    import App from "./App";

    const app = new App(document.querySelector("#root"));
    ```
---
11. ### `public/index.html` 정의

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Getting Started</title>
      </head>

      <body>
        <div id="root"></div>
      </body>
    </html>
    ```