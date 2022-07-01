const userService = require('../service/user.service')


class UserController {
  async creat(ctx, next) {
    //获取用户请求传递的参数
    const user = ctx.request.body
    //查询数据
    const result = await userService.create(user)
    //返回数据
    ctx.body = result
  }

  async getUserInfo(ctx, next) {
    const { userId } = ctx.params;
    console.log(userId)
    const userInfo = await userService.getUserById(userId);
    ctx.body = userInfo
  }

  async deleteInfo(ctx, next) {
    const { userId } = ctx.params;
    const userInfo = await userService.remove(userId);
    ctx.body = userInfo
  }
  async getAllUsers(ctx, next) {
    const userInfo = await userService.getAllUsers();
    console.log('all---------')
    ctx.body = userInfo
  }
}

module.exports = new UserController()