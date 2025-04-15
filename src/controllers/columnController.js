import { StatusCodes } from "http-status-codes";
import { columnService } from "~/services/columnService";
import ApiError from "~/utils/ApiError";
const list = async (req, res) => {
  try {
    const data = await columnService.list();

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

    const data = await columnService.findById(id);

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
    const data = await columnService.create(req.body);
   
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

    const data = await columnService.update(id, req.body);

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

    const data = await columnService.destroy(id);

    res.status(StatusCodes.OK).json({
      status: true,
    });
  } catch (error) {
    throw new ApiError();
  }
};

export const columnController = {
  list,
  create,
  update,
  destroy,
  findById,
};
