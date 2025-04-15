import Joi from "joi";
import mongoose from "mongoose";

const objectIdValidator = Joi.string()
  .custom((value, helpers) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helpers.error("any.invalid");
    }
    return value;
  }, "ObjectId Validation")
  .messages({
    "any.invalid": "ID không hợp lệ",
  });

const create = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().messages({
      "string.base": "Tiêu đề phải là chuỗi",
      "string.empty": "Tiêu đề không được để trống",
      "any.required": "Tiêu đề là bắt buộc",
    }),
    description: Joi.string().optional().allow("").messages({
      "string.base": "Mô tả phải là chuỗi",
    }),
    type: Joi.string().optional().messages({
      "string.base": "Loại phải là chuỗi",
    }),
    ownerIds: Joi.array().items(objectIdValidator).optional().messages({
      "array.base": "Danh sách chủ sở hữu phải là một mảng",
    }),
    MembersIds: Joi.array().items(objectIdValidator).optional().messages({
      "array.base": "Danh sách thành viên phải là một mảng",
    }),
    _destroy: Joi.boolean().optional().messages({
      "boolean.base": "Giá trị _destroy phải là true hoặc false",
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Dữ liệu không hợp lệ",
      details: error.details.map((detail) => detail.message),
    });
  }

  next();
};

const update = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().messages({
      "string.base": "Tiêu đề phải là chuỗi",
      "string.empty": "Tiêu đề không được để trống",
      "any.required": "Tiêu đề là bắt buộc",
    }),
    description: Joi.string().optional().allow("").messages({
      "string.base": "Mô tả phải là chuỗi",
    }),
    type: Joi.string().optional().messages({
      "string.base": "Loại phải là chuỗi",
    }),
    ownerIds: Joi.array().items(objectIdValidator).optional().messages({
      "array.base": "Danh sách chủ sở hữu phải là một mảng",
    }),
    MembersIds: Joi.array().items(objectIdValidator).optional().messages({
      "array.base": "Danh sách thành viên phải là một mảng",
    }),
    _destroy: Joi.boolean().optional().messages({
      "boolean.base": "Giá trị _destroy phải là true hoặc false",
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Dữ liệu không hợp lệ",
      details: error.details.map((detail) => detail.message),
    });
  }

  next();
};

export const boardValidation = {
  create,
  update
};
