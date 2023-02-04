import React, { Component } from "react";

class Waves extends Component {
  constructor(props) {
    super(props);

    if (!props.depth || !props.frequency) {
      throw new Error("Required props, depth and frequency are missing.");
    }

    this.state = {
      depth: props.depth,
      frequency: props.frequency,
      miliSecondsRunTime: 1000,
    };

    this.points = [];
    this.screenWidth = 490;
    this.screenHeight = 62;
    this.previousRunTime = 0;

    this.tableData = {
      deep_low: {
        wavelength: 355,
        frequency: 0.5,
        timer1Value: 1,
        timer2Value: 3,
        waveTime: 2,
        waveCompleteTime: 4000,
      },
      deep_medium: {
        wavelength: 177.5,
        frequency: 1,
        timer1Value: 1,
        timer2Value: 3,
        waveTime: 1,
        waveCompleteTime: 4000,
      },
      deep_high: {
        wavelength: 88.75,
        frequency: 2,
        timer1Value: 1,
        timer2Value: 3,
        waveTime: 0.5,
        waveCompleteTime: 4000,
      },
      medium_low: {
        wavelength: 177.5,
        frequency: 0.5,
        timer1Value: 2,
        timer2Value: 6,
        waveTime: 2,
        waveCompleteTime: 8000,
      },
      medium_medium: {
        wavelength: 29.77,
        frequency: 1,
        timer1Value: 2,
        timer2Value: 6,
        waveTime: 1,
        waveCompleteTime: 8000,
      },
      medium_high: {
        wavelength: 100,
        frequency: 2,
        timer1Value: 2,
        timer2Value: 6,
        waveTime: 0.5,
        waveCompleteTime: 8000,
      },
      shallow_low: {
        wavelength: 88.75,
        frequency: 0.5,
        timer1Value: 4,
        timer2Value: 12,
        waveTime: 2,
        waveCompleteTime: 16000,
      },
      shallow_medium: {
        wavelength: 44.375,
        frequency: 1,
        timer1Value: 4,
        timer2Value: 12,
        waveTime: 1,
        waveCompleteTime: 16000,
      },
      shallow_high: {
        wavelength: 22.1875,
        frequency: 1,
        timer1Value: 4,
        timer2Value: 12,
        waveTime: 0.5,
        waveCompleteTime: 16000,
      },
    };

    const data = this.tableData[this.state.depth + "_" + this.state.frequency];
    this.amp = parseInt((this.screenHeight * 14) / 100);
    this.wlen = data.wavelength;
    this.freq = data.frequency;
    this.degrees = 0;
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext("2d");
    setTimeout(() => {
      // this.activityStarted = true;
      // this.start();
      this.draw();
    });
  }

  draw = () => {
    let gradient = this.ctx.createLinearGradient(0, 0, 0, this.screenHeight);
    gradient.addColorStop(0, "#B9F8D9");
    gradient.addColorStop(1, "#0BA4BE");
    // this.ctx.fillStyle = gradient;

    this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    this.ctx.fillStyle = "#03CDFB";
    if (this.activityStarted) {
      this.drawSine();
    } else {
      this.stillWaterLine();
    }

    this.leveller();
    // this.fillDepth();
  };

  stillWaterLine = () => {
    let width = this.screenWidth;
    let waveStartPoint =
      this.screenHeight - parseInt((this.screenHeight * 45) / 100);

    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "#03CDFB";

    this.points = [];
    let x = 0;
    let y = waveStartPoint;
    while (x <= width) {
      this.ctx.lineTo(x, y);
      this.points.push(y);
      x++;
    }

    this.ctx.stroke();

    this.ctx.lineTo(this.screenWidth, this.screenHeight);
    this.ctx.lineTo(0, this.screenHeight);
    this.ctx.globalCompositeOperation = "destination-over";
    this.ctx.fill();
    this.ctx.globalCompositeOperation = "source-over";
  };

