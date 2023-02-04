import Button from "../../app/components/Button";
import { connect } from "react-redux";
import { thunk } from "../actions";
import data from "../data";

const mapState = (state) => {
  let active = state.selectedOrganism == "secondary" ? "active" : "";
  let visited = "";
  if (!visited) {
    if (state.selectedOrganisms.indexOf("secondary") >= 0) {
      visited = "visited";
    }
  }
  return {
    text: data.classifyingMatterContent[2].label,
    disabled: !!state.currentPopup.length,
    ariaHidden: !!state.currentPopup.length,
    classes: `hotspot-btn label pyramid-button pyramid-snake ${active}`,
    ariaLable: `${data.classifyingMatterContent[2].label} ${
      visited == "visited" ? visited : ""
    }`,
  };
};

const mapDispatch = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(thunk.selectOrganism(ownProps.elem));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Button);
