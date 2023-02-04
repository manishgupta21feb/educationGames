import React from 'react';
import Wrapper from "../Wrapper";
import Button from "../../../app/components/Button";
import './finalScreen.scss';

const FinalScreen = (props) => {
  const { finalScreenData: screen, continueBtnText, goToHomePage, isPopupActive } = props;
  return (
    <Wrapper className="wrapper--wrap">
      <h2 className="paragraph gap">{screen[0].text}</h2>
      <img className="final-screen-img" src={screen[0].img} alt={screen[0].alt}/>
      <Button
          text={continueBtnText}
          classes="toast-secondary-button positive right-arrow"
          onClick={goToHomePage}
          isPopupActive={isPopupActive}
        />
    </Wrapper>
  )
}

export default FinalScreen
