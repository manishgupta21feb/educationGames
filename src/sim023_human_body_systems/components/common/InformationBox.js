import React, { useEffect, useRef } from "react";
import "./_informationBox.scss";

export default (props) => {
  const ref = useRef(null);
  const { hotspotData } = props;

  useEffect(() => {
    if (ref.current && ref.current.clientHeight < ref.current.scrollHeight) {
      ref.current.tabIndex = "0";
    }
  }, []);

  return (
    <div
      ref={ref}
      role="alertdialog"
      className={`dynamic`}
      aria-labelledby="dialogheading"
    >
      <div id="dialogheading" className="sr-only sr-image">{`${ hotspotData.textLabel }`}</div>
      <p aria-hidden dangerouslySetInnerHTML={{ __html: hotspotData.text }}></p>
    </div>
  );
};
