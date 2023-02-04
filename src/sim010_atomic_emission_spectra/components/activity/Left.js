import React, { useEffect, useRef } from "react";

const LeftComponent = (props) => {
  const {
    paused,
    pauseWave,
    energyAlt,
    energyLabel,
    frequencyAlt,
    answerValues,
    wavelengthAlt,
    frequencyLabel,
    wavelengthLabel,
    selectedWavelength,
  } = props;

  const pauseValue = useRef(paused);

  let step = -4;

  function showAxes(ctx, axes) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var xMin = 0;

    ctx.beginPath();
    ctx.strokeStyle = "#6B6B76";

    // X-Axis
    ctx.moveTo(xMin, height / 2);
    ctx.lineTo(width, height / 2);

    // Y-Axis
    // ctx.moveTo(width/2, 0);
    // ctx.lineTo(width/2, height);

    // Starting line
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);

    ctx.stroke();
  }

  function plotSine(ctx, xOffset, yOffset) {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#00267D";

    let x = 0;
    let y = 0;
    let amplitude = 97;
    // let frequency = 50;
    let frequency = 105 - selectedWavelength * 10;
    while (x < width) {
      y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
      ctx.lineTo(x, y);
      x++;
    }
    ctx.stroke();
    ctx.save();

    ctx.stroke();
    ctx.restore();
  }

  function draw() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    context.clearRect(0, 0, 492, 492);
    showAxes(context);
    context.save();

    plotSine(context, step, 50);
    context.restore();

    step -= 4;
    if (pauseValue.current) return;
    window.requestAnimationFrame(draw);
  }

  useEffect(() => {
    window.requestAnimationFrame(draw);
    pauseWave();
  }, [selectedWavelength]);

  useEffect(() => {
    window.requestAnimationFrame(draw);
    pauseValue.current = paused;
  }, [paused]);

  return (
    <div className="left-container">
      <div className="canvas-container">
        <div className="wave-name">
          {answerValues[selectedWavelength - 1].waveName}
        </div>
        <canvas
          id="canvas"
          width="492"
          height="203"
          role="img"
          aria-label={answerValues[selectedWavelength - 1].waveLabel}
        ></canvas>

        <div className="inputs-container">
          <div className="box">
            <label className="input-label">
              <span className="sr-only">{wavelengthAlt}</span>
              <span aria-hidden="true">{wavelengthLabel}</span>
            </label>
            <div type="text" className="input-box wavelength">
              <span className="sr-only">
                {answerValues[selectedWavelength - 1].wavelengthLabel}
              </span>
              <span
                aria-hidden="true"
                dangerouslySetInnerHTML={{
                  __html: answerValues[selectedWavelength - 1].wavelength,
                }}
              />
            </div>
          </div>
          <div className="box">
            <label className="input-label">
              <span className="sr-only">{frequencyAlt}</span>
              <span aria-hidden="true">{frequencyLabel}</span>
            </label>
            <div type="text" className="input-box wavelength">
              <span className="sr-only">
                {answerValues[selectedWavelength - 1].frequencyLabel}
              </span>
              <span
                aria-hidden="true"
                dangerouslySetInnerHTML={{
                  __html: answerValues[selectedWavelength - 1].frequency,
                }}
              />
            </div>
          </div>
          <div className="box">
            <label className="input-label">
              <span className="sr-only">{energyAlt}</span>
              <span aria-hidden="true">{energyLabel}</span>
            </label>
            <div type="text" className="input-box wavelength">
              <span className="sr-only">
                {answerValues[selectedWavelength - 1].energyLabel}
              </span>
              <span
                aria-hidden="true"
                dangerouslySetInnerHTML={{
                  __html: answerValues[selectedWavelength - 1].energy,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
