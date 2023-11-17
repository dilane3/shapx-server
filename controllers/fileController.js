import FileRepository from "../repositories/fileRepository.js";

export default class FileController {
  static async createFile(req, res) {
    const { id, name } = req.body;

    if (!id || !name) {
      return res.status(400).json({
        status: 400,
        data: {
          message: "Bad Request, please provide id and name correctly",
        },
      });
    }

    // Get repository
    const fileRepository = new FileRepository();

    const file = await fileRepository.create(id, name);

    return res.json({
      status: 201,
      data: file,
    });
  }

  static async findAll(req, res) {
    // Get repository
    const fileRepository = new FileRepository();

    const files = await fileRepository.findAll();

    return res.json({
      status: 200,
      data: files,
    });
  }

  static async removeFile(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 400,
        data: {
          message: "Bad Request, please provide id of the file",
        },
      });
    }

    // Get repository
    const fileRepository = new FileRepository();

    await fileRepository.delete(id);

    return res.json({
      status: 200,
      data: {
        message: "File deleted",
      },
    });
  }

  static async updateFile(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name) {
      return res.status(400).json({
        status: 400,
        data: {
          message: "Bad Request, please provide id and name correctly",
        },
      });
    }

    console.log({ id, name })

    // Get repository
    const fileRepository = new FileRepository();

    await fileRepository.update(id, name);

    return res.json({
      status: 200,
      data: {
        message: "File updated",
      },
    });
  }
}
