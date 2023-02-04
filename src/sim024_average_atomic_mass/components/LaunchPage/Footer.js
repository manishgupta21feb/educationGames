import React from "react";

export default (props) => {
  const { data, labels } = props;

  return (
    <div className="footer">
      <div className="legends">
        <div className={`legend electron`}></div>
        <div>
          {labels.electrons}: {data?.electron}
        </div>
      </div>
      <div className="legends">
        <div className={`legend nutron`}></div>
        <div>
          {labels.neutrons}: {data?.nutron}
        </div>
      </div>
      <div className="legends">
        <div className={`legend proton`}></div>
        <div>
          {labels.protons}: {data?.proton}
        </div>
      </div>
    </div>
  );
};
