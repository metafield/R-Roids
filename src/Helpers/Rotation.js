export default class Rotate {
  static deg2rad(angle) {
    return (Math.PI * angle) / 180;
  }

  static x(x, y, angle) {
    return x * Math.cos(angle) - y * Math.sin(angle);
  }

  static y(x, y, angle) {
    return x * Math.sin(angle) + y * Math.cos(angle);
  }
}
