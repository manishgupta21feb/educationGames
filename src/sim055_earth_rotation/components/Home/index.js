import React from "react";
import Wrapper from "../Wrapper";
import data from "../../data";
import "./home.scss";

const Home = (props) => {
  const {
    onClick,
    isPopupActive
  } = props;

  const {
    title,
    frames
  } = data.home

  const frame = frames.map((item, index) => {
    return (
      <div key={item.id} id={item.id} className="frame">
        <div className="frame__img">
          <img src={item.img} alt={item.title}/>
          {index == 0 ? (
            <>
              <span className="frame__text frame__text--spain" aria-hidden>{item.spain}</span>
              <span className="frame__text frame__text--zealand" aria-hidden>{item.newZealand}</span>
            </>
          ) : null}
        </div>
        <div className="frame__footer">
          <button
            className="btn hotspot-btn label"
            id={item.target}
            title={item.title}
            aria-label={item.title}
            data-target={item.target}
            onClick={(evt) => onClick(evt)}
            tabIndex={isPopupActive ? "-1" : null}
          >
              {item.title}
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className="paragraph">{title}</h2>
      <Wrapper className="wrapper--contain wrapper--center-hrzn">
        {frame}
      </Wrapper>
    </div>
  );
};

export default Home;
