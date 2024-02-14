import { UserService } from "../sevices/user.service.js";

export class UserController {
  constructor() {
    this.userService = new UserService();
  }

  Add = (user) => this.userService.Add(user);
  update = (id, item) => this.userService.update(id, item);
  getOne = (id)=>this.userService.getOne(id)
  delete = (id) => this.userService.delete(id)
  getAll = ()=>this.userService.getAll({})
}
