const koa = require('koa')
const cors = require('koa2-cors');
const bodyParse = require('koa-bodyparser')

const useRoutes = require('../router/user.router')

const app = new koa()

app.use(cors());

// app.use(async (ctx, next) => {
//   ctx.set({
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "Content-Type",
//     "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE,OPTIONS"
//   })
//   if (ctx.method === "OPTIONS") {
//     ctx.status = 200;
//     ctx.body = "";
//   } else {
//     await next();
//   }
// })

app.use(bodyParse())
app.use(useRoutes.routes())

module.exports = app