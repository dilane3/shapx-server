import connection from "../db/index.js";

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

  create() {}

  findAll() {}

  delete() {}

  update() {}
}
