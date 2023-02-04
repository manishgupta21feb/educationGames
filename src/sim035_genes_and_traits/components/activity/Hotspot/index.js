import React, { useEffect, useRef, useState } from "react";
import View from "../../../../app/components/View";
import Button from "../../../../app/components/Button";
import { isAndroid } from "react-device-detect";

// import Button from "../Button";
import "./style.scss";

const Hotspot = (props) => {
  const {
    nextBtn,
    liveText,
    hotspots,
    resetGame,
    isPopUpOpen,
    hotspotData,
    onCloseClick,
    onNextBtnClick,
    onHotspotClick,
    nextBtnText,
    headingScreen1,
  } = props;

  const ref = useRef(null);
  const ref2 = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [description, showDescription] = useState(false);
  const [remainingHotspots, setRemainingHotspots] = useState([
    "Gene",
    "Nucleus",
    "Chromosome",
    "Cell",
  ]);
  const descriptionRef = useRef(description);

  const onClose = () => {
    showDescription(false);
    onCloseClick(selectedIndex);
    EventManager.broadcast("SECONDARY_CLICK");
  };

  useEffect(() => {
    if (resetGame) {
      setSelectedIndex(-1);
      showDescription(false);
      setRemainingHotspots(["Gene", "Nucleus", "Chromosome", "Cell"]);
    }
  }, [resetGame]);

  const onClick = (i, name) => {
    EventManager.broadcast("PRIMARY_CLICK");
    onHotspotClick(i, name);
    setSelectedIndex(i);
    const temp = remainingHotspots.filter((r) => r !== name);
    setRemainingHotspots(temp);
    setTimeout(() => {
      showDescription(true);
    });
  };

  useEffect(() => {
    if (description && !descriptionRef.current) {
      if (ref.current) {
        setTimeout(() => {
          const closeButton = ref.current.querySelector(
            ".btn.hotspot-btn.close"
          );
          if (closeButton) {
            closeButton.focus();
          }
        });
      }
    }
    if (descriptionRef.current && !description) {
      if (ref2.current) {
        if (remainingHotspots.length) {
          const item = remainingHotspots[0];
          const hotspot = ref2.current.querySelector(
            `.btn.hotspot-btn#${item}`
          );
          if (hotspot) {
            hotspot.focus();
          }
        } else {
          if (ref.current) {
            const nextBtn = ref.current.querySelector(".btn.next-btn");
            if (nextBtn) {
              nextBtn.focus();
            }
          }
        }
      }
    }
    descriptionRef.current = description;
  }, [description]);

  const { leftSection, rightSection } = hotspotData;
  return (
    <View layout="leftright" ariahidden={isPopUpOpen}>
      <div className="left-container">
        <h1 className="sr-only">{headingScreen1}</h1>
        <div
          role="img"
          className="background"
          aria-label={`${leftSection.backgroundLabel}`}
          style={{
            backgroundImage: `url(${leftSection.backgroundImg})`,
          }}
        ></div>
        <div className="hotspots-container" ref={ref2}>
          {hotspots.map((list, i) => {
            const active = list.active ? "active" : "";
            const visited = list.visited ? "visited" : "";
            const classes = `hotspot-btn label ${active} ${visited}`.trim();
            return (
              <div className={`hotspot-wrapper hotspot-${i}`} key={i}>
                <div className="bullet" aria-hidden="true" />
                <div className="dotted-line" aria-hidden="true" />
                <Button
                  id={list.name}
                  text={list.name}
                  classes={classes}
                  disabled={list.visited}
                  isPopUpOpen={isPopUpOpen}
                  onClick={() => onClick(i, list.name)}
                  // label={`${list.name} ${
                  //   i == selectedIndex ? props.selectedText : ""
                  // }`.trim()}
                  ariaLable={`${list.name} ${
                    i == selectedIndex ? props.selectedText : ""
                  }`.trim()}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="right-container" ref={ref}>
        <h2>{rightSection.initialText}</h2>
        {selectedIndex >= 0 ? (
          <div
            role="alertdialog"
            aria-hidden={!description}
            key={`desc${selectedIndex}`}
            aria-labelledby="dialogheading"
            className={`wrapper-1 ${description && "show"}`}
          >
            <p
              id="dialogheading"
              dangerouslySetInnerHTML={{
                __html: hotspots[selectedIndex]?.description,
              }}
            ></p>
            <Button
              onClick={onClose}
              text={rightSection.close}
              classes="hotspot-btn close"
              isPopUpOpen={isPopUpOpen || !description}
              labelledby={isAndroid ? "dialogheading" : null}
            />
          </div>
        ) : null}
        <Button
          text={nextBtnText}
          ariaHidden={!nextBtn}
          onClick={onNextBtnClick}
          isPopUpOpen={isPopUpOpen || !nextBtn}
          classes={`toast-secondary-button positive next-btn right-arrow ${
            nextBtn ? "show" : ""
          }`}
          disabled={!nextBtn}
        />
      </div>
    </View>
  );
};

export default Hotspot;
