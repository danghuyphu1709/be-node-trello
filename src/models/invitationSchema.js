import mongoose from "mongoose";
const { Schema } = mongoose;

const invitationSchema = new Schema(
  {
    inviterId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    inviteeId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    type: { type: String, required: true },
    boardInvitation: {
      boardId: { type: Schema.Types.ObjectId, ref: "board" },
      status: { type: String },
    },
    _destroy: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("invitation", invitationSchema);
