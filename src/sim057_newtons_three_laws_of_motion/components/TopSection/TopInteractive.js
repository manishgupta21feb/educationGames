import React from 'react';
import VideoContainer from "../../containers/VideoContainer";
import ForceDetails from '../../containers/ForceDetailContainer';
import ClickOnApple from '../../containers/ClickOnAppleContainer';

import dataJson from "../../data/index";

const TopInteractive = (props) => {

    const { data,
        hideImage,
        hideVideo,
        onClickApple,
        showForceOnAppleOne,
        showForceOnAppleTwo,
        showForceOnAppleThree,
        forceAltText } = props;

    return (
        <>{!data.interactive ?
            <div className="top-interactive">
                <div className={data.imageClass}>
                    <img
                        className="sr-only sr-image"
                        alt={data.id === 8 || data.id === 10 ?
                            data.imageAlt != '' ? data.imageAlt : ''
                            : showForceOnAppleOne === true && showForceOnAppleTwo === false && showForceOnAppleThree === false ? forceAltText.large
                                : showForceOnAppleOne === false && showForceOnAppleTwo === true && showForceOnAppleThree === false ? forceAltText.medium
                                    : showForceOnAppleOne === false && showForceOnAppleTwo === false && showForceOnAppleThree === true ? forceAltText.small
                                        : showForceOnAppleOne === true && showForceOnAppleTwo === true && showForceOnAppleThree === false ? forceAltText.largeMedium
                                            : showForceOnAppleOne === true && showForceOnAppleTwo === false && showForceOnAppleThree === true ? forceAltText.largeSmall
                                                : showForceOnAppleOne === false && showForceOnAppleTwo === true && showForceOnAppleThree === true ? forceAltText.mediumSmall
                                                    : showForceOnAppleOne === true && showForceOnAppleTwo === true && showForceOnAppleThree === true ? forceAltText.largeMediumSmall
                                                        : showForceOnAppleOne === false && showForceOnAppleTwo === false && showForceOnAppleThree === false && data.imageAlt

                        }
                    />
                </div>
                <>{
                    data.id === 8 ? <ForceDetails />
                        : data.id === 9 && <ClickOnApple />
                }</>
            </div>
            :
            <>
                {!hideVideo &&
                    <>
                        <VideoContainer />
                    </>
                }
                <div className="top-interactive" aria-hidden={hideImage && hideVideo ? false : true}
                    style={{ opacity: hideImage && hideVideo ? '1' : '0' }}>
                    <div className={data.videoEnd.imageClass} >
                        <img
                            className="sr-only sr-image"
                            alt={data.videoEnd.imageAlt != '' ? data.videoEnd.imageAlt : ''}
                        />
                        <>{
                            data.id === 5 && <ForceDetails />
                        }</>
                    </div>
                </div>
                {!hideImage &&
                    <div className="top-interactive">
                        <div className={data.imageClass} >
                            <img
                                className="sr-only sr-image"
                                alt={data.imageAlt != '' ? data.imageAlt : ''}
                            />
                            <>{
                                data.id === 5 && <ForceDetails />
                            }</>
                        </div>
                        <button
                            aria-label={data.id === 5 ? dataJson.clickOnTree : dataJson.clickOnApple}
                            className={data.id === 5 ? "tree" : "apple"}
                            onClick={() => onClickApple(data.id)}
                        ></button>
                    </div>
                }
            </>
        }
        </>
    )
}

export default TopInteractive;
