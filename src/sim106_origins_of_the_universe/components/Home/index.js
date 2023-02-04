import React from "react";
import Wrapper from "../../containers/WrapperContainer";
import data from "../../data";
import "./home.scss";

const Home = (props) => {
  const { onClick, isPopupActive, getIsVisitedBoth } = props;

  const { title, frames } = data.home;

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
              _show.length > 0 ? "isvisited" : ""
            }`}
            id={item.id}
            title={item.title}
            aria-label={item.title}
            data-target={item.target}
            onClick={(evt) => {
              onClick(evt);
            }}
            tabIndex={isPopupActive ? "-1" : null}
            disabled={_show.length > 0 ? true : false}
          >
            {item.title}
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <p
        className="paragraphHome"
        dangerouslySetInnerHTML={{ __html: title }}
      ></p>
      <Wrapper className="wrapper--contain wrapper--center-hrzn mt-top">
        <div className="mainFrame">{frame}</div>
      </Wrapper>
    </>
  );
};

export default Home;
