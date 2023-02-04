import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuenow: 0,
      valuetext: "",
    };
    this.keyCode = {
      up: 38,
      end: 35,
      home: 36,
      left: 37,
      down: 40,
      right: 39,
      pageUp: 33,
      pageDown: 34,
    };
    this.values = [];
    this.thumbWidth = 12;
    this.timeoutRef = null;
    this.valuenow = undefined;
    this.ref = createRef(null);
    if (this.props.value !== undefined) {
      this.valuenow = this.props.value;
    }
    if (this.valuenow == undefined || this.props.valuenow < this.props.min) {
      this.valuenow = this.props.min;
    }
    this.minmaxDiff = this.props.max - this.props.min;
    if (
      this.props.datalist &&
      this.props.datalist.length !== this.minmaxDiff + 1
    ) {
      throw new Error(
        "datalist and valuemin, valuemax did not matched in Slider component."
      );
    }
    if (!this.props.onChange) {
      throw new Error("onChange is required for Slider component.");
    }
    for (let i = this.props.min; i <= this.props.max; i += this.props.step) {
      this.values.push(i);
    }
  }

  componentDidMount() {
    if (this.ref.current) {
      this.railNode = this.ref.current.querySelector(".rail");
      this.thumbNode = this.ref.current.querySelector(".thumb");
      this.railWidth = this.railNode.getBoundingClientRect().width;
      this.datalistChild = this.ref.current.querySelector(".datalist > div");
      this.datalistChild = this.datalistChild.getBoundingClientRect().width;
    }
    let valuetext = "";
    if (this.props.valuetextArray) {
      valuetext = this.props.valuetextArray.filter(
        (v) => v.value == this.props.value
      )[0].text;
    }
    this.setState({
      valuenow: this.valuenow,
      valuetext: valuetext || this.valuenow,
    });
    this.moveSliderTo(this.valuenow);
    if (this.props.onChange) {
      this.props.onChange(this.valuenow, true);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value &&
      this.props.value !== this.valuenow &&
      this.props.value >= this.props.min &&
      this.props.value <= this.props.max
    ) {
      this.moveSliderTo(this.props.value);
    }
  }

  moveSliderTo = (value) => {
    let _value = value;
    if (_value > this.props.max) {
      _value = this.props.max;
    }
    if (_value < this.props.min) {
      _value = this.props.min;
    }

    this.valueprev = this.valuenow;
    this.valuenow = _value;
    let div = null;
    let pos;
    const divs = this.ref.current.querySelectorAll(`.datalist > div`);
    for (let _div of divs) {
      const dataId = _div.getAttribute("data-id");
      if (dataId !== null && dataId == this.valuenow) {
        div = _div;
      }
    }
    if (div) {
      const { offsetLeft, offsetWidth } = div;
      const divCenter = offsetLeft + offsetWidth / 2;
      pos = Math.round(divCenter - this.thumbWidth / 2);
    } else {
      pos =
        Math.round(
          (this.valuenow * this.railNode.offsetWidth) / this.minmaxDiff
        ) -
        this.thumbWidth / 2;
    }
    this.thumbNode.style.left = `${pos}px`;
    let valuetext = "";
    if (this.props.valuetextArray) {
      valuetext = this.props.valuetextArray.filter(
        (v) => v.value == this.valuenow
      )[0].text;
    }
    clearTimeout(this.timeoutRef);
    this.timeoutRef = setTimeout(() => {
      this.setState({
        valuenow: this.valuenow,
        valuetext: valuetext || this.valuenow,
      });
      if (this.props.onChange) {
        if (this.valuenow !== this.valueprev) {
          this.props.onChange(this.valuenow, null);
        }
      }
    });
  };

  onKeydown = (event) => {
    if (this.props.disabled) return;
    let flag = true;
    switch (event.keyCode) {
      case this.keyCode.left:
      case this.keyCode.down:
        this.moveSliderTo(this.valuenow - this.props.step);
        break;
      case this.keyCode.up:
      case this.keyCode.right:
        this.moveSliderTo(this.valuenow + this.props.step);
        break;
      case this.keyCode.pageDown:
        this.moveSliderTo(this.valuenow - 10);
        break;
      case this.keyCode.pageUp:
        this.moveSliderTo(this.valuenow + 10);
        break;
      case this.keyCode.home:
        this.moveSliderTo(this.props.min);
        break;
      case this.keyCode.end:
        this.moveSliderTo(this.props.max);
        break;
      default:
        flag = false;
        break;
    }
    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onMouseDown = (event) => {
    console.log("on mouse down event is called");
    const handleMouseMove = (event) => {
      if (this.props.disabled) return;
      if (this.props.orientation == "vertical") {
        this.moveSliderTo(this.values[this.calculateValueY(event)]);
      } else if (this.props.orientation == "horizontal") {
        this.moveSliderTo(this.values[this.calculateValue(event)]);
      }
      event.preventDefault();
      event.stopPropagation();
    };

    const handleMouseUp = (event) => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      this.thumbNode.focus();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    event.preventDefault();
    event.stopPropagation();
  };

  onTouchMove = (event) => {
    console.log("on touch move event is called");
    if (this.props.disabled) return;
    if ("ontouchstart" in document.documentElement) {
      const touch = event.touches[0];
      if (this.props.sorientation == "vertical") {
        this.moveSliderTo(
          this.values[this.calculateValueY({ pageY: touch.clientY })]
        );
      } else if (this.props.orientation == "horizontal") {
        this.moveSliderTo(
          this.values[this.calculateValue({ pageX: touch.clientX })]
        );
      }
      event.preventDefault();
      event.stopPropagation();
    }
  };

  /**
   * we get the updated value from the values array by using the returned value,
   * i.e, index returned by the calculateValue function.
   */
  onClick = (event) => {
    console.log("on click event called");
    if (this.props.disabled) return;
    if (this.props.orientation == "vertical") {
      console.log("vertical");
      this.moveSliderTo(this.values[this.calculateValueY(event)]);
    } else if (this.props.orientation == "horizontal") {
      console.log("horizontal");
      this.moveSliderTo(this.values[this.calculateValue(event)]);
    }
    this.thumbNode.focus();
    event.preventDefault();
    event.stopPropagation();
  };

  /**
   * This function checks the width taken by individual element on the slider and then
   * we calculate the distance/offset of mouse click from container's left position.
   * After calculating these two things we simply divide the distance/offset by item's width.
   * The value we get from this division is the index, not the value itself.
   *
   */
  calculateValue = (event) => {
    const distance = Math.round(
      this.railNode.getBoundingClientRect().width / (this.minmaxDiff + 1)
    );
    const left = this.railNode.getBoundingClientRect().left;
    const diffX = event.pageX - left;
    const index = parseInt(diffX / distance);
    if (index < 0) return 0;
    if (index > this.values.length - 1) return this.values.length - 1;
    return index;
  };

  calculateValueY = (event) => {
    const distance = Math.round(
      this.railNode.getBoundingClientRect().height / (this.minmaxDiff + 1)
    );
    const { bottom } = this.railNode.getBoundingClientRect();
    const diffX = bottom - event.pageY;
    const index = parseInt(diffX / distance);
    if (index < 0) return 0;
    if (index > this.values.length - 1) return this.values.length - 1;
    return index;
  };

  render() {
    const {
      ariahide,
      arialabel,
      classes,
      datalist,
      disabled,
      labelledby,
      max,
      min,
      orientation,
      tabindex,
      valuelabel,
    } = this.props;

    const _disabled = disabled ? "disabled" : "";
    const _classes = `slider-container ${classes} ${_disabled} ${orientation}`;
    const tabIndex = disabled ? "-1" : tabindex;
    return (
      <div ref={this.ref} aria-hidden={ariahide} className={_classes}>
        <div className="slider">
          <div className="rail-wrapper">
            <div className="rail">
              <div className="fill"></div>
            </div>
          </div>
          <div className="datalist" aria-hidden>
            {datalist.map((item) => {
              return (
                <div
                  key={item.id}
                  data-id={item.value}
                  className={
                    item.value == this.state.valuenow ? "selected" : null
                  }
                >
                  <span>
                    <span>
                      <span></span>
                    </span>
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item.label }}></span>
                </div>
              );
            })}
          </div>
          <div className="thumb-wrapper">
            <div
              aria-hidden
              onClick={this.onClick}
              className="thumb-click-handler"
            ></div>
            <div
              role="slider"
              className="thumb"
              tabIndex={tabIndex}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-label={arialabel}
              aria-disabled={disabled}
              onKeyDown={this.onKeydown}
              aria-labelledby={labelledby}
              onMouseDown={this.onMouseDown}
              onTouchMove={this.onTouchMove}
              aria-orientation={orientation}
              aria-valuenow={this.state.valuenow}
              aria-valuetext={`${this.state.valuetext} ${valuelabel}`}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  step: 1,
  value: 1,
  classes: "",
  tabindex: "0",
  arialabel: "",
  ariahide: false,
  disabled: false,
  orientation: "horizontal",
  valuelabel: "",
};

Slider.propTypes = {
  disabled: PropTypes.bool,
  ariahide: PropTypes.bool,
  classes: PropTypes.string,
  arialabel: PropTypes.string,
  labelledby: PropTypes.string,
  orientation: PropTypes.string,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  tabindex: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  valuetextArray: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.any.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  datalist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.any.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Slider;
