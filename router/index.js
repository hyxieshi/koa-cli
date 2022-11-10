/*
 * @Author: SunBOY
 * @Date: 2022-11-07 14:48:25
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-10 23:27:56
 * @FilePath: \router\index.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-07 14:48:25
 */
import Router from "koa-router";
import login from "./login.js";

import getUser from "../contollers/index.js";

const test = new Router({
  //prefix: "/api", //配置统一前缀
});
test.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = "sunboy-cli-koa";
});

test.get("/user", async (ctx) => {
  ctx.status = 200;
  console.log(ctx.query); //
  ctx.body = await getUser();
});

const router = {
  test,
  login,
};
export default router;
