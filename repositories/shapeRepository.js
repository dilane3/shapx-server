import connection from "../db/index.js";
import Shape from "../models/Shape.js";

export default class ShapeRepository {
  /**
   * This method initialize the schema of the files table
   */
  async init() {
    // query database
    await connection.execute(
      `
        CREATE TABLE IF NOT EXISTS shapes (
          id INT(4) PRIMARY KEY,
          type VARCHAR(50) NOT NULL,
          x INT(4) NOT NULL,
          y INT(4) NOT NULL,
          color VARCHAR(10) NOT NULL,
          rotate INT(4) NOT NULL,
          width INT(4),
          height INT(4),
          radius_x INT(4),
          radius_y INT(4),
          side INT(4),
          file_id INT(4) NOT NULL,
          FOREIGN KEY (file_id) REFERENCES files(id)
        );
      `
    );

    console.log("Shapes tables created");
  }

  /**
   * This method remove the schema of the files table
   */
  async drop() {
    // query database
    await connection.execute(
      `
        DROP TABLE shapes;
      `
    );

    console.log("Shapes tables deleted");
  }

  /**
   * THis function create a new shape binded to a file
   * @param {*} id
   * @param {*} data
   * @returns
   */
  async create(id, data) {
    await connection.execute(
      `
      INSERT INTO shapes (id, type, x, y, color, rotate, width, height, radius_x, radius_y, side, file_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        data.id,
        data.type,
        data.x,
        data.y,
        data.color,
        data.rotate,
        data.width || null,
        data.height || null,
        data.radius_x || null,
        data.radius_y || null,
        data.side || null,
        id,
      ]
    );

    const shape = new Shape(data);

    return shape;
  }

  /**
   * This function delete a shape
   * @param {*} id
   */
  async delete(id) {
    await connection.execute(
      `
      DELETE FROM shapes 
      WHERE id = ?  
    `,
      [id]
    );
  }

  /**
   * This function update the name of a shape
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    await connection.execute(
      `
      UPDATE shapes 
      SET 
        x = ?,
        y = ?,
        color = ?,
        rotate = ?,
        width = ?,
        height = ?,
        radius_x = ?,
        radius_y = ?,
        side = ?
      WHERE id = ?  
    `,
      [
        data.x,
        data.y,
        data.color,
        data.rotate,
        data.width || null,
        data.height || null,
        data.radius_x || null,
        data.radius_y || null,
        data.side || null,
        id,
      ]
    );
  }
}
