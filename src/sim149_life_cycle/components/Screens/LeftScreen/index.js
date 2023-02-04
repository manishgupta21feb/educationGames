import React from "react";
import Droppable from "../../../containers/DroppableContainer";
import HotSpot from "../../../containers/HotspotsContainer";
const index = (props) => {
  const { getScreen } = props;
  return getScreen ? <HotSpot /> : <Droppable />;
};

export default index;
