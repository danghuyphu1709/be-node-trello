import boardSchema from "~/models/boardSchema";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { slugify } from "~/utils/sorts";
import { formatObjectId } from "~/utils/utils";
const list = async () => {
  const data = await boardSchema
    .find({ _destroy: false })
    // .populate("ownerIds")
    // .populate("memberIds")
    .populate("columns");

  return data;
};

const findById = async (id) => {
  const data = await boardSchema
    .findOne({ _id: id })
    // .populate("ownerIds")
    // .populate("memberIds")
    .populate("columns");
  return data;
};

const create = async (data) => {
  data.slug = slugify(data.title);
  data.columns = formatObjectId(data.columnOrderIds);
  const newData = await boardSchema.create(data);
  return data;
};

const update = async (id, data) => {
  data.slug = slugify(data.title);
  const updatedData = await boardSchema.findByIdAndUpdate({ _id: id }, data, {
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
    const destroy = await boardSchema.findByIdAndUpdate(
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

export const boardService = { list, findById, create, update, destroy };
