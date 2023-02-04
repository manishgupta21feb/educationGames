import React, { useEffect } from "react"
import "../activity/main.scss";
import QuestionArea from "../../containers/QuestionAreaContainer"
const IntroductionArea = (props) => {
    const { questionIndex, selectedQuestion, showIntroScreen } = props
    useEffect(() => {
        props.setQuestion(questionIndex);
    }, [])
    return (
        <>
            {showIntroScreen ? <>
                <p className="questionIntroHeading" dangerouslySetInnerHTML={{ __html: selectedQuestion.introductionHeading }}></p>
                <p className="questionIntroSubHead" dangerouslySetInnerHTML={{ __html: selectedQuestion.introductionSubHeading }}></p>
            </> : <QuestionArea />}
        </>
    )
}

export default IntroductionArea