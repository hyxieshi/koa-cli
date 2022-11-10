/*
 * @Author: SunBOY
 * @Date: 2022-11-07 14:53:36
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-10 17:03:13
 * @FilePath: \config\db\index.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-07 14:53:36
 */
import mongoose from "mongoose";

const URL = "mongodb://localhost/sunboy-koa";
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("连接成功");
});

mongoose.connection.once("error", () => {
  console.log("连接失败");
});

export default mongoose;
