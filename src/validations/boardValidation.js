import Joi from "joi";
import { StatusCodes } from "http-status-codes";

const createNew = (req, res, next) => {
  const correctSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().optional(),
    status: Joi.string().valid("active", "inactive").optional(),
    userId: Joi.string().required(),
  });
};

export const boardValidation = {
  createNew,
};
