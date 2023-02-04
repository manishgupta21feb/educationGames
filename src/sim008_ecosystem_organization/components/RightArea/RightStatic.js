import React from 'react';

const RightStatic = (props) => {
    const { questions, selectedQuestionId } = props;
    return (
        <div className="right-static">
            <div className="intstruction-area">
                {/* <p className="instruction-text">Freezing is an emperor penguin who loves living on the coast of Antarctica. She spends most of her day slowly waddling across the ice, but moves quickly and gracefully whenever she swims. She is a single, living organism.</p> */}
                {questions.filter(q => q.id == selectedQuestionId).map(q => {
                    return (
                        <div key={q.id}>
                            <p className="instruction-text" dangerouslySetInnerHTML={{ __html: q.textContent }}></p>
                            <p className="instruction-blue-text" dangerouslySetInnerHTML={{ __html: q.clickContent }}></p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default RightStatic;