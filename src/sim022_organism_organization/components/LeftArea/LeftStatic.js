import React from 'react';
import { selectQuestion } from '../../actions/activity';
import "./style.scss";

const LeftStatic = (props) => {
    const { question, selectedQuestion } = props
    return (
        <div className="left-static">
            {question.map(q => {
                return (
                    <div className={q.imageClass} role="img" aria-label={q.imageAlt} style={{ opacity: q.id == selectedQuestion ? '1' : '0' }}
                        aria-hidden={q.id != selectedQuestion ? "true" : null}
                        tabIndex={q.id != selectedQuestion ? "-1" : null} key={q.id}>
                    </div>
                )
            })}
        </div>
    );
}

export default LeftStatic;