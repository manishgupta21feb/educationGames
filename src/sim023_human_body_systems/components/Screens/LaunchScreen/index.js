import React from "react";
import Button from "../../../../app/components/Button";
import View from "../../../../app/components/View";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    departments,
    onDeparmentclick,
    visitedDepartments,
    buttonLabels,
    onExit,
    hospitalAltText,
    hospitalText,
  } = props;

  const onClick = (btn) => {
    onDeparmentclick(btn);
  };

  const onExitClick = () => {
    onExit();
  };

  const deptButton = [];
  const depts = [];
  let index = 0;
  for (const property in departments) {
    const btn = departments[property];
    const classes = visitedDepartments.includes(btn.id) ? "visited" : "";
    const label = visitedDepartments.includes(btn.id) ? btn.title + " " + buttonLabels.visitedLabel : btn.title
    deptButton.push(
      <Button
        key={btn.id}
        label={label}
        text={btn.title}
        onClick={() => onClick(btn)}
        classes={`btn-chip ${classes}`}
        isPopupActive={isPopupActive}
      />
    );
    depts.push(
      <div aria-hidden key={btn.id}>
        <p className="key">{index + 1}</p>
        <p className="name">{btn.name}</p>
      </div>
    );
    index++;
  }

  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive || null} layout="leftright">
        <div className="hospital-img">
          <img className="sr-only sr-image" alt={hospitalAltText} />
          <p aria-hidden className="title">{hospitalText}</p>
          <div className="labels">{depts.reverse()}</div>
        </div>
        <div className="departments">
          {deptButton.length ? deptButton : null}
          {visitedDepartments.length === Object.keys(departments).length ? (
            <Button
              label={buttonLabels.exit}
              text={buttonLabels.exit}
              onClick={onExitClick}
              classes="toast-secondary-button positive"
              isPopupActive={isPopupActive}
            ></Button>
          ) : null}
        </div>
      </View>
    </div>
  );
};
