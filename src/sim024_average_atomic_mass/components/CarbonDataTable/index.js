import React, { useEffect, useState } from "react";
import CalculateButtonContainer from "../../containers/CalculateButtonContainer";
import FinishButtonContainer from "../../containers/FinishButtonContainer";
import "./style.scss";

export default (props) => {
  const {
    data,
    visited,
    isReset,
    isPopupActive,
    ariaLiveText,
    onCalculatedClick,
    buttonLabels,
    labels,
  } = props;
  const [calculated, setCalculated] = useState(false);
  const [shows, setShows] = useState([]);
  const carbon = data.carbon;

  useEffect(() => {
    if (isReset) {
      setShows([]);
      setCalculated(false);
    }
  }, [isReset]);

  const onCalculated = () => {
    setCalculated(true);
    onCalculatedClick();
    ariaLiveText(labels.avgAtomicMassLiveTxt);
  };
  const onShowClick = (name, massAbundance) => {
    setShows([...shows, name]);
    ariaLiveText(
      data.onShowLiveText.replace("-1-", name).replace("-2-", massAbundance)
    );
  };

  return (
    <div className="data-table-container">
      <div role="heading" aria-level="2" className="table-title">
        {labels.tableTitle}
      </div>
      {carbon.map((c, index) => {
        if (visited.includes(c.id)) {
          return (
            <DataTable
              shows={shows}
              onShowClick={onShowClick}
              key={index}
              data={c}
              isPopupActive={isPopupActive}
              buttonLabels={buttonLabels}
              labels={labels}
            ></DataTable>
          );
        }
      })}
      {visited.length > 2 ? (
        <div className="average-mass">
          <div role="heading" aria-level="2" className="label">
            {labels.avgAtomicMass}
          </div>
          {calculated ? (
            <div title={data.averageMassAbudance} className="value">
              {data.averageMassAbudance}
            </div>
          ) : (
            <div className="calculate-btn">
              <CalculateButtonContainer
                onClick={onCalculated}
              ></CalculateButtonContainer>
            </div>
          )}
        </div>
      ) : null}
      {calculated ? <FinishButtonContainer></FinishButtonContainer> : null}
    </div>
  );
};

const DataTable = (props) => {
  const { data, onShowClick, shows, isPopupActive, buttonLabels, labels } =
    props;

  return (
    <div className="data-table">
      <div role="heading" aria-level="3" className="line-1">
        {data.name}
      </div>
      <div className="line-2">
        <span title={labels.mass}>{labels.mass}</span>
        <span title={data.mass}>{data.mass}</span>
      </div>
      <div className="line-3">
        <span title={labels.abundance}>{labels.abundance}</span>
        <span title={data.percentageAbundance}>{data.percentageAbundance}</span>
      </div>
      <div className="line-4">
        <span title={labels.massAbundance}>{labels.massAbundance}</span>
        {shows.includes(data.name) ? (
          <span title={data.massAbundance}>{data.massAbundance}</span>
        ) : (
          <button
            aria-label={labels.showBtnLabel.replace("-1-", data.name)}
            onClick={() => onShowClick(data.name, data.massAbundance)}
            className="show-btn"
            disabled={isPopupActive}
          >
            <span aria-hidden>{buttonLabels.show}</span>
          </button>
        )}
      </div>
    </div>
  );
};
