import mongoose from "mongoose";
import validator from "validator";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: mongoose.ObjectId,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  password: {
    required: [true, "please enter a password"],
    type: String,
  },
  // confirmPassword: {
  //   required: [true, "please enter a ConfirmPassword"],
  //   type: String,
  // },
  // confirmPassword: {
  //   type: String,
  //   required: true, // Assurez-vous que le champ est requis
  // },
  salt: {
    required: true,
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  // roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
});
export const User = mongoose.model("User", userSchema, "Users");
