import React from "react";
import data from "../../data";
import "./home.scss";

const Home = (props) => {
  const {
    onClick,
    isPopupActive,
    getIsVisitedBoth,
    onClickedButton,
    getIsVisited,
  } = props;

  const { title, frames } = data.home;
  const onClicked = (evt) => {
    onClickedButton(evt.target.id);
    onClick(evt);
  };

  const frame = frames.map((item, index) => {
    let _show = [];
    _show = getIsVisitedBoth.filter((x) => {
      if (x == item.id) return x;
    });

    return (
      <div key={item.id} id={`${item.id}-index`} className="frame">
        <div className={`frame__img${+index + 1}`}>
          <img src={item.img} alt={item.alt} />
        </div>
        <div className="frame__footer">
          <button
            className={`btn hotspot-btn label ${
              getIsVisited.find((x) => x == item.id) ? "isvisited" : ""
            }`}
            id={item.id}
            title={item.title}
            aria-label={item.title}
            data-target={item.target}
            onClick={(evt) => {
              onClicked(evt);
            }}
            tabIndex={isPopupActive ? "-1" : null}
            disabled={getIsVisited.find((x) => x == item.id) ? true : false}
          >
            {item.title}
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2
        className="paragraphHome"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <div className="mainFrame">{frame}</div>
    </>
  );
};

export default Home;
