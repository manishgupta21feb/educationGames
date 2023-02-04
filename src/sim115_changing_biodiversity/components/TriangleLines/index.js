import React, { useState, useEffect } from "react";
import "./triangle_lines.scss";

const TriangleLines = (props) => {
  const { totalTriangle, lineNumber } = props;

  const [traingleCount, setTraingleCount] = useState([]);

  useEffect(() => {
    abc();
  }, []);

  const abc = () => {
    let _temp = [];

    for (let i = 1; i <= totalTriangle; i++) {
      _temp.push(<div className="triangle-line__triangle"></div>);
    }

    setTraingleCount(_temp);
  };

  return (
    <div className={`triangle-line triangle-line--${lineNumber}`}>
      {traingleCount.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
};

export default TriangleLines;
