import React, { useEffect, useRef } from "react";
import Slider from "../../containers/SliderContainer";
import DescriptionBox from "../../containers/DescriptionBoxContainer";
import "./style.scss";
const Info = ({ isPopupActive,
    timelineInfo,
    selectedTimeline,
    data,
    selectedTab,
    focusOn,
}) => {
    const sliderRef = useRef([]);
    useEffect(() => {
        if (sliderRef && sliderRef.current) {
            //console.log("Btn ref", sliderRef.current.children[0].querySelector("input"))
            setTimeout(()=>{
                sliderRef.current.children[0].querySelector("input").focus()
            },150)
        }
    }, [focusOn])
    return (
        <>
            {selectedTab == 0 && selectedTimeline >= 0 && <>
                <h2 className="headings">{data.defaultData[selectedTab].Ost_0}</h2>
                {selectedTimeline == 0 ?
                    <img className={`source-img`} src={data.defaultData[selectedTab].tabOst0_DefaultImg} alt={data.defaultData[selectedTab].altImg} />
                    : <img src={timelineInfo.imageSrc} className={`source-img`} alt={timelineInfo.altImg} />

                }
            </>
            }
            {selectedTab == 1 && selectedTimeline >= 0 && <>
                <h2 className="headings">{data.defaultData[selectedTab].Ost_0}</h2>
                {selectedTimeline == 0 ?
                    <img className={`source-img`} src={data.defaultData[selectedTab].tabOst0_DefaultImg}
                        alt={data.defaultData[selectedTab].altImg} />
                    : <img src={timelineInfo.imageSrc} className={`source-img`} alt={timelineInfo.altImg} />

                }
                {/* <div className="sr-only sr-img">
                    {data.altTextForScale}
                </div> */}
                <div className="scaleUnit" aria-hidden={true}>
                    {data.cropImgScale.map((item, index) =>
                        <span key={index}
                            className="nos">{item}</span>)}
                </div>
                <div className="unitName" aria-hidden={true}>
                    {data.scaleUnit}
                </div>


            </>
            }

            <div ref={sliderRef}>
                <Slider />
            </div>
            <DescriptionBox />

        </>
    )
}

export default Info