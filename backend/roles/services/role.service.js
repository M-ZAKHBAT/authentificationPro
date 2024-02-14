import { Role } from "../model/roleSchema.js";

export class RoleService {
  Add = (role) => {
    const repository = new Role({
      name: role.name,
      permission: role.permission,
    });
    return repository.save();
  };
  update = async (id, item) => {
    const result = await Role.findOneAndUpdate({ _id: id }, item);
    if (result) return this.getOne(id);
    return null;
  };
  getOne = (id) => Role.findOne({ _id: id });
  getAll = () => Role.find();
}
