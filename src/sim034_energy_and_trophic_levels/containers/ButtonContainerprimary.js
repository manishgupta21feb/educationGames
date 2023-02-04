import Button from "../../app/components/Button";
import { connect } from "react-redux";
import { thunk } from "../actions";
import data from "../data";

const mapState = (state) => {
  let active = state.selectedOrganism == "primary" ? "active" : "";
  let visited = "";
  if (!visited) {
    if (state.selectedOrganisms.indexOf("primary") >= 0) {
      visited = "visited";
    }
  }

  return {
    text: data.classifyingMatterContent[1].label,
    disabled: !!state.currentPopup.length,
    ariaHidden: !!state.currentPopup.length,
    classes: `hotspot-btn label pyramid-button pyramid-rabbit ${active}`,
    ariaLable: `${data.classifyingMatterContent[1].label} ${
      visited == "visited" ? visited : ""
    }`,
  };
};

const mapDispatch = (dispatch, ownProps) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.selectOrganism(ownProps.elem));
  },
});

export default connect(mapState, mapDispatch)(Button);
