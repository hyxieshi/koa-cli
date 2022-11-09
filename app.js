import Koa from "koa";
import router from "./router/index.js";
import { koaBody } from "koa-body";
import cors from "koa2-cors";
import mongoose from "./config/db/index.js";

const app = new Koa();

app.use(cors());

app.use(koaBody());
app.use(router.routes());
app.listen(2580, () => {
  console.log("服务已启动");
  console.log("http://localhost:2580/");
});
