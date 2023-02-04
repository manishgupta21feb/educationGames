import React from "react";
import Wrapper from "../Wrapper";
import Button from "../../../app/components/Button";
import "./home.scss";

const Home = (props) => {

  const {
    istructionText,
    fossils,
    isPopupActive,
    onFossil,
  } = props;

  const fossil = fossils?.map((item) => {
    return (
      <Wrapper key={item.id} className="wrapper--center-vert box">
        <div
          role="img"
          aria-label={item.alt}
          className="box__container"
          style={{ backgroundImage: `url(${item.img})` }}
        ></div>
        <Button
          id={item.id}
          text={item.title}
          classes="hotspot-btn label box__btn"
          onClick={onFossil}
          isPopupActive={isPopupActive}
        />
      </Wrapper>
    );
  });

  return (
    <>
      <h2 className="paragraph gap">{istructionText}</h2>
      <Wrapper className="wrapper--wrap wrapper--gap">
        {fossil}
      </Wrapper>
    </>
  );
};

export default Home;
