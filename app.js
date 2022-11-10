/*
 * @Author: SunBOY
 * @Date: 2022-11-10 01:17:47
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-10 19:24:11
 * @FilePath: \app.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-10 01:17:47
 */
import Koa from "koa";
import router from "./router/index.js";
import { koaBody } from "koa-body";
import cors from "koa2-cors";
import mongoose from "./config/db/index.js";

const app = new Koa();

app.use(cors());

app.use(koaBody());
for (const key in router) {
  app.use(router[key].routes());
}
// app.use(router.routes());
app.listen(2580, () => {
  console.log("服务已启动");
  console.log("http://localhost:2580/");
});
