import { UserService } from "../../users/sevices/user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export class AuthService {
  constructor() {
    this.userService = new UserService();
  }

  login = async (item) => {
    const { email, password } = item;
    const user = await this.userService.findByParams("email", email);
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          {
            ...this.getSinitizeUser(user),
          },
          "privatekey",
          {
            expiresIn: "1d",
          }
        );
        return { success: true, message: "Authentication successful", token };
      } else {
        return {
          success: false,
          message: "Erreur de connexion. Veuillez réessayer",
        };
      }
    } else {
      return { success: false, message: "User not found" };
    }
  };

  register = async (item) => {
    try {
      const user = await this.userService.Add(item);
      if (user) {
        const token = jwt.sign(
          {
            ...this.getSinitizeUser(user),
          },
          "privatekey",
          {
            expiresIn: "1d",
          }
        );
        return { token };
      }
    } catch (error) {
      const { code } = error;
      if (code === 11000) return "duplicate email";
    }
  };

  getSinitizeUser = (user) => {
    const { _id, email, username } = user;
    return { _id, email, username };
  };
}
