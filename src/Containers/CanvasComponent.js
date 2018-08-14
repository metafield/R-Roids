import React, { Component } from "react";

class CanvasComponent extends Component {
  componentDidMount() {
    this.update();
  }

  update() {
    const ctx = this.refs.canvas.getContext("2d");
    context.fillRect(0, 0, 100, 100);
  }

  render() {
    return (
      <canvas ref="canvas" width={1000} height={1000}/>
    );
  }
}

export default CanvasComponent;
