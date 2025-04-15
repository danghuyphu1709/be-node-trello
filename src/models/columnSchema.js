import mongoose from "mongoose";
const { Schema } = mongoose;

const columnSchema = new Schema(
  {
    boardId: { type: Schema.Types.ObjectId, ref: "board", required: true },
    title: { type: String, required: true, minlength: 1, maxlength: 255 },
    cardOrderIds: [{ type: Schema.Types.ObjectId, ref: "card", default: [] }],
    _destroy: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("column", columnSchema);