  drawSine = () => {
    this.points = [];
    const { miliSecondsRunTime } = this.state;
    const { waveCompleteTime } =
      this.tableData[this.state.depth + "_" + this.state.frequency];
    let height = this.screenHeight - parseInt((this.screenHeight * 45) / 100);
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "#03CDFB";
    let mult = 8.6 / this.wlen;
    let shift = this.angle - mult * (this.screenWidth - 1) + Math.PI;

    let wavePercentage = 0;
    if (miliSecondsRunTime <= waveCompleteTime) {
      let percentage = (miliSecondsRunTime * 100) / waveCompleteTime;
      wavePercentage = parseInt((percentage * this.screenWidth) / 100);
      for (let i = 0; i < wavePercentage; i++) {
        let sine = Math.sin(-(mult * i - shift));
        let yPos = sine * this.amp + height;
        this.points[i] = yPos;
        this.ctx.lineTo(i, yPos);
      }

      for (let i = wavePercentage; i < this.screenWidth; i++) {
        let yPos = height;
        this.points[i] = yPos;
        this.ctx.lineTo(i, yPos);
      }
    } else {
      for (let i = 0; i < this.screenWidth; i++) {
        let sine = Math.sin(-(mult * i - shift));
        let yPos = sine * this.amp + height;
        this.points[i] = yPos;
        this.ctx.lineTo(i, yPos);
      }
    }

    this.ctx.stroke();

    this.ctx.lineTo(490, this.screenHeight);
    this.ctx.lineTo(0, this.screenHeight);
    this.ctx.globalCompositeOperation = "destination-over";
    this.ctx.fill();
    this.ctx.globalCompositeOperation = "source-over";
  };

  leveller = () => {
    // this.duck.style.left = `${this.props.duckLeftPosition}px`;
    // this.duck.style.top = 130 + this.points[1] + "px";
    this.duck.style.top = this.points[200] - 15 + "px";
    this.ctx.beginPath();
    this.ctx.lineTo(200, this.points[200]);
    this.ctx.lineTo(200, this.screenHeight);
    this.ctx.lineWidth = 1;
    if (!this.props.hideDuckTether) {
      this.ctx.strokeStyle = "#40a2af";
    }
    this.ctx.stroke();
  };

  setTimer = (progress) => {
    let miliSecondsRunTime = progress + this.previousRunTime;
    this.setState({ miliSecondsRunTime }, () => {
      this.incrAngle();
    });
  };

  incrAngle = (timestamp) => {
    let tNow = Date.now();
    let elapsed = tNow - this.tThen;
    this.degrees += (360 / 1000) * this.freq * elapsed;
    if (this.degrees > 360) {
      this.degrees -= 360;
    }
    this.angle = (this.degrees / 180) * Math.PI;
    this.tThen = tNow;
    this.draw();
  };

  animate = (timestamp) => {
    if (!this.startTimestamp) this.startTimestamp = timestamp;
    const progress = timestamp - this.startTimestamp;
    this.setTimer(progress);
    this.frameId = requestAnimationFrame(this.animate);
  };

  start = () => {
    this.tThen = Date.now();
    const data = this.tableData[this.state.depth + "_" + this.state.frequency];
    this.wlen = data.wavelength;
    this.freq = data.frequency;
    this.frameId = requestAnimationFrame(this.animate);
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
    this.frameId = null;
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props !== prevProps &&
      this.props.playState !== prevProps.playState
    ) {
      if (this.props.playState) {
        this.activityStarted = true;
        this.start();
      } else {
        this.activityStarted = true;
        this.stop();
      }
    }
  }

  render() {
    return (
      <div className="waves-wrapper">
        <div className="waves">
          <canvas
            width="490"
            height="62"
            className="wave-animation"
            ref={(el) => (this.canvas = el)}
          />
          <div className="border-outlines"></div>
          <div className="duck-image" ref={(el) => (this.duck = el)}></div>
        </div>
      </div>
    );
  }
}

export default Waves;
