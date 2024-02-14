import { RoleService } from "../services/role.service.js";

export class RoleController {
  constructor() {
    this.roleService = new RoleService();
  }

  Add = (item) => this.roleService.Add(item);
  update = (id, item) => this.roleService.update({ _id: id }, item);
  delete = (id) => this.roleService.delete({ _id: id });
  getOne = (id) => this.roleService.getOne({ _id: id });
  getAll = () => this.roleService.getAll();
}
