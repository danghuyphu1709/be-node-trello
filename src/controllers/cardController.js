import { StatusCodes } from "http-status-codes";
import { cardService } from "~/services/cardService";
import ApiError from "~/utils/ApiError";
const list = async (req, res) => {
  try {
    const data = await cardService.list();

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

    const data = await cardService.findById(id);

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
    const data = await cardService.create(req.body);
   
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

    const data = await cardService.update(id, req.body);

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

    const data = await cardService.destroy(id);

    res.status(StatusCodes.OK).json({
      status: true,
    });
  } catch (error) {
    throw new ApiError();
  }
};

export const cardController = {
  list,
  create,
  update,
  destroy,
  findById,
};
