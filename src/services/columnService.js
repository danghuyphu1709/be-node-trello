import columnSchema from "~/models/columnSchema";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";

const list = async () => {
  const data = await columnSchema.find({});
  return data;
};

const findById = async (id) => {
  const data = await columnSchema.findOne({ _id: id });
  return data;
};

const create = async (data) => {
  const newData = await columnSchema.create(data);
  return newData;
};

const update = async (id, data) => {
  const updatedData = await columnSchema.findByIdAndUpdate({ _id: id }, data, {
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
    const destroy = await columnSchema.findByIdAndUpdate(
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

export const columnService = { list, findById, create, update, destroy };
