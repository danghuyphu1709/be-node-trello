import Joi from "joi";

const schema = {
  id: Joi.string().required(),
  email: Joi.string().email().required().messages({
    "string.email": "Email không hợp lệ",
    "any.required": "Email là bắt buộc"
  }),
  password: Joi.string().required(),
  username: Joi.string().required(),
  displayName: Joi.string().optional(),
  avatar: Joi.string().optional(),
  role: Joi.string().default("client"),
  isActive: Joi.boolean().default(false),
  verifyToken: Joi.string().allow(null).optional()
};

const create = (req, res, next) => {
  const { error } = Joi.object(schema).validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ message: "Dữ liệu không hợp lệ", details: error.details.map(d => d.message) });
  next();
};

const update = create;

export const userValidation = { create, update };
