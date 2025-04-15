import mongoose from "mongoose";
const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    description: { type: String, required: true },
    title: { type: String, required: true, minlength: 1, maxlength: 255 },
    type: { type: String, required: true },
    ownerIds: [{ type: Schema.Types.ObjectId, ref: "user", default: [] }],
    memberIds: [{ type: Schema.Types.ObjectId, ref: "user", default: [] }],
    columnOrderIds: [
      { type: Schema.Types.ObjectId, ref: "column", default: [] },
    ],
    _destroy: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("board", boardSchema);
