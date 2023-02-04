import React, { useState } from 'react';
import VideoContainer from "../../containers/VideoContainer";

const TopStatic = (props) => {
    const { data, hideVideo, questionId } = props;

    return (
        <>
            {
                data.investigationId === 3 && questionId === 0 ?
                    <>

                        <div className="top-static"
                            style={{ opacity: hideVideo ? '1' : '0' }}>
                            <img
                                className="sr-only sr-image"
                                alt={data.imageAlt != '' ? data.imageAlt : ''}
                            />
                            <div
                                role="img"
                                className={data.imageClass}
                                aria-hidden={true}
                            />
                        </div>
                        {!hideVideo &&

                            <div className="question-video">
                                <VideoContainer />
                            </div>
                        }
                    </>
                    :
                    <div className="top-static">
                        <img
                            className="sr-only sr-image"
                            alt={data.imageAlt != '' ? data.imageAlt : ''}
                        />
                        <div
                            role="img"
                            className={data.imageClass}
                            aria-hidden={true}
                        />
                    </div>
            }
        </>
    )
}

export default TopStatic
