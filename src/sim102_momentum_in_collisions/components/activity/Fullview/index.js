import React, { useEffect, useState } from "react";
import Video from "../../../../app/components/Video";
import Button from "../../../../app/components/Button";
import NextButtonContainer from "../../../containers/NextButtonContainer";
import LeftSlider from "../../../containers/LeftSliderContainer";
import RightSlider from "../../../containers/RightSliderContainer";
import "./style.scss";

const Fullview = (props) => {
  const {
    isPopupActive,
    imgAlt,
    heading,
    headingtwo,
    sliderTextRed,
    sliderOneValue,
    sliderTwoValue,
    sliderTextGreen,
    velocityText,
    massText,
    buttonPlay,
    currentPopup,
    buttonLabelData,
    buttonSelected,
    buttonLabels,
    observationsData,
    readingScreen,
    sliderText,
    metertext,
    clickedPlayButton,
    setResetFocusState,
    metertextlabel,
    liveTextRead,
  } = props;

  const [playButton, setPlayButton] = useState(false);
  const [autoPlayButton, setAutoPlayButton] = useState(false);
  const [link, setLink] = useState();
  const [livetxt, setLivetxt] = useState();

  useEffect(() => {
    if (playButton) {
      setPlayButton(false);
    }
  }, [currentPopup.length]);

  const onVideoEndedHandler = () => {
    setPlayButton(false);
  };
  let { carvscar } = observationsData;
  let speed1 = sliderOneValue == 0 ? 20 : 30;
  let speed2 = sliderTwoValue == 0 ? 20 : 30;
  const getCarVideo = () => {
    let arr = observationsData;

    arr.map((val) => {
      if (
        val.classes == "carvscar" + speed1 + speed2 &&
        buttonSelected == "carvscar"
      ) {
        liveTextRead(val.liveText);
        setLivetxt(val.liveText);
        setLink(val);
      } else if (
        val.classes == "carvstruck" + speed1 + speed2 &&
        buttonSelected == "carvstruck"
      ) {
        liveTextRead(val.liveText);
        setLivetxt(val.liveText);
        setLink(val);
      } else if (
        val.classes == "truckvstruck" + speed1 + speed2 &&
        buttonSelected == "truckvstruck"
      ) {
        liveTextRead(val.liveText);
        setLivetxt(val.liveText);
        setLink(val);
      } else if (
        val.classes == "car" + speed1 &&
        buttonSelected == "carvsbuilding"
      ) {
        liveTextRead(val.liveText);
        setLivetxt(val.liveText);
        setLink(val);
      }
    });
  };
  useEffect(() => {
    if (playButton) {
      clickedPlayButton(true);
    } else {
      clickedPlayButton(false);
    }
  }, [playButton]);

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        {buttonLabelData.map((items, index) => {
          const show = items.id == buttonSelected;
          return (
            <div
              key={index}
              className={`fullview ${items.id} ${show ? "show" : ""}`}
            />
          );
        })}

        <img
          alt={imgAlt}
          aria-hidden={playButton}
          className="sr-only sr-image"
        />

        {playButton ? (
          <Video
            autoPlay={autoPlayButton}
            buttonLabels={buttonLabels}
            currentPopup={currentPopup}
            disablePlayPauseButton={false}
            onVideoEnded={() => onVideoEndedHandler()}
            question={link}
          />
        ) : null}
        {readingScreen.map((items, index) => {
          const show = items.id == buttonSelected;

          return (
            <div
              key={index}
              className={`screenheading ${items.id} ${show ? "" : "hide"}`}
            >
              <div className="reading-screen">
                <div className="screen-left">
                  <p
                    role="heading"
                    aria-level="2"
                    className="leftScreenHeading"
                  >
                    {items.leftScreenHeading}
                  </p>
                  <p className="left-mass">{massText}</p>
                  <p className="leftScreenMassNo">{items.leftScreenMass}</p>
                  <p className="left-velocity">{velocityText}</p>
                  <p
                    className="velocityleftnumber"
                    aria-hidden
                  >{`${speed1} ${metertext}`}</p>
                  <p className="sr-only ">{`${speed1} ${metertextlabel}`}</p>
                </div>
                {buttonSelected != "carvsbuilding" && (
                  <div className="screen-right">
                    <p
                      role="heading"
                      aria-level="2"
                      className="rightScreenHeading"
                    >
                      {items.rightScreenHeading}
                    </p>
                    <p className="right-mass">{massText}</p>
                    <p className="rightScreenMassNo">{items.rightScreenMass}</p>
                    <p className="right-velocity">{velocityText}</p>
                    <p
                      className="velocityrightnumber"
                      aria-hidden
                    >{`${speed2} ${metertext}`}</p>
                    <p className="sr-only ">{`${speed2} ${metertextlabel}`}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <h2 className="main-heading">
          {buttonSelected == "carvsbuilding" ? headingtwo : heading}
        </h2>
        <div className="slidercontainer">
          {sliderText.map((items, index) => {
            const show = items.id == buttonSelected;
            const random = Math.floor(Math.random() * new Date().getTime());
            const id1 = `leftsliderlabel${random}`;
            const id2 = `rightsliderlabel${random}`;
            return (
              <div
                key={index}
                className={`sliderHeadingText ${items.id} ${
                  show ? "" : "hide"
                }`}
              >
                <div className="sliderleftvehicle">
                  <p aria-hidden="true" className="leftSliderText">
                    <span>{items.leftSliderText}</span>
                    <span className="sr-only ">{items.leftarialabel}</span>

                    <span id={id1} className="sr-only sr-image">
                      {items.leftarialabel}
                    </span>
                  </p>
                  <LeftSlider
                    labelledby={id1}
                    title={sliderTextRed}
                    disabled={playButton || isPopupActive}
                  />
                </div>
                {buttonSelected != "carvsbuilding" && (
                  <div className="sliderrightvehicle">
                    <p aria-hidden="true" className="rightSliderText">
                      <span>{items.rightSliderText}</span>
                      <span className="sr-only ">{items.rightarialabel}</span>

                      <span id={id2} className="sr-only sr-image">
                        {items.rightarialabel}
                      </span>
                    </p>
                    <RightSlider labelledby={id2} title={sliderTextGreen} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Button
        text={buttonPlay}
        classes="toast-secondary-buttonplay"
        onClick={(e) => {
          setResetFocusState();
          EventManager.broadcast("PRIMARY_CLICK");
          getCarVideo();
          setPlayButton(true);
          setAutoPlayButton(true);
          
         
        }}
        disabled={playButton || isPopupActive}
      />
      <div>
        <NextButtonContainer />
      </div>
    </div>
  );
};

export default Fullview;
