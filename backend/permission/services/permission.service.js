import { Permission } from "../model/permissionSchema.js";

export class PermissionService {
  Add = (permission) => {
    const repository = new Permission({
      name: permission.id,
    });
    return repository.save();
  };
  update = async (id, item) => {
    const result = await Permission.findByIdAndUpdate({ _id: id }, item);
    if (result) return this.getOne({ _id: id });
    return null;
  };
  getOne = (id) => Permission.findOne({ _id: id });
  delete = (id) => Permission.findByIdAndDelete({ _id: id });
  getAll = () => Permission.find();
}
