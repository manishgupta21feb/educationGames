import React from "react";
import "./labels.scss";

const Labels = (props) => {
  const { question, questionNumber } = props;

  const allData = () => {
    switch (questionNumber) {
      case 0:
        return (
          <>
            <span aria-hidden="true" className="labels__tableTitle">
              {question.tableTitle}
            </span>
            <table
              className="labels__table"
              summary={question.tableTitle}
              key={"table1"}
            >
              {/* <caption className="labels__tableTitle sr-only">
                {question.tableTitle}
              </caption> */}
              <tbody>
                {question.table.map((item, index) => {
                  return (
                    <tr key={`tr1_${index}`}>
                      <th key={`th1_${index}`}>{item.object}</th>
                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="labels__text labels__text--one">{question.text1}</p>
            <p className="labels__label labels__label--1" aria-hidden="true">
              {question.spoon}
            </p>
            <p className="labels__label labels__label--2" aria-hidden="true">
              {question.beaker}
            </p>
            <ul className="labels__beaker labels__beaker--1" aria-hidden="true">
              <li>500</li>
              <li>400</li>
              <li>300</li>
              <li>200</li>
              <li>100</li>
            </ul>
            <p className="labels__text labels__text--two">{question.text2}</p>
            <p className="labels__label labels__label--3" aria-hidden="true">
              {question.salt}
            </p>
            <div className="labels__indicator labels__indicator--1"></div>
            <div className="labels__indicator labels__indicator--2"></div>
          </>
        );
      case 1:
        return (
          <>
            <div className="labels__tableContainer">
              <table
                className="labels__table"
                summary={question.tableTitleA}
                key={"table2"}
              >
                {/* <caption className="labels__tableTitle">
                  {question.tableTitleA}
                </caption> */}
                <tbody>
                  {question.tableA.map((item, index) => {
                    return (
                      <tr key={`tr2_${index}`}>
                        <th key={`th2_${index}`}>{item.object}</th>
                        <td>{item.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="labels__tableContainer">
              <table
                className="labels__table"
                summary={question.tableTitleB}
                key={"table3"}
              >
                {/* <caption className="labels__tableTitle">
                  {question.tableTitleB}
                </caption> */}
                <tbody>
                  {question.tableB.map((item, index) => {
                    return (
                      <tr key={`tr3_${index}`} scope="row">
                        <th role="rowheader" scope="col" key={`th3_${index}`}>
                          {item.object}
                        </th>
                        <td>{item.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="labels__label labels__label--4" aria-hidden="true">
              {question.spoonA}
            </p>
            <p className="labels__label labels__label--6" aria-hidden="true">
              {question.beakerA}
            </p>
            <ul className="labels__beaker labels__beaker--2" aria-hidden="true">
              <li>500</li>
              <li>400</li>
              <li>300</li>
              <li>200</li>
              <li>100</li>
            </ul>
            <p className="labels__label labels__label--5" aria-hidden="true">
              {question.spoonB}
            </p>
            <p className="labels__label labels__label--7" aria-hidden="true">
              {question.beakerB}
            </p>
            <ul className="labels__beaker labels__beaker--3" aria-hidden="true">
              <li>500</li>
              <li>400</li>
              <li>300</li>
              <li>200</li>
              <li>100</li>
            </ul>
            <p className="labels__label labels__label--8" aria-hidden="true">
              {question.salt}
            </p>
          </>
        );
      case 2:
        return (
          <>
            <table
              className="labels__table"
              summary={question.tableTitle}
              key={"table4"}
            >
              {/* <caption className="labels__tableTitle">
                {question.tableTitle}
              </caption> */}
              <tbody>
                {question.table.map((item, index) => {
                  return (
                    <tr key={`tr4_${index}`} scope="row">
                      <th scope="col" role="rowheader" key={`th4_${index}`}>
                        {item.object}
                      </th>
                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="labels__label labels__label--9" aria-hidden="true">
              {question.spoonA}
            </p>
            <p className="labels__label labels__label--10" aria-hidden="true">
              {question.spoonB}
            </p>
            <p className="labels__label labels__label--11" aria-hidden="true">
              {question.beaker}
            </p>
            <ul className="labels__beaker labels__beaker--4" aria-hidden="true">
              <li>500</li>
              <li>400</li>
              <li>300</li>
              <li>200</li>
              <li>100</li>
            </ul>
            <p className="labels__label labels__label--12" aria-hidden="true">
              {question.salt}
            </p>
          </>
        );

      case 3:
        return (
          <>
            {question.names.map((item, index) => {
              return (
                <p
                  key={`para1_${index}`}
                  id={`para1_${index}`}
                  className={`labels__label labels__label--${index + 13}`}
                  aria-hidden="true"
                >
                  {item}
                </p>
              );
            })}
            <p
              className="labels__reading labels__reading--small"
              aria-hidden="true"
            >
              {question.reading}
              {/* 20 <span>{question.reading}</span> */}
            </p>
          </>
        );

      case 4:
        return (
          <>
            <ul className="labels__beaker labels__beaker--5" aria-hidden="true">
              <li>500</li>
              <li>400</li>
              <li>300</li>
              <li>200</li>
              <li>100</li>
            </ul>
            <p className={`labels__label labels__label--18`} aria-hidden="true">
              {question.name}
            </p>
          </>
        );

      case 5:
        return (
          <>
            {question.names.map((item, index) => {
              return (
                <p
                  key={`para2_${index}`}
                  className={`labels__label labels__label--${index + 19}`}
                  aria-hidden="true"
                >
                  {item}
                </p>
              );
            })}
            <p className="labels__reading" aria-hidden="true">
              {question.reading}
              {/* 90 <span>{question.reading}</span> */}
            </p>
          </>
        );

      default:
        return (
          <p className={`labels__label labels__label--22`} aria-hidden="true">
            {question.name}
          </p>
        );
    }
  };

  return (
    <div className="labels" key={`view-rendered${questionNumber}`}>
      {allData()}
    </div>
  );
};

export default Labels;
