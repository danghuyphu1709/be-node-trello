import Joi from "joi";
import mongoose from "mongoose";

const objectIdValidator = Joi.string().custom((value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) return helpers.error("any.invalid");
  return value;
}, "ObjectId Validation").messages({ "any.invalid": "ID không hợp lệ" });

const baseSchema = {
  title: Joi.string().required().messages({
    "string.base": "Tiêu đề phải là chuỗi",
    "string.empty": "Tiêu đề không được để trống",
    "any.required": "Tiêu đề là bắt buộc",
  }),
  description: Joi.string().required().messages({
    "string.base": "Mô tả phải là chuỗi",
    "any.required": "Mô tả là bắt buộc",
  }),
  type: Joi.string().required().messages({
    "string.base": "Loại phải là chuỗi",
    "any.required": "Loại là bắt buộc",
  }),
  ownerIds: Joi.array().items(objectIdValidator).optional().messages({
    "array.base": "Danh sách chủ sở hữu phải là mảng",
  }),
  memberIds: Joi.array().items(objectIdValidator).optional().messages({
    "array.base": "Danh sách thành viên phải là mảng",
  }),
  columnOrderIds: Joi.array().items(objectIdValidator).optional().messages({
    "array.base": "Danh sách cột phải là mảng",
  }),
  _destroy: Joi.boolean().optional().messages({
    "boolean.base": "_destroy phải là true hoặc false",
  })
};

const create = (req, res, next) => {
  const { error } = Joi.object(baseSchema).validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ message: "Dữ liệu không hợp lệ", details: error.details.map(d => d.message) });
  }
  next();
};

const update = create;

export const boardValidation = { create, update };
