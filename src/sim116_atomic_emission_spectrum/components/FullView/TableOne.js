import React from "react";
import data from "../../data";

const TableOne = () => {
  return (
    <div className="tableContainer">
      <p className="absoptionInfo">{data.pathText}</p>
      <p className="tableTitle">{data.tableTitle}</p>
      <table>
        <tbody>
          <tr>
            {data.tableHeading.map((item, i) => {
              return (
                <React.Fragment key={`${item.heading}${i}`}>
                  <th>{item.heading}</th>
                </React.Fragment>
              );
            })}
          </tr>
          <tr>
            {data.tableOneData.map((item, i) => {
              return (
                <React.Fragment key={`${item.text}${i}`}>
                  <td>{item.text}</td>
                </React.Fragment>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableOne;
