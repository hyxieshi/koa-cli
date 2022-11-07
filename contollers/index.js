/*
 * @Author: SunBOY
 * @Date: 2022-11-07 15:04:37
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-07 15:07:48
 * @FilePath: \contollers\index.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-07 15:04:37
 */
import User from "../models/User";

async function getUser() {
  return await User.find();
}
export default getUser;
