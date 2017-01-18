# TodoApp demo with React



This demo application use some dependencies :
 * **Babel:** JavaScript compiler setting up to transform ES2015 and React
   * babel-core
   * babel-loader
   * babel-preset-es2015
   * babel-preset-react
 * **SASS:** Preprocessor CSS
   * node-sass
   * css-loader
   * sass-loader
   * style-loader
 * **webpack:** Module bundler
   * webpack-dev-server: Local server based on Express
   * extract-text-webpack-plugin: compiled CSS extracted from JS
 * **Hot reloading**
   * Webpack hot middleware: to enable hot reloading
   * react hot loader: hot reloading for react modules

# Download dependencies
npm i

# Build and start a local server
npm run dev

# Build for production
npm run prod

# References
 * Webpack 
 * Webpack server : https://webpack.github.io/docs/webpack-dev-server.html
 * Webpack file loader plugin : https://github.com/webpack/file-loader
 * Webpack copy plugin : https://www.npmjs.com/package/copy-webpack-plugin-hash
 * Knacss css framework :
 * React Hot loader : 
 * a
 * a
 * a

TO SEE 
https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html


-d : dev
-p : prod
--watch : auto update when source change

./node_modules/.bin/webpack -d --watch

npm install --save-dev webpack-dev-server
