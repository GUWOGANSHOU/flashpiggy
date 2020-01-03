# mobee-frontend

本项目使用 [minapp](https://github.com/qiu8310/minapp) + [Typescript](https://www.typescriptlang.org/) 进行开发，具体使用请参考 [minapp 文档](https://qiu8310.github.io/minapp/)

## 依赖安装

- 安装 `Node.js` https://nodejs.org
- 安装 `微信Web开发者工具` https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- 安装 `Git` https://git-scm.com/downloads
- 拉取本项目代码
- 在 Terminal 中运行 `npm i` ( Yarn 使用 `yarn` )

## 开发

开发时记得在 `master` 的基础上新开分支进行开发，开发完成提交 MR ( Merge Request ) 合并到 `master`.

推荐使用 [Visual Studio Code](https://code.visualstudio.com/) 并安装项目提示的推荐扩展

- 首先在 Terminal 运行 `npm run dev` 进入 hot build 模式方便开发
- 运行 `微信Web开发者工具` 打开目录下的 `dist` 目录进行调试

## 编译和发布

- 删除 `dist` 目录并使用 `npm run build` 进行编译
- 把 `dist` 下的 `static` 目录移走传到 OSS 上
- 运行 `微信Web开发者工具` 上传代码到微信 ( 最好删掉 `static` 目录 )
