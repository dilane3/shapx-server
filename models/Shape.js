export default class Shape {
  constructor(data) {
    this.id = data.id;
    this.type = data.type;
    this.x = data.x;
    this.y = data.y;
    this.color = data.color;
    this.rotate = data.rotate;
    this.width = data.width || undefined;
    this.height = data.height || undefined;
    this.radiusX = data.radius_x || undefined;
    this.radius_y = data.radius_y || undefined;
    this.side = data.side || undefined;
  }
}