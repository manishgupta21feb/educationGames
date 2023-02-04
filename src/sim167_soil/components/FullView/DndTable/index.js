import React, { useEffect, useRef, useState } from "react";
import DraggableContainer from "../../../containers/DraggableContainer";
import DroppableContainer from "../../../containers/DroppableContainer";
import Button from "../../../../app/components/Button";
import "./style.scss";

const ListTable = (props) => {
  const {
    dndData,
    dragData,
    emptyShell,
    onAnswerSubmit,
    testBtnText,
    isPopupActive,
  } = props;
  const { header, tableData } = dndData;

  const submitRef = useRef(null);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    let isCompleted = dragData.every(({ isDropped }) => isDropped == true);
    setEnable(isCompleted);
  }, [dragData]);

  const completeActivity = () => {
    onAnswerSubmit();
  };
  return (
    <div className="tableDndHolder">
      <h2 className="heading">{header}</h2>
      <div className="tableContainer">
        <table>
          <caption
            dangerouslySetInnerHTML={{ __html: tableData.caption }}
          ></caption>
          <thead>
            <tr>
              {tableData.data.th.map((element, index) => {
                return <th key={`th${index}`}>{element}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.data.tr.map((element, index) => {
              return (
                <tr className={`row${index + 1}`} key={`tr${index}`}>
                  {element.map((_element, _index) => {
                    return (
                      <td
                        key={`td${_index}`}
                        className={
                          _index == 0
                            ? dragData[index].isDropped
                              ? "afterDrop"
                              : "beforeDrop"
                            : "afterDrop"
                        }
                      >
                        {_index == 0
                          ? dragData[index].isDropped
                            ? dragData[index].content
                            : emptyShell[index]
                          : _element}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="dropHolder">
          <DroppableContainer />
        </div>
        <div className="dragObjectsHolder">
          <DraggableContainer />
        </div>
        <Button
          text={testBtnText}
          ariaLable={testBtnText}
          ariaHidden={isPopupActive}
          hideTooltip={false}
          classes="btn toast-secondary-button positive"
          onClick={completeActivity}
          disabled={!enable}
          ref={submitRef}
          isPopupActive={isPopupActive}
        />
      </div>
    </div>
  );
};

export default ListTable;
