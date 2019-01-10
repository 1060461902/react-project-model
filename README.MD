#使用 using guide

```
npm install //下载模块 download the modules
npm run dev //webpack开发模式打包 pack in development mode
npm run base //webpack默认模式打包 pack in default mode
npm run server //启动开发模式下热部署的webpack微型服务器 start-up in Hot-deployed webpack micro-server
```

###注意 waring
webpack配置文件是根据app文件夹**根目录**下的js类型的文件来————判定入口、生成html文件，app/\*.js与public/\*.html要一一对应
the entrance of webpack is based on the js type file which in the folder named app(root directory). So, make sure the app/\*.js and public/\*.html are corresponding one-by-one