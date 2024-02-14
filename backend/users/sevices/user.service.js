import bcrypt from "bcrypt";
import { User } from "../model/schemaUser.js";
export class UserService {
  constructor() {
    this.saltRounds = 10;
  }

  async getSchema(item) {
    const { email, username, password } = item;
    const salt = await bcrypt.genSalt(this.saltRounds);
    const cryptedPassword = await bcrypt.hash(password, salt);
    return new User({ email, username, password: cryptedPassword, salt });
  }
  Add = async (item) => {
    this.collection = await this.getSchema(item);
    const user = await this.collection.save(item);
    if (user) return user["_doc"];
  };

  update = async (id, item) => {
    if (item.password) {
      const user = await this.getOne(id);
      if (user) item.password = await bcrypt.hash(item.password, user.salt);
      item._id = id;
      this.Add(item);
    } else {
      return null;
    }
    const result = await User.findByIdAndUpdate({ _id: id }, item);
    if (result) return this.getOne(id);
    return null;
  };

  getOne = (id) => User.findOne({ _id: id });
  delete = (id) => User.findByIdAndDelete({ _id: id });
  getAll = () => User.find({});

  findByParams(params, value) {
    return User.findOne({ [params]: value });
  }
}
