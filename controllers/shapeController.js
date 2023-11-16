import FileRepository from "../repositories/fileRepository.js";
import ShapeRepository from "../repositories/shapeRepository.js";

export default class ShapeController {
  static async createShape(req, res) {
    const { file_id, id, type, x, y, color, rotate } = req.body;

    if (
      !file_id ||
      !id ||
      !type ||
      x === undefined ||
      y === undefined ||
      !color ||
      rotate === undefined
    ) {
      return res.status(400).json({
        status: 400,
        data: {
          message:
            "Bad Request, please provide id, type, x, y, color, and rotate correctly",
        },
      });
    }

    // Get repository
    const shapeRepository = new ShapeRepository();

    const shape = await shapeRepository.create(file_id, req.body);

    return res.json({
      status: 201,
      data: shape,
    });
  }

  static async removeShape(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 400,
        data: {
          message: "Bad Request, please provide id of the shape",
        },
      });
    }

    // Get repository
    const shapeRepository = new ShapeRepository();

    await shapeRepository.delete(id);

    return res.json({
      status: 200,
      data: {
        message: "Shape deleted",
      },
    });
  }

  static async updateShape(req, res) {
    const { id } = req.params;
    const { x, y, color, rotate } = req.body;

    if (
      !id ||
      x === undefined ||
      y === undefined ||
      !color ||
      rotate === undefined
    ) {
      return res.status(400).json({
        status: 400,
        data: {
          message:
            "Bad Request, please provide id, x, y, color, and rotate correctly",
        },
      });
    }

    // Get repository
    const shapeRepository = new ShapeRepository();

    await shapeRepository.update(id, req.body);

    return res.json({
      status: 200,
      data: {
        message: "File updated",
      },
    });
  }
}
