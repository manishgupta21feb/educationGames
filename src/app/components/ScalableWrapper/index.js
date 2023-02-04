import React, { Component } from "react";
import { responsiveDrag, responsiveDrop } from "../../helpers/jquery";
import { isSafari, isDesktop } from "react-device-detect";
import "./style.scss";

class ScalableWrapper extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef(null);
    this.visibilityRef = React.createRef(null);
  }

  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.resize, true);
    document.addEventListener("visibilitychange", this.visibilityChange, true);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize, true);
    document.removeEventListener(
      "visibilitychange",
      this.visibilityChange,
      true
    );
  }

  resize = () => {
    clearTimeout(this.ref.current);
    this.ref.current = setTimeout(() => {
      const boxWidth = 800;
      const boxHeight = 600;
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      let scaleX = windowWidth / boxWidth;
      let scaleY = windowHeight / boxHeight;
      let scale = Math.min(scaleX, scaleY).toFixed(5);
      this.props.scaleChange(scale);
      // this.mainContainer.style.width = `${boxWidth * scale}px`;
      // this.mainContainer.style.height = `${boxHeight * scale}px`;
      // this.innerContainer.style.transform = `scale(${scale})`;
      // responsiveDrag(scale);

      if (isSafari && isDesktop && !ACTIVITY_CONFIG.dragAndDrop) {
        this.mainContainer.style.width = `${Math.ceil(boxWidth * scale)}px`;
        this.mainContainer.style.height = `${Math.ceil(boxHeight * scale)}px`;
        this.innerContainer.style.zoom = `${scale}`;
      } else {
        this.mainContainer.style.width = `${boxWidth * scale}px`;
        this.mainContainer.style.height = `${boxHeight * scale}px`;
        this.innerContainer.style.transform = `scale(${scale})`;
        responsiveDrag(scale);
        responsiveDrop(scale);
      }
    }, 600);
  };

  visibilityChange = () => {
    clearTimeout(this.visibilityRef.current);
    if (document.visibilityState && document.visibilityState === "visible") {
      this.resize();
    }
  };

  render() {
    return (
      <div
        className={`scalable-wrapper-container`}
        ref={(div) => {
          this.mainContainer = div;
        }}
      >
        <div
          className={`scalable-wrapper-inner `}
          ref={(div) => {
            this.innerContainer = div;
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

ScalableWrapper.defaultProps = {
  portraitScale: true,
};

export default ScalableWrapper;
