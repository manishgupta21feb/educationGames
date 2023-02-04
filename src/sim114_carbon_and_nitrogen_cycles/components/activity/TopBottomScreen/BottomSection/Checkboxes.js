import React from 'react';
import Checkbox from '../../../../../app/components/Checkbox';

const Checkboxes = (props) => {

  const {
    checkboxes,
    isPopupActive,
    onChange,
    selectedOptions,
    correctAttempt
  } = props;

  return (
    <>
      <ul className="checkbox-list">
        {checkboxes.map(({ id, text }) => (
          <li key={id}>
            <Checkbox
              id={id}
              text={text}
              label={text}
              onChange={onChange}
              isPopupActive={isPopupActive}
              checked={selectedOptions.indexOf(id) >= 0}
              disabled={isPopupActive || correctAttempt}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Checkboxes;