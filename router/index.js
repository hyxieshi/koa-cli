/*
 * @Author: SunBOY
 * @Date: 2022-11-07 14:48:25
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-07 15:09:26
 * @FilePath: \router\index.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-07 14:48:25
 */
import Router from "koa-router";
import getUser from "../contollers";

const router = new Router({
  prefix: "/api",
});
// router.prefix = '/api'
router.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = "sunboy-cli-koa";
});
router.get("/user", async (ctx) => {
  ctx.status = 200;
  //   koa-body
  // 解析get参数
  console.log(ctx.query);
  ctx.body = await getUser();
});

export default router;
