import React, { useState, useEffect } from 'react';
import VideoContainer from '../../containers/VideoContainer';

const ArtificialReef = (props) => {

  const {
    videoPlayState
  } = props;

  const [date, setDate] = useState("August 2019");
  const [timer, setTimer] = useState(1);

  const startTimer = () => {
    return setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  }

  const stopTimer = (interval) => {
    clearInterval(interval);
  }

  useEffect(() => {

    if (videoPlayState) {
      var interval = startTimer();
    } else {
      stopTimer(interval);
      if (timer == 20) {
        setTimer(1);
        setDate("August 2019");
      }
    }

    if (timer == 6) {
      setDate("November 2019");
    }
    if (timer == 10) {
      setDate("December 2020");
    }
    if (timer == 15) {
      setDate("September 2021");
    }
    if (timer == 20) {
      stopTimer(interval);
    }

    return () => clearInterval(interval);

  }, [timer, videoPlayState]);

  return (
    <div className="artificial-reef-container">
      <VideoContainer />
      <div className="artificial-reef-date">
        <p>
          <span className="sr-only sr-image">{date}</span>
          <span aria-hidden="true">{date}</span>
        </p>
      </div>
    </div>
  )
}

export default ArtificialReef;