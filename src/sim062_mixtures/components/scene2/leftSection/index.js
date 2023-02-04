import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../../app/components/Button";
import "../stylesheets/_main.scss";

const LeftSection = ({
  tabsData,
  headerData,
  onVideoShow,
  mixAct,
  videoData,
  onActivityComplete,
  isPopupActive,
  isVideoShowing,
  updateActivityCompletion,
  activityCompleted,
  data,
}) => {
  let {
    section2Instruction,
    buttonLabels,
    table2TopContent,
    simButtonLabels,
    section2TableHeader,
  } = data;
  const continueRef = useRef(null);
  const mixRef = useRef(null);

  useEffect(() => {
    if (!mixAct) {
      setTimeout(() => {
        mixRef.current.focus();
      }, 200);
    }
  }, [mixAct]);

  useEffect(() => {
    let videoArr = Object.entries(videoData);
    let tempData = videoArr.every((value) => value[1].isViewed == true);
    updateActivityCompletion(tempData);
  }, [tabsData]);

  const generateTabularData = () => {
    let compoundArr = Object.entries(tabsData);

    let combineSubstance = [];
    compoundArr.forEach((value) => {
      let boxData = value[1];
      if (boxData.currentMixture) {
        combineSubstance.push({ val1: boxData.content, val2: boxData.weight });
      }
    });
    let renderObject = combineSubstance.length >= 2 && (
      <tr scope="row">
        <td>{combineSubstance[0].val1}</td>
        <td>{combineSubstance[1].val1}</td>
        <td className="digitFormat">
          {Number(combineSubstance[0].val2 + combineSubstance[1].val2) - 10}
        </td>
      </tr>
    );

    return renderObject;
  };

  return (
    <div className="left_section_2">
      <p
        className="left_section_2__content"
        dangerouslySetInnerHTML={{ __html: section2Instruction }}
      />
      <Button
        text={simButtonLabels.mix}
        ref={mixRef}
        onClick={() => {
          onVideoShow(true);
        }}
        hideTooltip={false}
        disabled={mixAct}
        ariaHidden={isPopupActive}
        isPopUpOpen={isPopupActive}
        classes="toast-secondary-button primary left_section_2__mixButton"
      />
      <div className="left_section_2__tabularData">
        {isVideoShowing && (
          <>
            <table className={`compounds`} aria-hidden={isPopupActive}>
              <caption>
                <p className="heading">{table2TopContent}</p>
              </caption>
              <thead>
                <tr>
                  <th scope="col">{section2TableHeader.col1}</th>
                  <th scope="col">{section2TableHeader.col2}</th>
                  <th scope="col">{section2TableHeader.col3}</th>
                </tr>
              </thead>
              <tbody>{isVideoShowing && generateTabularData()}</tbody>
            </table>
          </>
        )}
      </div>

      <Button
        text={buttonLabels.finish}
        ref={continueRef}
        onClick={onActivityComplete}
        hideTooltip={false}
        disabled={!activityCompleted}
        ariaHidden={isPopupActive}
        isPopUpOpen={isPopupActive}
        classes="toast-secondary-button positive left_section_2__finishLeftButton"
      />
    </div>
  );
};

LeftSection.propTypes = {
  tabsData: PropTypes.object,
  headerData: PropTypes.object,
  onVideoShow: PropTypes.func,
  mixAct: PropTypes.bool,
  videoData: PropTypes.object,
  onActivityComplete: PropTypes.func,
  isPopupActive: PropTypes.bool,
};
LeftSection.defaultProps = {
  tabsData: {},
  headerData: {},
  onVideoShow: () => {},
  mixAct: false,
  videoData: {},
  onActivityComplete: () => {},
  isPopupActive: false,
};
export default LeftSection;
