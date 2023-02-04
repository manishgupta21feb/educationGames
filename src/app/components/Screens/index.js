import React from 'react';
import "./style.scss";

export const Screen = ({ children, index }) => {
  return (
    <div className={`screen-wrapper screen-${index}`}>
      {children}
    </div>
  )
}

class Screens extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentScreen, children } = this.props;
    const screens = children ? children : [];

    return (
      <div className="screens-container">
        {screens.map((screen, i) => {
          return (
            currentScreen === i && screen
          )
        })}
      </div>
    )
  }
}

export default Screens;
