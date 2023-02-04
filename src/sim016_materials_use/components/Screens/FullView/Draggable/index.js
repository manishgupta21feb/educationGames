import React from "react";
import DragBox from "../../../../containers/DragBoxContainer";
import "./style.scss";

const Draggable = (props) => {
  const { elementData,droppableQuestion } = props;
 // console.log(droppableQuestion)

  return (
    <div className={`option-container draggable`}>
      <div className="draggable-btn-wrapper">
        {/*show DragBox here */}
        {
          elementData.map((element, index) => {
            return (
              <React.Fragment key={index}>
                <DragBox
                  element={element}
                ></DragBox>
              </React.Fragment>

            )
          })
        }
      </div>
      {/* write ul li for a11y*/}

      {/* <ul className={`dropdown-${selectedStage}`} role="menu" >

        {elementData?.map((element, index) => {
          return (
            <li
              role="none"
              className={`menuitem menuitem-${index + 1}`}
              key={index}
            >
              <a
                href="#"
                role="menuitem"
                data-accept={element.name}
                //disabled={droppedElement.current[element.name]}
                onKeyDown={(e) => keyDownList(e)}
                onClick={(e) => checkForDrop(e)}
                onBlur={() => showToastMessage(false)}
                aria-label={element.name}
                aria-hidden="false"

              ></a>
            </li>
          )

        })}
      </ul> */}

    </div>
  );
};



export default Draggable;
