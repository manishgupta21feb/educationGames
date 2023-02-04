import Button from "./Button";
import AccessibleList from "../AccessibleList";

const createDraggables = ({ elements, props }) => {
  setTimeout(() => {
    $(elements).draggable({ ...props }).draggable("enable");
  }, 100);
};

const createDroppables = ({ elements, props }) => {
  setTimeout(() => {
    $(elements).droppable({ ...props }).droppable("enable");
  }, 100);
};

export { Button, AccessibleList, createDraggables, createDroppables };
