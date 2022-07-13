const Router = require('koa-router')
const {
  creat,
  getUserInfo,
  deleteInfo,
  getAllUsers,
  update
} = require('../controller/user.controller');


const userRouter = new Router({ prefix: "/users" })


userRouter.post('/', creat)//创建角色
userRouter.get("/:userId", getUserInfo)//获取角色角色信息(模糊查询)
userRouter.get("/", getAllUsers)//获取所有角色
userRouter.delete("/:userId", deleteInfo)//根据ID删除角色
userRouter.patch("/:userId", update)//根据ID更新角色


module.exports = userRouter