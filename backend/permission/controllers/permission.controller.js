import { PermissionService } from "../services/permission.service.js";

export class PermissionController {
  constructor() {
    this.permissionService = new PermissionService();
  }
  Add = (permission) => this.permissionService.Add(permission);
  update = (id, item) => this.permissionService.update({ _id: id }, item);
  getOne = (id) => this.permissionService.getOne({ _id: id });
  delete = (id) => this.permissionService.delete({ _id: id });
  getAll = () => this.permissionService.getAll();
}
