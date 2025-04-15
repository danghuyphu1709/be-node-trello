import Joi from "joi";
import mongoose from "mongoose";

const objectIdValidator = Joi.string().custom((value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) return helpers.error("any.invalid");
  return value;
}, "ObjectId Validation").messages({ "any.invalid": "ID không hợp lệ" });

const schema = {
  boardId: objectIdValidator.required().messages({ "any.required": "boardId là bắt buộc" }),
  columnId: objectIdValidator.required().messages({ "any.required": "columnId là bắt buộc" }),
  title: Joi.string().required().messages({
    "string.base": "Tiêu đề phải là chuỗi",
    "any.required": "Tiêu đề là bắt buộc",
  }),
  cover: Joi.string().allow(null).optional(),
  description: Joi.string().allow(null, "").optional(),
  memberIds: Joi.array().items(objectIdValidator).optional(),
  comments: Joi.array().items(Joi.object({
    userId: Joi.string(),
    userEmail: Joi.string().email(),
    userAvatar: Joi.string(),
    userDisplayName: Joi.string(),
    content: Joi.string(),
    createdAt: Joi.date()
  })).optional(),
  attachments: Joi.array().items(Joi.object({
    fileName: Joi.string(),
    fileType: Joi.string(),
    fileURL: Joi.string(),
    createdAt: Joi.date()
  })).optional(),
  _destroy: Joi.boolean().optional()
};

const create = (req, res, next) => {
  const { error } = Joi.object(schema).validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ message: "Dữ liệu không hợp lệ", details: error.details.map(d => d.message) });
  next();
};

const update = create;

export const cardValidation = { create, update };
