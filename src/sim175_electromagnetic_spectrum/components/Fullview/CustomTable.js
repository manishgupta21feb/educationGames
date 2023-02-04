import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";
const CustomTable = (props) => {
  const { tableRow, caption, onClick, popuphead1, popuphead2, popuphead3 } =
    props;
  return (
    <div className="infotableWrapper">
      <div className="infoTable">
        <table aria-modal role="dialog" aria-label={caption} summary={caption}>
          <tbody>
            <tr>
              <th>{popuphead1}</th>
              <th>{popuphead2}</th>
              <th>{popuphead3}</th>
            </tr>
            {tableRow.map((item) => {
              return (
                <tr key={item.id}>
                  <td
                    dangerouslySetInnerHTML={{ __html: item.typeofradiation }}
                  ></td>
                  <td
                    dangerouslySetInnerHTML={{ __html: item.frequencyrange }}
                  ></td>
                  <td
                    dangerouslySetInnerHTML={{ __html: item.wavelengthrange }}
                  ></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="closeButton">
          <Button
            aria-label="Close popup"
            onClick={onClick}
            text="Close"
            classes={`closebtn`}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
