import React, { useEffect, useRef, useState } from "react"
const DroppableItem = (props) => {
    const answerDropRef = useRef(null);
    const clickableRef = useRef(null);
    const clickableRefTest = useRef(null);
    const { question,
        index,
        disableDroppable,
        disableDraggable,
        selectDraggableFull,
        focusedAnswerId,
        selectedDraggable,
        dragList,
        setFocusonDragItem,
        setFocusOnList,
        droppableQuestion,
    } = props
    useEffect(() => {
        $(answerDropRef.current).droppable({
            classes: { "ui-droppable-hover": "setBlueHoverColor" },
            tolerance: "pointer", //Mouse pointer overlaps the droppable.
            drop: (event, ui) => {
                const droppedName = ui.helper[0].getAttribute("data-target");
                // disable the dragged item
                disableDraggable(droppedName, true);
                // disable the dragged droppable
                disableDroppable(question.answerId, true, droppedName)
                // console.log("dropped", $(ui.draggable))
                return $(ui.draggable).addClass("drag-revert");

            },
        });
    }, [])

    useEffect(() => {
        if (answerDropRef) {
            const isDisable = question.isDisable ? 'disable' : 'enable';
            $(answerDropRef.current).droppable(isDisable);
        }
    }, [question.isDisable])

    useEffect(() => {
        //console.log("Focus on ,changed from here", focusedAnswerId);
        if (question.answerId === focusedAnswerId) {
            clickableRef.current.focus();
        }
    }, [focusedAnswerId])


    useEffect(() => {
        const firstEnableItem = dragList.find((d) => !d.isDisable);

        if (firstEnableItem) {
            setFocusonDragItem('');
            setTimeout(() => {
                setFocusonDragItem(firstEnableItem.name)
            }, 0)
        }
    }, [dragList])

    const selectDroppable = () => {
        // if draggable is selected
        // and is not already there
        //console.log("here")
        if (selectedDraggable) {
            disableDraggable(selectedDraggable, true);
            disableDroppable(question.answerId, true, selectedDraggable);
            selectDraggableFull('');
        }
    }

    const onKeyDownHandler = (event) => {
        const keyCode = event.keyCode || event.which;
        //console.log("clickableRef",clickableRef.current[index])
        if (keyCode == 40) {
            //ArrowDown
            if (index != 4) {
                // get next active element

                const nextActive = droppableQuestion.find((item, dI) => {
                    return dI > index && !item.isDisable
                })
                if (nextActive) {
                    setFocusOnList(nextActive.answerId)
                }
            }
        }

        else if (keyCode == 37 || keyCode == 38) {
            //ArrowLeft || ArrowUp
            if (index != 0) {
                let previousActive;
                for (let i = index - 1; i >= 0; i--) {
                    const question = droppableQuestion[i];
                    if (!question.isDisable) {
                        previousActive = question;
                        break;
                    }
                }
                if (previousActive) {
                    setFocusOnList(previousActive.answerId)
                }
            }
        }
        else if (keyCode == 27) {
            //set focus back on clicked draggable ESC pressed
            // console.log("the selected draggable is ", selectedDraggable)
            if (selectedDraggable) {
                setFocusonDragItem(selectedDraggable)
            }

        }

    }
    return (
        <>

            <p className="question"
                aria-hidden={true}
                //aria-hidden={selectedDraggable ? question.isDisable ? true : false : true}
                dangerouslySetInnerHTML={{ __html: question.text }}
            ></p>
            <button
                onClick={() => selectDroppable()}
                onKeyDown={(e) => onKeyDownHandler(e)}
                ref={clickableRef}
                key={"click -" + index}
                data-index={index}
                style={{ zIndex: -1 }}
                className={`target option option-${index + 1}`}
                data-accept={question.answerId}
                aria-hidden={selectedDraggable ? question.isDisable ? true : false : true}
                disabled={selectedDraggable ? question.isDisable ? true : false : true}
                aria-label={`droppable area ${question.text}`}
            >
            </button>
            <div
                ref={answerDropRef}
                key={index}
                data-index={index}
                style={{
                    pointerEvents: 'none',
                }}
                tabIndex="-1"
                className={question.isDisable ? `target option option-${index + 1} dropped` : `target option option-${index + 1}`}
                data-accept={question.answerId}
                aria-hidden="true"
            //aria-label={question.text}
            >


                {question.isDisable && <span>
                    {question.markedAnswer}
                </span>
                }
            </div>
            {index !== 4 &&
                <div className="seperator"></div>}
        </>
    )
}

export default DroppableItem