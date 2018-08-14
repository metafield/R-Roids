import React, { Component } from "react";
import Player from '../Assets/Player';

class Game extends Component {
  constructor(props) {
    super(props);
    this.player = new Player();
  }

  componentDidMount() {
    this.update();
  }

  update() {
    const ctx = this.refs.canvas.getContext("2d");
    // ctx.fillRect(0, 0, 100, 100);
    this.player.draw(ctx)
  }

  render() {
    return (
      <canvas ref="canvas" width={1000} height={1000}/>
    );
  }
}

export default Game;
