/*
 * @Author: SunBOY
 * @Date: 2022-11-07 14:42:03
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-07 15:08:08
 * @FilePath: \app.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-07 14:42:03
 */
import Koa from "koa";
import { koaBody } from "koa-body";
import cors from "koa2-cors";
import mongoose from "./db";
import router from "./router";

const app = new Koa();
// 跨域
app.use(cors());
//  请求解析
app.use(koaBody());

app.ues(router.routes());

app.listen(2580, () => {
  console.log("服务已启动");
  console.log("http://localhost:2580/");
});
