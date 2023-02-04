import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import CompoundHolder from "../../compoundHolder";
import EventManager from "../../../../app/events/manager";
import Video from "../../../../app/components/Video";

import "../stylesheets/_main.scss";

let _animationTimeout;
let _focusTimeout;
let _InterValTimeOut;

const RightSection = ({
  tabsData,
  onSectionDataUpdate,
  onMixUpdate,
  videoData,
  isVideoShowing,
  onVideoCompletion,
  onVideoViewed,
  isPopupActive,
  announceAriaLive,
  resetBtnState,
  currentPopup,
  activityCompleted,
  data,
}) => {
  let {
    unitData,
    labBackgroundData,
    accessibilityContent: { clearMixture },
    buttonLabels,
    selectionContent,
    deselectionContent,
  } = data;
  const rightContainer = useRef(null);
  const selectionContainer = useRef(null);
  const objectSelection = useRef([]);
  let currentCompound = useRef("");
  //let filterVideo = useRef({});
  let [filterVideo, setFilterVideo] = useState({});
  let [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  let exceptionCompound = "beaker";

  let [measureContent, setMeasureContent] = useState(10);

  useEffect(() => {
    if (resetBtnState) {
      setMeasureContent(10);
      currentCompound.current = "";
    }
  }, [resetBtnState]);

  useEffect(() => {
    filteringVideo();
  }, [tabsData]);

  const compoundButtons = () => {
    let compoundArr = Object.entries(tabsData);
    let renderObject = compoundArr.map((value, index) => {
      let boxData = value[1];
      return (
        index != 0 && (
          <CompoundHolder
            boxData={boxData}
            source={
              isVideoShowing && boxData.isSelected
                ? boxData.emptyContainerSrc
                : boxData.source
            }
            isPopupActive={isPopupActive}
            disabled={isVideoShowing && !boxData.isSelected}
            index={index}
            value={value[0]}
            callBack={compoundSelect}
            ariaLabel={`${boxData.content} ${
              boxData.isSelected ? selectionContent : ""
            }`}
            key={`section2Box_${index}`}
          />
        )
      );
    });
    return renderObject;
  };

  const canPlayThrough = () => {
    onVideoViewed(videoData);
    clearTimeout(_animationTimeout);
    _animationTimeout = setTimeout(() => {
      numberChangingAnimation(0, objectSelection.current, 20000);
    }, 1800);

    announceAriaLive(filterVideo.liveText);

    clearTimeout(_focusTimeout);
    _focusTimeout = setTimeout(() => {
      selectionContainer.current.focus();
    }, 200);
  };
  const onVideoEnded = () => {
    let _tempData = { ...filterVideo };
    _tempData.alt = _tempData.altEnd;
    setFilterVideo(_tempData);
  };
  const compoundSelect = (ref) => {
    if (isVideoShowing) return;
    EventManager.broadcast("SECONDARY_CLICK");
    let tempData = { ...tabsData };
    let searchedObject = objectSelection.current.includes(ref);
    if (objectSelection.current.length < 2 && !searchedObject) {
      objectSelection.current.push(ref);
      //announceAriaLive(`${tempData[ref].content} ${selectionContent}`);
    } else if (searchedObject) {
      removeCompoundSelection(ref);
      //announceAriaLive(`${tempData[ref].content} ${deselectionContent}`);
    }
    if (objectSelection.current.length >= 2) {
      onMixUpdate(false);
    } else {
      onMixUpdate(true);
    }

    currentCompound.current = ref;
    removeSelected(tempData);
    objectSelection.current.forEach((element) => {
      tempData[element] = { ...tempData[element], isSelected: true };
      tempData[element] = { ...tempData[element], currentMixture: true };
    });
    onSectionDataUpdate(tempData);
  };

  const removeCompoundSelection = (ref) => {
    for (var a = 0; a < objectSelection.current.length; a++) {
      if (objectSelection.current[a] == ref) {
        objectSelection.current.splice(a, 1);
        break;
      }
    }
  };

  const removeCompound = () => {
    EventManager.broadcast("SECONDARY_CLICK");
    clearTimeout(_animationTimeout);
    clearTimeout(_focusTimeout);
    let tempData = { ...tabsData };
    removeSelected(tempData);
    let _tempData = { ...filterVideo };
    _tempData.isViewed = true;
    setFilterVideo(_tempData);
    let _videoData = { ...videoData };

    _videoData[`vid${currentVideoIndex}`] = {
      ..._videoData[`vid${currentVideoIndex}`],
      isViewed: true,
    };
    onVideoViewed(_videoData);
    onSectionDataUpdate(tempData);
    setMeasureContent(10);
    objectSelection.current = [];
    onVideoCompletion(false);
    announceAriaLive(filterVideo.compoundRemovedLive);

    setTimeout(() => {
      rightContainer.current.firstChild.children[0].focus();
    }, 200);

    if (_InterValTimeOut) clearInterval(_InterValTimeOut);
  };

  const removeSelected = (ref) => {
    let tempData = ref;
    for (let data in tempData) {
      if (data != exceptionCompound) {
        tempData[data] = { ...tempData[data], isSelected: false };
        tempData[data] = { ...tempData[data], currentMixture: false };
      }
    }
    onSectionDataUpdate(tempData);
  };

  const filteringVideo = () => {
    let videoFilter = Object.values(videoData);

    videoFilter.forEach((element, index) => {
      let count = 0;
      if (element.keywords.includes(objectSelection.current[0])) {
        count++;
      }
      if (element.keywords.includes(objectSelection.current[1])) {
        count++;
      }
      if (count >= 2) {
        setCurrentVideoIndex(index + 1);
        setFilterVideo({ ...element });
        return;
      }
    });
  };

  const numberChangingAnimation = (
    startingRange = 10,
    endingRange = [],
    counterRange,
    duration
  ) => {
    if (!endingRange.length) return;
    let runCount =
      Number(
        tabsData[endingRange[0]].weight + tabsData[endingRange[1]].weight
      ) - 10;
    if (startingRange === runCount) return;
    var range = runCount - startingRange;
    var current = startingRange;
    var increment = runCount > startingRange ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    if (_InterValTimeOut) clearInterval(_InterValTimeOut);
    _InterValTimeOut = setInterval(function () {
      current += increment;
      setMeasureContent(current);
      if (current == runCount) {
        clearInterval(_InterValTimeOut);
      }
    }, stepTime);
  };

  const imagePreLoad = () => {
    let videoFilter = Object.values(videoData);
    let renderObject = videoFilter.map((element, index) => {
      return <img src={element.bgSrc} alt="" key={`imagePreLoad${index}`} />;
    });
    return renderObject;
  };
  const playStateToggledHandler = (state) => {
    if (state) announceAriaLive(filterVideo.liveText);
  };
  return (
    <div className="rightSection">
      <div className="preloadImageContainer" aria-hidden="true">
        {imagePreLoad()}
      </div>
      {isVideoShowing && (
        <Video
          question={filterVideo}
          buttonLabels={buttonLabels}
          currentPopup={currentPopup}
          autoPlay={true}
          onVideoEnded={onVideoEnded}
          canPlayThrough={canPlayThrough}
          playStateToggled={(playState) => playStateToggledHandler(playState)}
        />
      )}

      <img
        src={labBackgroundData.source}
        className="rightSection__labBackground"
        alt={isVideoShowing ? "" : labBackgroundData.alt}
      />

      <button
        className="rightSection__compoundSelected"
        onClick={() => {
          removeCompound();
        }}
        disabled={!isVideoShowing}
        ref={selectionContainer}
        aria-hidden={isPopupActive}
        aria-label={clearMixture}
        tabIndex={isPopupActive ? "-1" : null}
      >
        {!isVideoShowing && (
          <span
            className="rightSection__compoundSelected__compoundDisplayHolder "
            data-beaker="beaker"
          >
            <img
              src={tabsData.beaker.source}
              className="compoundContainer__compound"
              alt=""
            />
          </span>
        )}
      </button>
      <p
        className="rightSection__measureContent"
        aria-hidden={isPopupActive}
      >{`${measureContent} ${unitData}`}</p>
      <div className="rightSection__tabSection" ref={rightContainer}>
        {compoundButtons()}
      </div>
    </div>
  );
};

RightSection.propTypes = {
  tabsData: PropTypes.object,
  onSectionDataUpdate: PropTypes.func,
  onMixUpdate: PropTypes.func,
  videoData: PropTypes.object,
  isVideoShowing: PropTypes.bool,
  onVideoCompletion: PropTypes.func,
  onVideoViewed: PropTypes.func,
  buttonLabels: PropTypes.object,
  isPopupActive: PropTypes.bool,
  announceAriaLive: PropTypes.func,
};
RightSection.defaultProps = {
  tabsData: {},
  onSectionDataUpdate: () => {},
  onMixUpdate: () => {},
  videoData: {},
  isVideoShowing: false,
  onVideoCompletion: () => {},
  onVideoViewed: () => {},
  buttonLabels: {},
  isPopupActive: false,
  announceAriaLive: () => {},
};
export default RightSection;
