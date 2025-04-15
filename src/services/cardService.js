import cardSchema from "~/models/cardSchema";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";

const list = async () => {
  const data = await cardSchema.find({});
  return data;
};

const findById = async (id) => {
  const data = await cardSchema.findOne({ _id: id });
  return data;
};

const create = async (data) => {
  const newData = await cardSchema.create(data);
  return newData;
};

const update = async (id, data) => {
  const updatedData = await cardSchema.findByIdAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  });

  if (!updatedData)
    throw new ApiError(
      StatusCodes.NOT_FOUND,
      "Không tìm thấy bản ghi để xoá !"
    );

  return updatedData;
};

const destroy = async (id) => {
  try {
    const destroy = await cardSchema.findByIdAndUpdate(
      { _id: id },
      { _destroy: true },
      { new: true, runValidators: true }
    );

    if (!destroy) {
      throw new ApiError(
        StatusCodes.NOT_FOUND,
        "Không tìm thấy bản ghi để xoá !"
      );
    }

    return destroy;
  } catch (error) {
    console.error("Lỗi khi xoá bản ghi:", error.message);
    throw error;
  }
};

export const cardService = { list, findById, create, update, destroy };
