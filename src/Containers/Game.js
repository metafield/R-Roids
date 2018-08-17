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

    kd.W.down(() => {
      player.accelerating = true;
      if (
        player.velocity.x * player.velocity.x +
          player.velocity.y * player.velocity.y <
        18 * 18
      ) {
        // add velocity. frinction will be added in the game loop.
        player.velocity.x += 0.05 * Math.cos(player.angle);
        player.velocity.y += 0.05 * Math.sin(player.angle);
      }
    });

    kd.W.up(() => {
      player.accelerating = false;
    });

    kd.A.down(() => {
      player.rotationalVelocity = -maxRotationalVelocity;
    });

    kd.A.up(() => {
      player.rotationalVelocity = 0;
    });

    kd.D.up(() => {
      player.rotationalVelocity = 0;
    });

    kd.D.down(() => {
      player.rotationalVelocity = maxRotationalVelocity;
    });

    this.setState({ player });
  }

  componentDidMount() {
    this.setState({ ctx: this.refs.canvas.getContext("2d") });
    // === GAME LOOP ===
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
      const { player } = this.state;
      // clear the canvas TODO: make canvas size a constant global somewhere.
      ctx.clearRect(0, 0, 700, 700);
      // add velocities
      player.angle += player.rotationalVelocity;
      player.x += player.velocity.x;
      player.y += player.velocity.y;
      player.draw(this.state.ctx);
      // reduce velocity when we arent accelerating
      if (!player.accelerating) {
        player.velocity.x *= 0.95;
        player.velocity.y *= 0.95;
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>
          {this.state.player.velocity.x},{this.state.player.velocity.y}
        </p>
        <p> {`Accelerating: ${this.state.player.accelerating} `} </p>
        <canvas ref="canvas" width={700} height={700} />
      </React.Fragment>
    );
  }
}

export default Game;
