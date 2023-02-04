import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../../app/components/Button";
import "../stylesheets/_main.scss";

const LeftSection = ({
  tabsData,
  onChangeSection,
  isPopupActive,
  resetBtnState,
  data,
}) => {
  let {
    section1Instruction,
    buttonLabels,
    table1TopContent,
    section1TableHeader,
  } = data;
  const continueRef = useRef(null);
  const [isCompleted, setIsCompleted] = useState(true);
  const [isTableFilling, setIsTableFilling] = useState(false);

  useEffect(() => {
    if (resetBtnState) {
      setIsCompleted(true);
      setIsTableFilling(false);
    }
  }, [resetBtnState]);

  useEffect(() => {
    if (isCompleted) {
      setTimeout(() => {
        continueRef.current.focus();
      }, 200);
    }
  }, [isCompleted]);

  useEffect(() => {
    let compoundArr = Object.entries(tabsData);
    let tempData = compoundArr.every((value) => value[1].isMeasured === true);
    let isStartFilling = compoundArr.some(
      (value, index) => index != 0 && value[1].isSelected === true
    );
    setIsTableFilling((prevState) => {
      if (prevState == false) {
        return (prevState = isStartFilling);
      } else {
        return prevState;
      }
    });
    setIsCompleted(tempData);
  }, [tabsData]);

  const generateTabularData = () => {
    let compoundArr = Object.entries(tabsData);

    let renderObject = compoundArr.map((value, index) => {
      let boxData = value[1];
      return (
        index != 0 &&
        (boxData.isMeasured || boxData.isSelected) && (
          <tr key={`comp${index}`}>
            <td>{boxData.content}</td>
            <td>{boxData.type}</td>
            <td className="digitFormat">{boxData.weight}</td>
          </tr>
        )
      );
    });
    return renderObject;
  };

  return (
    <div className="left_section_1">
      <p
        className="left_section_1__content"
        dangerouslySetInnerHTML={{ __html: section1Instruction }}
      />
      <div className="left_section_1__tabularData">
        {isTableFilling && (
          <>
            <table className={`compounds`} aria-hidden={isPopupActive}>
              <caption>
                <p className="heading">{table1TopContent}</p>
              </caption>
              <thead>
                <tr scope="row">
                  <th scope="col">{section1TableHeader.col1}</th>
                  <th scope="col">{section1TableHeader.col2}</th>
                  <th scope="col">{section1TableHeader.col3}</th>
                </tr>
              </thead>
              <tbody>{generateTabularData()}</tbody>
            </table>
          </>
        )}
      </div>

      <Button
        text={buttonLabels.continue}
        ref={continueRef}
        onClick={onChangeSection}
        hideTooltip={false}
        disabled={!isCompleted}
        ariaHidden={isPopupActive}
        isPopUpOpen={isPopupActive}
        classes="toast-secondary-button positive right-arrow left_section_1__continueLeftButton"
      />
    </div>
  );
};

LeftSection.propTypes = {
  tabsData: PropTypes.object,
  headerData: PropTypes.object,
  onChangeSection: PropTypes.func,
  isPopupActive: PropTypes.bool,
};
LeftSection.defaultProps = {
  tabsData: {},
  headerData: {},
  onChangeSection: () => {},
  isPopupActive: false,
};
export default LeftSection;
