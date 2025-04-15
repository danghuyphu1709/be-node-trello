import mongoose from "mongoose";
const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    boardId: { type: Schema.Types.ObjectId, ref: "board", required: true },
    columnId: { type: Schema.Types.ObjectId, ref: "column", required: true },
    title: { type: String, required: true, minlength: 1, maxlength: 255 },
    cover: { type: String, default: null },
    description: { type: String, default: null },
    memberIds: [{ type: Schema.Types.ObjectId, ref: "user", default: [] }],
    comments: [
      {
        userId: String,
        userEmail: String,
        userAvatar: String,
        userDisplayName: String,
        content: String,
        createdAt: Date,
      },
    ],
    attachments: [
      {
        fileName: String,
        fileType: String,
        fileURL: String,
        createdAt: Date,
      },
    ],
    _destroy: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("card", cardSchema);
