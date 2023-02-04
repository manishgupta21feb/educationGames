import React from "react";
import View from "../../../app/components/View";

const FullView = (props) => {
  const { isPopupActive, screen } = props;
  return (
    <View ariahidden={isPopupActive}>
      <div
        className={`fullview ${screen.id}`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </View>
  );
};
