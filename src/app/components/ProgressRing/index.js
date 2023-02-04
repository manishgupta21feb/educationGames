import React, { useEffect, useRef } from "react";
import "./style.scss";

const ProgressRing = (props) => {
  const LINE_WIDTH = 4;
  const STROKE_STYLE = "#FFF";

  const ref = useRef(null);
  const context = useRef(null);
  const { circumference, children, value, total } = props;

  useEffect(() => {
    if (ref.current) {
      context.current = ref.current.getContext("2d");
      context.current.lineWidth = props.lineWidth || LINE_WIDTH;
      context.current.strokeStyle = props.strokeStyle || STROKE_STYLE;
      const percent = (value / total) * 100;
      drawArc(context, percent);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const percent = (value / total) * 100;
      drawArc(context, percent);
    }
  }, [value]);

  const drawArc = (context, percent) => {
    const diff = ((percent / 100) * Math.PI * 2 * 10).toFixed(2);
    context.current.clearRect(0, 0, ref.current.width, ref.current.height);
    context.current.beginPath();
    context.current.arc(
      ref.current.width / 2,
      ref.current.height / 2,
      circumference / 2,
      0,
      diff / 10,
      false
    );
    context.current.stroke();
  };

  return (
    <div aria-hidden className="progress-ring">
      <canvas
        ref={ref}
        width={circumference + 10}
        height={circumference + 10}
      ></canvas>
      <div className="progress-ring__content">{children}</div>
    </div>
  );
};

export default ProgressRing;
