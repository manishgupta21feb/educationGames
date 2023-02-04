import React from "react";
import "./style.scss";

const ItemInfo = (props) => {
  const { heading, list } = props;
  const id = `info${new Date().getTime()}`;
  return (
    <div className="item-info">
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

export default ItemInfo;
