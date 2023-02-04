import React from "react";

import { sfxArray } from "./data";
import AudioManager from "../AudioManager";
import EventManager from "../../events/manager";

class SFXManager extends React.Component {
  constructor(props) {
    super(props);
    this.nextInQueue = null;
    this.ref = React.createRef(null);
    this.nextInQueueTimeoutRef = null;
    this.onEndedTimeoutRef = null;
    this.state = {
      sfxs: [],
    };
  }

  componentDidMount() {
    const array = sfxArray.map((s) => ({ ...s }));
    if (this.props.sfxArray) {
      for (let obj of this.props.sfxArray) {
        array.push({ ...obj });
      }
    }
    this.setState({
      sfxs: array,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState && this.state.sfxs && prevState.sfxs) {
      for (let sfx of this.state.sfxs) {
        EventManager.init(sfx.id, (data) => {
          this.ref.current.play(sfx.id);
        });
      }
    }

    EventManager.init("STOP_ALL", () => {
      this.ref.current.stopAll();
      this.nextInQueue = [];
      clearTimeout(this.nextInQueueTimeoutRef);
      this.nextInQueueTimeoutRef = null;
    });

    EventManager.init("QUEUE_NEXT", (data) => {
      if (data && data.src) {
        clearTimeout(this.nextInQueueTimeoutRef);
        this.nextInQueueTimeoutRef = setTimeout(() => {
          this.nextInQueue = data.src;
        }, 50);
      }
    });

    EventManager.init("PLAY_AND_QUEUE_NEXT", (data) => {
      if (data) {
        if (data.current) {
          this.ref.current.stopAll();
          setTimeout(() => {
            EventManager.broadcast(data.current);
          });
        }
        if (data.next) {
          clearTimeout(this.nextInQueueTimeoutRef);
          this.nextInQueueTimeoutRef = setTimeout(() => {
            this.nextInQueue = data.next;
          }, 50);
        }
      }
    });

    EventManager.init("STOP_ALL_AND_PLAY", (data) => {
      this.ref.current.stopAll();
      if (data && data.id) {
        clearTimeout(this.nextInQueueTimeoutRef);
        EventManager.broadcast(data.id);
      }
    });
  }

  onEnded = (e, id) => {
    if (this.nextInQueue) {
      clearTimeout(this.onEndedTimeoutRef);
      this.onEndedTimeoutRef = setTimeout(() => {
        EventManager.broadcast(this.nextInQueue);
        this.nextInQueue = null;
      }, 50);
    }
    if (this.props.onEnded && typeof this.props.onEnded == "function") {
      this.props.onEnded(e, id);
    }
  };

  render() {
    return this.state.sfxs.length ? (
      <AudioManager
        ref={this.ref}
        onEnded={this.onEnded}
        sfxArray={this.state.sfxs}
      />
    ) : null;
  }
}

export default SFXManager;
