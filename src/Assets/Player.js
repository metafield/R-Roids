import Rotate from '../Helpers/Rotation'

export default class Player {
  constructor() {
    this.x = 50; // players x Position
    this.y = 50; // players y Position
    this.angle = Rotate.deg2rad(180); // plays angle in degrees
    this.rotationalVelocity = 0;
    this.drawPath = [
      { x: 24, y: 0 },
      { x: -24, y: -18 },
      { x: -18, y: 0 },
      { x: -24, y: 18 },
    ];
  }

  draw(ctx) {
    const paths = this.drawPath;
    // beging drawing line for player
    ctx.beginPath();
    // start by finding the draw point by rotating then translating
    let x, y;
    x = Rotate.x(paths[0].x, paths[0].y, this.angle) + this.x;
    y = Rotate.y(paths[0].x, paths[0].y, this.angle) + this.y;
    ctx.moveTo(x, y);
    for (let i = 1; i < paths.length; i++) {
      x = Rotate.x(paths[i].x, paths[i].y, this.angle) + this.x;
      y = Rotate.y(paths[i].x, paths[i].y, this.angle) + this.y;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }
}
