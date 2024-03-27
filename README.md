# vue-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 知识点积累：
#### 更改端口：

第一种：

在根目录创建vue.config.js，添加以下代码

```js
module.exports = {
  devServer: {
    port: 8000
  }
}
```

第二种：

修改vue-cli源码，打开node_modules/@vue/cli-service/lib/commands/serve.js文件

```
const defaults = {
  host: '0.0.0.0',
  port: 80,
  https: false
}
```

如果同时设置了serve.js、vue.config.js最终的启动端口是以vue.config.js内的端口为准。