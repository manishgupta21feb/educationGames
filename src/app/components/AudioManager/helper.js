const loadAudio = (context, sfx, cb) => {
  if (sfx) {
    const request = new XMLHttpRequest();
    request.open("GET", sfx, true);
    request.responseType = "arraybuffer";

    request.onload = () => {
      context.decodeAudioData(
        request.response,
        (buffer) => {
          if (!buffer) {
            cb("Error: decoding file data failed.");
          } else {
            cb(null, buffer);
          }
        },
        (error) => {
          cb("Error: unable to decode file data.");
        }
      );
    };

    request.onerror = () => {
      cb("Error: XHR request for sfx failed.");
    };

    request.send();
  }
};

export { loadAudio };
