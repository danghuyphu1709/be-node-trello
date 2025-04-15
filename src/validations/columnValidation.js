import Joi from "joi";
import mongoose from "mongoose";

const objectIdValidator = Joi.string().custom((value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) return helpers.error("any.invalid");
  return value;
}, "ObjectId Validation").messages({ "any.invalid": "ID không hợp lệ" });

const schema = {
  boardId: objectIdValidator.required().messages({
    "any.required": "boardId là bắt buộc",
  }),
  title: Joi.string().required().messages({
    "string.base": "Tiêu đề phải là chuỗi",
    "any.required": "Tiêu đề là bắt buộc",
  }),
  cardOrderIds: Joi.array().items(objectIdValidator).optional().messages({
    "array.base": "Danh sách thẻ phải là mảng",
  }),
  _destroy: Joi.boolean().optional()
};

const create = (req, res, next) => {
  const { error } = Joi.object(schema).validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ message: "Dữ liệu không hợp lệ", details: error.details.map(d => d.message) });
  }
  next();
};

const update = create;

export const columnValidation = { create, update };
