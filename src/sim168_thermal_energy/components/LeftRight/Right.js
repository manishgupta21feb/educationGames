import React, { useRef } from "react";
import Radiobuttons from "../../containers/Radiobuttons";
import MCQContainer from "../../containers/MCQContainer";
import NextScreenButton from "../../containers/NextScreenButton";

const Right = (props) => {
  const timeout = useRef(null);
  const { ost, bowlType, question, subQuestion, onChange } = props;

  const _onChange = (id) => {
    onChange(id);
    EventManager.broadcast("STOP_ALL");
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      EventManager.broadcast("PRIMARY_CLICK");
    }, 100);
  };

  return (
    <div className="right-wrapper">
      {ost?.map((text, i) => (
        <p
          key={`ost-text${i}`}
          dangerouslySetInnerHTML={{ __html: text.replace("-1-", bowlType) }}
        ></p>
      ))}

      {subQuestion?.mcqQuestion ? (
        <MCQContainer>
          <Radiobuttons onChange={_onChange} />
        </MCQContainer>
      ) : null}
      {question ? <NextScreenButton /> : null}
    </div>
  );
};

export default Right;
