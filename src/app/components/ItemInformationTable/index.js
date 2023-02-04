import React from "react";
import "./styles.scss";

const itemInformationTable = (props) => {
  const { heading, list } = props;
  const random = Math.floor(Math.random() * 100000);
  const id = `info${random}`;
  return (
    <div className="item-information-table">
      <h3 id={id}>{heading}</h3>
      <div className="item-details">
        {list.map((item) => {
          return (
            <div key={item.id} className="item">
              {item.info.map((_item) => {
                return <p key={_item}>{_item}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default itemInformationTable;
