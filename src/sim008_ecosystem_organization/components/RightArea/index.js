import React from 'react';
import RightStaticContainer from '../../containers/RightStaticContainer';
import RightInteractiveContainer from '../../containers/RightInteractiveContainer';
import "./style.scss";

const RightArea = (props) => {
    return (
        <div className="right-area">
            {props.showStatic ? <RightInteractiveContainer /> : <RightStaticContainer />}
        </div>
    );
}

export default RightArea;