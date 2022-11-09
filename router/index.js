/*
 * @Author: SunBOY
 * @Date: 2022-11-07 14:48:25
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-10 01:33:46
 * @FilePath: \router\index.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-07 14:48:25
 */
import Router from "koa-router";
import jwt from "koa-jwt";

import getUser from "../contollers/index.js";

const router = new Router({
  //prefix: "/api", //配置统一前缀
});
// router.prefix = '/api'
router.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = "sunboy-cli-koa";
});

router.use(
  jwt({
    secret: "xike",
  })
);
router.get("/user", async (ctx) => {
  ctx.status = 200;
  console.log(ctx.query); //
  ctx.body = await getUser();
});

export default router;
