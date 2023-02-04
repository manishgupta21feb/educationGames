import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

const Left = (props) => {
  const {
    onClick,
    resources,
    mainImageAlt,
    isPopupActive,
    selectedResource,
    visitedResources,
    setResetFocusState,
    mainImageAltDynamic,
  } = props;

  const selResRef = useRef(selectedResource);

  useEffect(() => {
    if (selectedResource !== selResRef.current && selectedResource) {
      setResetFocusState(true);
    }
  }, [selectedResource]);

  const text = selectedResource
    ? resources.filter((r) => r.id == selectedResource)[0].text
    : "";
  const alt = selectedResource
    ? mainImageAltDynamic.replace("-item-", text)
    : mainImageAlt;
  return (
    <div className="left-wrapper">
      <img className="sr-only sr-image" alt={alt} />
      <div className="resources">
        {resources
          .filter((r) => (selectedResource ? r.id == selectedResource : true))
          .map((r) => {
            const active = r.id == selectedResource ? "active" : "";
            const visited =
              visitedResources.indexOf(r.id) >= 0 ? "visited" : "";
            const pressed = !!active || !!visited;
            const disabled = !!selectedResource || isPopupActive || visited;
            const classes =
              `hotspot-btn label ${r.id} ${active} ${visited}`.trim();
            return (
              <div
                key={`btn-wrapper-${r.id}`}
                className={`button-wrapper ${r.id}`}
              >
                <span className="marker"></span>
                <Button
                  text={r.text}
                  classes={classes}
                  disabled={disabled}
                  ariaPressed={pressed}
                  onClick={() => onClick(r.id)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Left;
