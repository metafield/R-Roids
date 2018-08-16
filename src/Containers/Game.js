import React, { Component } from "react";
import Player from "../Assets/Player";
import kd from "keydrown";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: new Player(),
      pressed: []
    };
  }

  inputHandler() {
    const maxRotationalVelocity = 0.06;
    const { player } = this.state;

    kd.A.down(() => { 
      player.rotationalVelocity = -maxRotationalVelocity;
    });

    kd.D.down(() => {
      player.rotationalVelocity = maxRotationalVelocity;
    });

    kd.A.up(() => {
      player.rotationalVelocity = 0;
    });

    kd.D.up(() => {
      player.rotationalVelocity = 0;
    });

    this.setState({ player });
  }

  componentDidMount() {
    this.setState({ ctx: this.refs.canvas.getContext("2d") });
    // keydrown provides a loop that utilizes request animation frame for smooth results.
    kd.run(() => {
      kd.tick();
      this.inputHandler();
      this.update();
    });
  }

  // our main update function. This is ran every game tick and will render the results of our
  // inputs by applying physics to the graphics.
  update() {
    if (this.state) {
      const { ctx } = this.state;
      ctx.clearRect(0, 0, 700, 700);
      const { player } = this.state;

      // add rotations
      player.angle += player.rotationalVelocity;
      player.draw(this.state.ctx);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={700}
        height={700}
      />
    );
  }
}

export default Game;
