import mongoose from "mongoose";

const { Schema } = mongoose;
const roleSchema = new Schema({
  id: mongoose.ObjectId,
  name: {
    type: String,
    required: true,
  },
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Permission",
    },
  ],
});
export const Role = mongoose.model("Role", roleSchema, "Roles");
