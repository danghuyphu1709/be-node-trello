import { Types } from "mongoose";

export const formatObjectId = (arrayListIds) => {
  if (!arrayListIds || arrayListIds.length <= 0) return null;
  return arrayListIds.map((id) => new Types.ObjectId(id));
};
