import mongoose from "mongoose";

const { Schema } = mongoose;

const permissionSchema = new Schema({
  id: mongoose.ObjectId,
  name: {
    type: String,
    required: true,
  },
  roleId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

export const Permission = mongoose.model(
  "Permission",
  permissionSchema,
  "Permissions"
);
