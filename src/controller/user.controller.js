const userService = require('../service/user.service')

class UserController {
  //创建用户
  async creat(ctx, next) {
    //获取用户请求传递的参数
    const user = ctx.request.body
    //查询数据
    const result = await userService.create(user)
    //返回数据
    ctx.body = result
  }
  //获取用户信息
  async getUserInfo(ctx, next) {
    const { userId } = ctx.params;
    const userInfo = await userService.getUserById(userId);
    ctx.body = userInfo
  }
  //删除用户
  async deleteInfo(ctx, next) {
    const { userId } = ctx.params;
    const userInfo = await userService.remove(userId);
    ctx.body = userInfo
  }
  //获取所有用户信息
  async getAllUsers(ctx, next) {
    const userInfo = await userService.getAllUsers();
    ctx.body = userInfo
  }
  //更新某个用户信息
  async update(ctx, nex) {
    const { userId } = ctx.params;
    const userInfo = ctx.request.body;
    const result = await userService.update(userId, userInfo);
    ctx.body = result;
  }
}

module.exports = new UserController()