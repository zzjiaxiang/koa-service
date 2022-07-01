const Router = require('koa-router')

const {
  creat,
  getUserInfo,
  deleteInfo,
  getAllUsers
} = require('../controller/user.controller');


const userRouter = new Router({ prefix: "/users" })


userRouter.post('/', creat)
userRouter.get("/:userId", getUserInfo)
userRouter.get("/", getAllUsers)
userRouter.delete("/:userId", deleteInfo)

module.exports = userRouter