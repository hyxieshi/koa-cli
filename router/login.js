/*
 * @Author: SunBOY
 * @Date: 2022-11-10 19:17:08
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-10 23:43:34
 * @FilePath: \router\login.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-10 19:17:08
 */
import Router from "koa-router";

import jwt from "jsonwebtoken";
const key = "sunboy-xk";
const data = {
  name: "xike",
};
let login = new Router({
  prefix: "/login",
});

/**
 * @description: 签发token
 * @return {token}
 * @Author: SunBOY
 */
login.post("/user", async (ctx) => {
  const token = jwt.sign(data, key, {
    expiresIn: 3600,
  });
  ctx.body = `token:${token}`;
});
/**
 * @description: 校验token
 * @return {*}
 * @Author: SunBOY
 */
login.get("/userinfo", async (ctx) => {
  const header = ctx.header;
  if (header["authorization"]) {
    const token = header["authorization"].split(" ")[1];
    jwt.verify(token, key, (err, payload) => {
      if (err) ctx.body = "请重新登录";
      else {
        ctx.body = {
          message: "验证成功",
          payload,
        };
      }
    });
  } else {
    ctx.body = "未登录";
  }
});
export default login;
