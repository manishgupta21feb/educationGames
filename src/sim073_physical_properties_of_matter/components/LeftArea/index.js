import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import toy_car_density from "../../assets/videos/toy_car_density.mp4";
import glass_marble_density from "../../assets/videos/glass_marble_density.mp4";
import cork_density from "../../assets/videos/cork_density.mp4";
import die_density from "../../assets/videos/die_density.mp4";
import iron_nail_density from "../../assets/videos/iron_nail_density.mp4";
import nickel_density from "../../assets/videos/nickel_density.mp4";
import pencil_density from "../../assets/videos/pencil_density.mp4";
import toy_car_volume from "../../assets/videos/toy_car_volume.mp4";
import glass_marble_volume from "../../assets/videos/Glass_marble_Volume.mp4";
import cork_volume from "../../assets/videos/Cork_Volume.mp4";
import die_volume from "../../assets/videos/Die_Volume.mp4";
import iron_nail_volume from "../../assets/videos/Iron_nail_Volume.mp4";
import nickel_volume from "../../assets/videos/Nickel_Volume.mp4";
import pencil_volume from "../../assets/videos/Pencil_Volume.mp4";
import toy_car_mass from "../../assets/videos/Toy_car_Mass.mp4";
import glass_marble_mass from "../../assets/videos/Glass_marble_Mass.mp4";
import cork_mass from "../../assets/videos/Cork_Mass.mp4";
import die_mass from "../../assets/videos/Die_Mass.mp4";
import iron_nail_mass from "../../assets/videos/Iron_nail_Mass.mp4";
import nickel_mass from "../../assets/videos/Nickel_Mass.mp4";
import pencil_mass from "../../assets/videos/Pencil_Mass.mp4";
import Button from "../../../app/components/Button";

