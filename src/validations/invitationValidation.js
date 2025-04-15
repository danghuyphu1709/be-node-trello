import Joi from "joi";
import mongoose from "mongoose";

const objectIdValidator = Joi.string().custom((value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) return helpers.error("any.invalid");
  return value;
}, "ObjectId Validation").messages({ "any.invalid": "ID không hợp lệ" });

const schema = {
  inviterId: objectIdValidator.required().messages({ "any.required": "Người mời là bắt buộc" }),
  inviteeId: objectIdValidator.required().messages({ "any.required": "Người được mời là bắt buộc" }),
  type: Joi.string().required().messages({ "any.required": "Loại lời mời là bắt buộc" }),
  boardInvitation: Joi.object({
    boardId: objectIdValidator.optional(),
    status: Joi.string().optional()
  }).optional(),
  _destroy: Joi.boolean().optional()
};

const create = (req, res, next) => {
  const { error } = Joi.object(schema).validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ message: "Dữ liệu không hợp lệ", details: error.details.map(d => d.message) });
  next();
};

const update = create;

export const invitationValidation = { create, update };