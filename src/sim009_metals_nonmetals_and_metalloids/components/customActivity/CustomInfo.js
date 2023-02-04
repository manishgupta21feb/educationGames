import React from "react";
import "./style.scss";
const CustomInfo = ({ tableRow, caption }) => {
  return (
    <div className="infoTable">
      <table summary={caption}>
        <tbody>
          <tr>
            <td className="col-table"></td>
            {tableRow.map((item, i) => {
              return (
                <th scope="col" key={i}>
                  {item.thContent}
                </th>
              );
            })}
          </tr>
          {tableRow.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row" className="row-table">
                  {item.tdcontent}
                </th>
                <td>{item.metals} </td>
                <td>{item.metalloids} </td>
                <td>{item.nonMetals} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomInfo;
