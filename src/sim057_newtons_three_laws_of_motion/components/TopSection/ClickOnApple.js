import React from 'react';
import data from "../../data/index";

const ClickOnApple = (props) => {

    const {
        showForceOnAppleOne,
        onClickAppleOne,
        showForceOnAppleTwo,
        onClickAppleTwo,
        showForceOnAppleThree,
        onClickAppleThree } = props;

    return (
        <div className="force-main-container">
            <div
                style={{ visibility: showForceOnAppleOne ? 'visible' : 'hidden' }}
                // aria-hidden={!(showForceOnAppleOne)}
                className="force-outer-container force-apple-one">
                <div className="down-force-details">
                    <div className="left">
                        <div className="tail"></div>
                        <div className="head"></div>
                    </div>
                    <div className="right" aria-hidden='true'>F<sub>g</sub></div>
                </div>
                <button
                    aria-label={data.largeApple}
                    style={{ visibility: !showForceOnAppleOne ? 'visible' : 'hidden' }}
                    aria-hidden={showForceOnAppleOne}
                    className="apple-button apple-one" onClick={onClickAppleOne}></button>
                <div className="up-force-details">
                    <div className="left">
                        <div className="head"></div>
                        <div className="tail"></div>
                    </div>
                    <div className="right" aria-hidden='true'>F<sub>N</sub></div>
                </div>
            </div>
            <div
                style={{ visibility: showForceOnAppleTwo ? 'visible' : 'hidden' }}
                // aria-hidden={!(showForceOnAppleTwo)}
                className="force-outer-container force-apple-two">
                <div className="down-force-details">
                    <div className="left">
                        <div className="tail"></div>
                        <div className="head"></div>
                    </div>
                    <div className="right" aria-hidden='true'>F<sub>g</sub></div>
                </div>
                <button
                    aria-label={data.mediumApple}
                    style={{ visibility: !showForceOnAppleTwo ? 'visible' : 'hidden' }}
                    aria-hidden={showForceOnAppleTwo}
                    className="apple-button apple-two" onClick={onClickAppleTwo}></button>
                <div className="up-force-details">
                    <div className="left">
                        <div className="head"></div>
                        <div className="tail"></div>
                    </div>
                    <div className="right" aria-hidden='true'>F<sub>N</sub></div>
                </div>
            </div>
            <div
                style={{ visibility: showForceOnAppleThree ? 'visible' : 'hidden' }}
                // aria-hidden={!(showForceOnAppleThree)}
                className="force-outer-container force-apple-three">
                <div className="down-force-details">
                    <div className="left">
                        <div className="tail"></div>
                        <div className="head"></div>
                    </div>
                    <div className="right" aria-hidden='true'>F<sub>g</sub></div>
                </div>
                <button
                    aria-label={data.smallApple}
                    style={{ visibility: !showForceOnAppleThree ? 'visible' : 'hidden' }}
                    aria-hidden={showForceOnAppleThree}
                    className="apple-button apple-three" onClick={onClickAppleThree}></button>
                <div className="up-force-details">
                    <div className="left">
                        <div className="head"></div>
                        <div className="tail"></div>
                    </div>
                    <div className="right" aria-hidden='true'>F<sub>N</sub></div>
                </div>
            </div>
        </div>
    )
}

export default ClickOnApple
