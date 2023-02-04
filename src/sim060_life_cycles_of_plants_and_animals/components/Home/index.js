import React from "react";
import Wrapper from "../Wrapper";
import "./home.scss";
import Lives from "../../containers/LivesContainer";

const Home = (props) => {
  return (
    <>
      <h1 className="sr-only">{props.observationMotive}</h1>
      <h2 className="paragraph gap">{props.istructionText}</h2>
      <Wrapper className="wrapper--space-around">
        <Lives />
      </Wrapper>
    </>
  );
};

export default Home;
