import React from "react";
import Video from "../../../app/components/Video";
import "./style.scss";

export default (props) => {
    return (
        <Video
            onVideoEnded={props.isVideoEnd}
            togglePlayState={"play"}
            {...props} />
    )
};