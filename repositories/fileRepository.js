import connection from "../db/index.js";
import File from "../models/File.js";
import Shape from "../models/Shape.js";

export default class FileRepository {
  /**
   * This method initialize the schema of the files table
   */
  async init() {
    // query database
    await connection.execute(
      `
        CREATE TABLE IF NOT EXISTS files (
          id INT(4) PRIMARY KEY,
          name VARCHAR(50) NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
      `
    );

    console.log("Files tables created");
  }

  /**
   * This method remove the schema of the files table
   */
  async drop() {
    // query database
    await connection.execute(
      `
        DROP TABLE files;
      `
    );

    console.log("Shapes tables deleted");
  }

  /**
   * THis function create a new file (drawing draft) into the database
   * @param {*} id
   * @param {*} name
   * @returns
   */
  async create(id, name) {
    await connection.execute(
      `
      INSERT INTO files (id, name)
      VALUES (?, ?)
    `,
      [id, name]
    );

    const file = new File(id, name);

    return file;
  }

  /**
   * Returns the list of files with its shapes directly
   *
   * We are joining two tables here (files and shapes)
   * @returns
   */
  async findAll() {
    const [allFiles] = await connection.execute(`
      SELECT *
      FROM files
    `);

    const files = [];

    allFiles.forEach((row) => {
      const file = new File({
        ...row,
        id: row.file_id,
      });

      files.push(file);
    });

    // Get all shapes
    const [rows] = await connection.execute(
      `
        SELECT *, shapes.id AS shape_id
        FROM files, shapes
        WHERE shapes.file_id = files.id
      `
    );


    rows.forEach((row) => {
      const shape = new Shape({
        ...row,
        id: row.shape_id,
      });

      // Check if the file has already been added into the files list
      const index = files.findIndex((f) => f.id === row.file_id);

      if (index !== -1) {
        files[index].add(shape);
      }
    });

    return files;
  }

  /**
   * This function delete a file
   * @param {*} id
   */
  async delete(id) {
    await connection.execute(
      `
      DELETE FROM files 
      WHERE id = ?  
    `,
      [id]
    );
  }

  /**
   * This function update the name of a file
   * @param {*} id
   * @param {*} name
   */
  async update(id, name) {
    await connection.execute(
      `
      UPDATE files 
      SET name = ?
      WHERE id = ?  
    `,
      [name, id]
    );
  }
}
