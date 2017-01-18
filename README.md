TodoApp demo with React
=========================

This is a demo application based on React, without Redux, build with Webpack.

![Screenshot](http://thorpora.fr/wp-content/uploads/2017/01/screenshot.png)

# Stack

 * **React:** No Redux
 * **Babel:** JavaScript compiler setting up to transform ES2015 and React
 * **SASS:** Preprocessor CSS
 * **webpack:** Module bundler
   * Local server
   * Hot reloading (for all resources)
   * Compiled CSS extracted from JS
   * Relative path for include

# Featured
 * **React**
   * No redux here, use vanilla event
 * **Archtecture** 
   * Use same Maven project structure
   * Ready to include in a Spring Boot application (coming soon :bowtie:)
   * Component-oriented (but clear separation JSX/SCSS)
 * **Responsive**
   * Use SASS and some part of KNACSS
   * Use @extend, @mixin, @media
 * **Test**
   * todo !
 * **Clock widget** 
   * Just because it looks greats :smile:
   
# Build
_Download dependencies_:
```
npm i
```
_Start the local server_(localhost:8080):
```
npm run start
```

# Todo
 * **Unit tests**
   * Jasmine ? Mocha ? Karma ? Protractor ? :cold_sweat:
 * **Task edition**
   * Allow user to edit an existing task
 * **Router**
   * Back/prev from broswer should works for task filter
 * **I18N**
   * Externalize all texts
 * **Continuous Integration**
   * Build a config file for jenkins

# References (USEFULL links)
 * Webpack: [https://github.com/webpack/docs/wiki/configuration](https://github.com/webpack/docs/wiki/configuration)
 * Webpack server: [https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html)
 * Webpack copy plugin: [https://www.npmjs.com/package/copy-webpack-plugin-hash](https://www.npmjs.com/package/copy-webpack-plugin-hash)
 * Knacss css framework: [https://github.com/alsacreations/KNACSS/tree/master/doc](https://github.com/alsacreations/KNACSS/tree/master/doc)
 * React Hot loader: [https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader](https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96)

# License
MIT

<p align="center">
  <a href="http://thorpora.fr">
    <img src="http://thorpora.fr/wp-content/uploads/2015/03/thorpora4.4.png" width="300" alt="Thorpora - TodoApp with React">
  </a>
</p>
