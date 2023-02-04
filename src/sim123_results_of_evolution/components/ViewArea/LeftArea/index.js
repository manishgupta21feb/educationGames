import React from "react";
import "./style.scss";
const LeftArea = (props) => {
  const { defaultAssets, scenerioId, buttonDisable, imageAltText } = props;
  return (
    <div className="left-area">
      <img className="sr-only sr-image" alt={imageAltText} />
      {defaultAssets.map((items) => {
        const imageShow = items.id == scenerioId;
        return (
          <div
            key={items.id}
            className={`default-image ${imageShow ? "show" : ""}`}
            aria-hidden="true"
          >
            {items.defaultRats.map((listes) => {
              const ratShow =
                buttonDisable >= 2
                  ? listes.display3
                  : buttonDisable >= 1
                  ? listes.display2
                  : listes.display1;
              return (
                <div
                  key={`${items.id}${listes.id}`}
                  className={`scenerio-image ${listes.id} ${
                    ratShow ? "ratShow" : ""
                  }`}
                >
                  {listes.text.map((textItem, index) => {
                    return (
                      <p
                        key={`${items.id}${listes.id}${index}`}
                        className={` text-image ${textItem.class}`}
                      >
                        {textItem.text}
                      </p>
                    );
                  })}
                  {listes.data.map((item) => {
                    return (
                      <div
                        key={` ${items.id}${listes.id}${item.id}`}
                        className={`${item.id}`}
                      >
                        {item.datasource.map((dataItem,indexes) => {
                          return <div key={`${indexes}${listes.id}${items.id}${item.id}`} className={`${dataItem}`}></div>;
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default LeftArea;
