import React from 'react';

const BottomStatic = (props) => {

  const {
    introductionHeading
  } = props;

  return (
    <p
      className="instruction-text"
      dangerouslySetInnerHTML={{
        __html: introductionHeading
      }}>
    </p>
  )
}

export default BottomStatic;