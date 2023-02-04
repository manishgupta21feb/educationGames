import React from "react";

const QuestionCount = (props) => {
  const { content } = props;
  return (
    <>
      <h2 className="genericHeader">{content.sentence}</h2>
    </>
  );
};

export default QuestionCount;
