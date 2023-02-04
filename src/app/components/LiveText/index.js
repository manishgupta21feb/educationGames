import React from "react";

const AriaLiveRegion = ({ role = "alert", atomic, politeness, message }) => {
  return (
    <div
      role={role}
      className="sr-only"
      aria-atomic={atomic || null}
      aria-live={politeness || null}
    >
      {message}
    </div>
  );
};

export default AriaLiveRegion;
