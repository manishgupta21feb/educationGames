import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const rightSection = (props) => {
  const buttonRef = useRef(null);
  const [hotspot, setHotspot] = useState({});

  const {
    onClick,
    hotspots,
    isPopUpOpen,
    selectedHotspot,
    activityInstructions,
  } = props;

  useEffect(() => {
    if (selectedHotspot) {
      const _hotspot = hotspots.filter((h) => h.id == selectedHotspot)[0];
      setHotspot({ ..._hotspot });
      setTimeout(() => {
        if (buttonRef && buttonRef.current) {
          buttonRef.current.focus();
        }
      }, 50);
    } else {
      setHotspot({});
    }
  }, [selectedHotspot]);

  return (
    <div className="right-section">
      <div>
        <h1>{activityInstructions}</h1>
      </div>
      {hotspot.id ? (
        // <div></div>
        <div
          role="alertdialog"
          aria-labelledby="fossil-image-id"
          className={`fossil-info ${selectedHotspot}`}
        >

          <div>

            <div>
              <div id="fossil-info-section">
                <div
                  role="img"
                  id="fossil-image-id"
                  aria-label={hotspot.imageAlt}
                  className={`fossil-image ${selectedHotspot}-image`}
                >
                  {hotspot.imageTextContent ? (
                    <div aria-hidden={true} className="image-content">
                      {hotspot.imageTextContent.map((h, i) => {
                        return <p key={i}>{h}</p>;
                      })}
                    </div>
                  ) : null}
                </div>
                <p
                  className="content-para"
                  dangerouslySetInnerHTML={{ __html: hotspot.heading }}
                ></p>
                <p
                  className="content-para"
                  dangerouslySetInnerHTML={{ __html: hotspot.subheading }}
                ></p>
                <p className="list-heading">{hotspot.listHeading}</p>
                <ul className="items-list" role="list">
                  {hotspot.listItems.map((l, i) => {
                    const hidden = !hotspot.listItemsAlt || null;
                    const label = hotspot.listItemsAlt && hotspot.listItemsAlt[i];
                    return (
                      <li key={i} role="listitem">
                        <span role="img" aria-hidden={hidden} aria-label={label}>
                          <span aria-hidden={true}></span>
                        </span>
                        <p>{l}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Button
                text={"Close"}
                ref={buttonRef}
                onClick={onClick}
                ariaExpanded={null}
                classes={"hotspot-btn close"}
                describedby="fossil-info-section"
                isPopUpOpen={isPopUpOpen || !selectedHotspot}
              />
            </div>


          </div>

        </div>
      ) : null}
    </div>
  );
};

export default rightSection;
