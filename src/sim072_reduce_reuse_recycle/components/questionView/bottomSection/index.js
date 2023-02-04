import React, { useEffect } from 'react';
import "./style.scss";

const BottomSection = (props) => {

    const { answer, heading, isPopupActive } = props;

    return (
        <div className="answer-zone" aria-hidden={isPopupActive}>
            <div className="heading-section">
                <h2>{heading}</h2>
            </div>
            <div className="answer-container">
                {answer.map((element, index) => (
                    <React.Fragment key={index}>
                        <img
                            alt={element.imageAlt}
                            src={element.img}
                            className={`answer-img ${element.imageClass}`}
                            style={{ visibility: element.show == true ? 'visible' : 'hidden' }}
                        />
                    </React.Fragment>
                ))
                }
            </div>
        </div>
    )
}

export default BottomSection