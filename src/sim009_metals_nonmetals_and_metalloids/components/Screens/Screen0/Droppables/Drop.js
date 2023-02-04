import React, { useEffect, useRef } from "react";
import "./style.scss";

const Droppables = ({ data, onDrop }) => {
  const DropRef = useRef(null);

  useEffect(() => {
    $(DropRef.current).droppable({
      tolerance: "touch",
      drop: (event, ui) => {
        onDrop(data);
      },
    });
  }, []);

  return (
    <div
      role="img"
      key={data.id}
      ref={DropRef}
      aria-hidden="true"
      aria-label={data.experimentName}
      className={`experiment-container drop${data.id}`}
    >
      <div className={`droppable icon-only ${data.experimentClass}`}></div>
    </div>
  );
};

export default Droppables;