const LeftArea = (props) => {
  const {
    items,
    selectedItem,
    onclick,
    priviousSelectedItem,
    selectedPhysicalProperty,
    // liveText,
    isPopupActive,
    headingText,
    showNextButtton,
    altStaticText,
    dynamicMassAltText,
    dynamicVolumeAltText,
    dynamicDensitySinkAltText,
    dynamicDensityFloatAltText,
    dynamicMagnetAltText,
    dynamicElectricAltText1,
    dynamicElectricAltText2,
    dynamicElectricAltText3,
    textSticking,
    textNotSticking,
    weigthofItems,
    volumeOfItems,
    textAt,
    selectedItemText,
    textA,
    handleLiveText,
    // altText,
  } = props;
  const [sourceVideo, setSourceVideo] = useState();
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [altText, setAltText] = useState("");
  const [liveText, setLiveText] = useState("");

  let visited = "";
  let itemText;

  // useEffect(() => {}, [selectedItem]);

  useEffect(() => {
    setTimeout(() => {
      if (videoCompleted && priviousSelectedItem.length == 7) {
        showNextButtton(true);
      } else {
        showNextButtton(false);
      }
    });
  }, [videoCompleted]);
  useEffect(() => {
    selectedItem == "" ? setAltText(altStaticText) : null;
  }, []);

  const _onclick = (a) => {
    let text;
    onclick(a);
    items.map((val) => {
      val.id == a.id ? (itemText = val.text) : null;
    });

    if (selectedPhysicalProperty == "Relative density") {
      let source =
        a.id == "metal-toy-car"
          ? toy_car_density
          : a.id == "glass-jar"
          ? glass_marble_density
          : a.id == "cork"
          ? cork_density
          : a.id == "die"
          ? die_density
          : a.id == "iron-nail"
          ? iron_nail_density
          : a.id == "nickel"
          ? nickel_density
          : pencil_density;
      setSourceVideo(source);
      if (a.id == "cork") {
        text = textA + itemText + dynamicDensityFloatAltText;
        setAltText(text);
        handleLiveText(text);
      } else {
        text = textA + itemText + dynamicDensitySinkAltText;
        setAltText(text);
        handleLiveText(text);
      }
    } else if (selectedPhysicalProperty == "Volume") {
      if (a.id == "metal-toy-car") {
        setSourceVideo(toy_car_volume);
        text =
          textA + itemText + dynamicVolumeAltText + volumeOfItems.metal_toy_car;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "glass-jar") {
        setSourceVideo(glass_marble_volume);
        text =
          textA + itemText + dynamicVolumeAltText + volumeOfItems.glass_jar;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "cork") {
        setSourceVideo(cork_volume);
        text = textA + itemText + dynamicVolumeAltText + volumeOfItems.cork;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "die") {
        setSourceVideo(die_volume);
        text = textA + itemText + dynamicVolumeAltText + volumeOfItems.die;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "iron-nail") {
        setSourceVideo(iron_nail_volume);
        text =
          textA + itemText + dynamicVolumeAltText + volumeOfItems.iron_nail;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "nickel") {
        setSourceVideo(nickel_volume);
        text = textA + itemText + dynamicVolumeAltText + volumeOfItems.nickel;
        setAltText(text);
        handleLiveText(text);
      } else {
        setSourceVideo(pencil_volume);
        text = textA + itemText + dynamicVolumeAltText + volumeOfItems.pencil;
        setAltText(text);
        handleLiveText(text);
      }
    } else if (selectedPhysicalProperty == "Mass") {
      if (a.id == "metal-toy-car") {
        setSourceVideo(toy_car_mass);
        text =
          dynamicMassAltText +
          " " +
          itemText +
          textAt +
          weigthofItems.metal_toy_car;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "glass-jar") {
        setSourceVideo(glass_marble_mass);
        text =
          dynamicMassAltText +
          " " +
          itemText +
          textAt +
          weigthofItems.glass_jar;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "cork") {
        setSourceVideo(cork_mass);
        text =
          dynamicMassAltText + " " + itemText + textAt + weigthofItems.cork;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "die") {
        setSourceVideo(die_mass);
        text = dynamicMassAltText + " " + itemText + textAt + weigthofItems.die;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "iron-nail") {
        setSourceVideo(iron_nail_mass);
        text =
          dynamicMassAltText +
          " " +
          itemText +
          textAt +
          weigthofItems.iron_nail;
        setAltText(text);
        handleLiveText(text);
      } else if (a.id == "nickel") {
        setSourceVideo(nickel_mass);
        text =
          dynamicMassAltText + " " + itemText + textAt + weigthofItems.nickel;
        setAltText(text);
        handleLiveText(text);
      } else {
        setSourceVideo(pencil_mass);
        text =
          dynamicMassAltText + " " + itemText + textAt + weigthofItems.pencil;
        setAltText(text);
        handleLiveText(text);
      }
    } else if (
      selectedPhysicalProperty == "Magnetism" &&
      (a.id == "glass-jar" ||
        a.id == "cork" ||
        a.id == "die" ||
        a.id == "pencil")
    ) {
      setDisableButton(true);
      // setAltText(dynamicMagnetAltText + selectedItemText + textSticking);
      text = dynamicMagnetAltText + itemText + textNotSticking;
      setTimeout(() => {
        setAltText(text);
        handleLiveText(text);
        setDisableButton(false);
        showNextButtton(true);
      }, 4000);
    } else if (selectedPhysicalProperty == "Magnetism") {
      text = dynamicMagnetAltText + itemText + textSticking;
      setAltText(text);
      handleLiveText(text);
      priviousSelectedItem.length == 7
        ? showNextButtton(true)
        : showNextButtton(false);
    } else if (selectedPhysicalProperty == "Electrical conductivity") {
      showNextButtton(true);
      if (a.id == "glass-jar" || a.id == "cork" || a.id == "die") {
        text =
          dynamicElectricAltText1 +
          itemText +
          dynamicElectricAltText2 +
          dynamicElectricAltText3;
        setAltText(text);
        handleLiveText(text);
      } else {
        text = dynamicElectricAltText1 + itemText + dynamicElectricAltText2;
        setAltText(text);
        handleLiveText(text);
      }
    }
  };

  return (
    <div className="left-interactive">
      <h1 className="sr-only">{headingText}</h1>
      <div className="top">
        <div
          className={`physical-properties ${
            selectedPhysicalProperty[0].toLowerCase() +
            selectedPhysicalProperty.substr(1)
          } ${selectedItem}`}
        >
          {(selectedPhysicalProperty == "Magnetism" ||
            selectedPhysicalProperty == "Electrical conductivity") && (
            <div
              className={`${selectedItem}-${selectedPhysicalProperty}`}
            ></div>
          )}

          <img className="sr-only sr-image" alt={altText} />

          {
            (selectedPhysicalProperty == "Relative density" ||
              selectedPhysicalProperty == "Volume" ||
              selectedPhysicalProperty == "Mass") &&
              selectedItem != "" && (
                // !videoCompleted && (
                <video
                  tabIndex="-1"
                  preload="auto"
                  aria-hidden={true}
                  src={sourceVideo}
                  className="video-container"
                  autoPlay
                  // onPlay={() => setDisableButton(true)}
                  onEnded={() => {
                    setVideoCompleted(true);
                    setDisableButton(false);
                  }}
                />
              )
            // )
          }
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-container">
          {items.map((a, i) => {
            if (priviousSelectedItem.indexOf(a.id) >= 0) {
              visited = "visited";
            } else visited = "";
            return (
              <div key={i} className="item-conatainer">
                <Button
                  id={a.id}
                  text={a.text}
                  onClick={() => {
                    setVideoCompleted(false);
                    _onclick(a);
                    (selectedPhysicalProperty == "Mass" ||
                      selectedPhysicalProperty == "Volume" ||
                      selectedPhysicalProperty == "Relative density") &&
                      setDisableButton(true);
                  }}
                  classes={`box ${a.id} ${
                    selectedItem == a.id ? `selected-${selectedItem}` : ""
                  } ${visited}`}
                  label={a.text}
                  isPopUpOpen={isPopupActive}
                  ariaPressed={`${selectedItem == a.id ? true : false}`}
                  disabled={
                    selectedItem == a.id || disableButton ? true : isPopupActive
                  }
                  ariaLable={`${a.text} ${visited}`}
                />
                <p>{a.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftArea;
