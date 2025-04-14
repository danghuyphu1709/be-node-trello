import { StatusCodes } from "http-status-codes";
import { boardValidation } from "../validations/boardValidation.js";

const list = (req, res) => {};

const create = (req, res) => {
  res.status(StatusCodes.OK).json({
    message: "Create board successfully",
    data: req.body,
  });
};

const update = (req, res) => {};

const destroy = (req, res) => {};

export const boardsController = {
  list,
  create,
  update,
  destroy,
};
