import React from "react";
import PropTypes from "prop-types";

import { loadAudio } from "./helper";

class AudioManager extends React.Component {
  constructor(props) {
    super(props);
    this.sources = {};
    this.buffers = {};
    this.audioContext = null;
  }

  componentDidMount() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext ||
      window.mozAudioContext)();

    // this.audioContext = new window.AudioContext();
    if (this.props.sfxArray && Array.isArray(this.props.sfxArray)) {
      for (let item of this.props.sfxArray) {
        ((sfx) => {
          loadAudio(this.audioContext, sfx.src, (error, buffer) => {
            if (!error) {
              this.buffers[sfx.id] = buffer;
            }
          });
        })(item);
      }
    }
    document.addEventListener(
      "visibilitychange",
      this.handleAudioVisibilityChange
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "visibilitychange",
      this.handleAudioVisibilityChange
    );
  }

  handleAudioVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      if (this.audioContext.state === "suspended") {
        this.audioContext.resume();
      }
    } else {
      if (this.audioContext.state === "running") {
        this.audioContext.suspend();
      }
    }
  };

  play = (id) => {
    if (this.buffers[id]) {
      this.currentlyPlaying = id;
      if (this.sources[id] && this.sources[id].playing) {
        this.stop(id);
      }
      this.start(id);
    } else {
      console.warn(
        "ERROR: unable to play " +
          id +
          ", SFX/Narration is missing from context buffer."
      );
    }
  };

  stop = (id) => {
    this.stopWebAudio(this.sources[id]);
  };

  stopAll = (except) => {
    for (let key in this.sources) {
      if (except && except.id && except.id == key) {
        continue;
      }
      const item = this.sources[key];
      if (item.playing) {
        this.stopWebAudio(item);
      }
    }
  };

  playWebAudio = (source) => {
    if (source.source) {
      if (source.source.noteOn) {
        source.source.noteOn(0);
        source.playing = true;
      } else if (source.source.start) {
        source.source.start(0);
        source.playing = true;
      }
    }
  };

  stopWebAudio = (source) => {
    if (source.source.noteOff) {
      source.source.noteOff(0);
      source.playing = false;
    } else if (source.source.stop) {
      source.source.stop(0);
      source.playing = false;
    }
  };

  start = (id) => {
    if (this.buffers[id]) {
      const source = this.audioContext.createBufferSource();
      source.buffer = this.buffers[id];
      if (!source.onended) {
        source.onended = (e) => {
          this.props.onEnded(e, id);
        };
      }
      source.connect(this.audioContext.destination);
      if (!this.sources[id]) {
        this.sources[id] = {};
      }
      this.sources[id].source = source;
      this.sources[id].source.loop = this.props.sfxArray.filter(
        (s) => s.id == id
      )[0].loop;
      this.playWebAudio(this.sources[id]);
    }
  };

  render() {
    return null;
  }
}

AudioManager.propTypes = {
  onEnded: PropTypes.func,
  sfxArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AudioManager;
