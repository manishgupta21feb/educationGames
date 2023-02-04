import React from 'react';
import LeftStaticContainer from '../../containers/LeftStaticContainer';
import LeftInteractiveContainer from '../../containers/LeftInteractiveContainer';
import "./style.scss";

const LeftArea = (props) => {
    return (
        <div className="left-area">
            {props.showStatic ? <LeftStaticContainer /> : <LeftInteractiveContainer />}
        </div>
    );
}

export default LeftArea;