# vuecli

## 安装
```
npm i

# 推荐cnpm  
```
##配置
已配置三种环境的请求，请求域名在.env文件中修改。
```
npm run serve;
npm run alpha;
npm run build;
```

默认已存在一些公共的样式名，详见@/assets/style/common.scss文件。

vue.config.js中设置dev环境的跨域处理（此时修改.env文件里边的baseUrl为本地的ip）

axios封装处理，请求建议在api文件夹下写。

vuex已做长时间储存的配置。

