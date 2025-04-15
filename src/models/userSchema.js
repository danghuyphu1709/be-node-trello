import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    username: { type: String, unique: true },
    displayName: { type: String },
    avatar: { type: String },
    role: { type: String, default: "client" },
    isActive: { type: Boolean, default: false },
    verifyToken: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
