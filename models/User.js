/*
 * @Author: SunBOY
 * @Date: 2022-11-07 14:58:34
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-07 15:02:43
 * @FilePath: \models\User.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-07 14:58:34
 */
import { Schema, model } from "mongoose";

const User = new Schema({
  name: String,
  age: String,
  Date: {
    default: Date.now(),
    type: Number,
  },
});

export default user = model("User", User);
