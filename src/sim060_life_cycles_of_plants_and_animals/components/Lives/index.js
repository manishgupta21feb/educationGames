import React, {useState, useEffect} from "react";
import "./lives.scss";
import Button from "../../../app/components/Button";

const Lives = (props) => {
  const { animalsAndPlants, onLifeTitle, isPopupActive, getSubmitCount } = props;
  const [livesData, setLivesData] = useState(animalsAndPlants);

  useEffect(() => {
    const _getLivesData = [...animalsAndPlants];

    if(!getSubmitCount){
      for (let i in _getLivesData) {
        _getLivesData[i].disabled = false;
      }
    }

    setLivesData(_getLivesData);

  }, [getSubmitCount])

  const _onLifeTitle = (evt) => {
    onLifeTitle(evt);

    const _getLivesData = [...animalsAndPlants];
    const index = _getLivesData.findIndex((item) => item.id == evt.target.id);

    if (index !== -1) {
      _getLivesData[index] == { ..._getLivesData[index] };
      _getLivesData[index].disabled = true;
    }

    setLivesData(_getLivesData);
  };

  const life = livesData.map((item) => {
    return (
      <div key={item.id} className="life">
        <div
          role="img"
          aria-label={item.title}
          className="life__container"
          style={{ backgroundImage: `url(${item.img})` }}
        ></div>
        <Button
          id={item.id}
          text={item.title}
          disabled={item.disabled ? true : false}
          classes="hotspot-btn label life__btn"
          onClick={(evt) => _onLifeTitle(evt)}
          isPopupActive={isPopupActive}
        />
      </div>
    );
  });

  return <>{life}</>;
};

export default Lives;
