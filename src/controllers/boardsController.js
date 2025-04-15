import { StatusCodes } from "http-status-codes";
import { boardService } from "~/services/boardService";
import ApiError from "~/utils/ApiError";
const list = async (req, res) => {
  try {
    const data = await boardService.list();

    res.status(StatusCodes.OK).json({
      status: true,
      data: data,
    });
  } catch (error) {
    throw new ApiError();
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await boardService.findById(id);

    res.status(StatusCodes.OK).json({
      status: true,
      data: data,
    });
  } catch (error) {
    throw new ApiError();
  }
};

const create = async (req, res) => {
  try {
    const data = await boardService.create(req.body);

    res.status(StatusCodes.OK).json({
      status: true,
      data: data,
    });
  } catch (error) {
    throw new ApiError();
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await boardService.update(id, req.body);

    res.status(StatusCodes.OK).json({
      status: true,
      data: data,
    });
  } catch (error) {
    throw new ApiError();
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await boardService.destroy(id);

    res.status(StatusCodes.OK).json({
      status: true,
    });
  } catch (error) {
    throw new ApiError();
  }
};

export const boardsController = {
  list,
  create,
  update,
  destroy,
  findById,
};
