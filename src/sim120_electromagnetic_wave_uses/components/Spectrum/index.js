import React, { useEffect, useState } from "react";
import PartOne from "../../containers/PartOne";
import PartTwo from "../../containers/PartTwo";
import "./style.scss";

export default (props) => {
  const { reset } = props;
  const [selectedPage, setSelectedPage] = useState(true);

  useEffect(() => {
    if (!selectedPage) {
      setSelectedPage(true);
    }
  }, [reset]);

  const onContinue = () => {
    setSelectedPage(false);
  };

  return selectedPage ? (
    <PartOne onContinue={onContinue}></PartOne>
  ) : (
    <PartTwo></PartTwo>
  );
};
