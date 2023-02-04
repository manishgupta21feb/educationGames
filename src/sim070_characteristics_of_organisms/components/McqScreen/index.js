import React from "react";
import ButtonContinue from "../../containers/ButtonNextQuestion";
import MCQContainer from "../../containers/MCQContainer";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import "./style.scss";
const index = (props) => {
  const {
    heading,
    tableheading,
    tableData,
    submitButtonPressed,
    answerAttempt,
    caption,
  } = props;

  return (
    <div className="full-container">
      <h2 className="screen-heading">{heading}</h2>

      <div className="infoTable">
        <table summary={caption}>
          <caption className="sr-only sr-image">{caption}</caption>
          <thead>
            <tr>
              {tableheading.map((item, i) => {
                return (
                  <th scope="col" key={i}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((items, index) => {
              return (
                <tr key={index} className={`table-id tableid${index}`}>
                  <th scope="row" className="row-table">
                    {items.thcontent}
                  </th>
                  <td>{items.leaf}</td>
                  <td>{items.bacteria}</td>
                  <td>{items.amoeba}</td>
                  <td>{items.human}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mcq-area">
        <MCQContainer>
          <RadioButtonContainer />
        </MCQContainer>
      </div>
      {submitButtonPressed && answerAttempt ? <ButtonContinue /> : null}
    </div>
  );
};

export default index;
