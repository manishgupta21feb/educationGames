const imageLoader = (callback) => {
  let images = window.PRECACHE_IMAGES || [];

  if (images.length) {
    var allLoaded = 0;
    var _log = {
      success: [],
      error: [],
    };
    var verifier = function () {
      allLoaded++;
      if (allLoaded == images.length) {
        callback.call(undefined, _log);
      }
    };

    for (var index = 0; index < images.length; index++) {
      (function (i) {
        var imgSource = images[i];
        var img = new Image();
        img.addEventListener(
          "load",
          function () {
            _log.success.push(imgSource);
            verifier();
          },
          false
        );
        img.addEventListener(
          "error",
          function () {
            _log.error.push(imgSource);
            verifier();
          },
          false
        );
        img.src = imgSource;
      })(index);
    }
  } else {
    callback();
  }
};

const audioLoader = (audios = window.PRECACHE_AUDIOS, callback) => {
  if (audios.length) {
    let allLoaded = 0;
    let _log = {
      error: [],
      success: [],
    };
    const verifier = () => {
      allLoaded++;
      if (allLoaded == audios.length) {
        callback.call(undefined, _log);
      }
    };

    for (let index = 0; index < audios.length; index++) {
      ((i) => {
        const audioSrc = audios[i];
        const audio = new Audio();
        audio.preload = "auto";
        audio.addEventListener(
          "canplaythrough",
          () => {
            _log.success.push(audioSrc);
            verifier();
          },
          false
        );
        audio.addEventListener(
          "error",
          () => {
            _log.error.push(audioSrc);
            verifier();
          },
          false
        );
        audio.src = audioSrc;
        audio.load();
      })(index);
    }
  } else {
    callback();
  }
};

const audioBufferLoader = (callback) => {
  let audios = window.PRECACHE_AUDIOS || [];
  if (audios.length) {
    let allLoaded = 0;
    let _log = {
      error: [],
      success: [],
    };
    const verifier = () => {
      allLoaded++;
      if (allLoaded == audios.length) {
        callback.call(undefined, _log);
      }
    };
    for (let index = 0; index < audios.length; index++) {
      ((i) => {
        const audioSrc = audios[i];
        let request = new XMLHttpRequest();
        request.open("GET", audioSrc, true);
        request.responseType = "arraybuffer";
        request.onload = () => {
          _log.success.push(audioSrc);
          verifier();
        };
        request.onerror = () => {
          _log.error.push(audioSrc);
          verifier();
        };
        request.send();
      })(index);
    }
  } else {
    callback();
  }
};

const preloader = (callback) => {
  imageLoader(() => {
    audioBufferLoader(() => {
      audioLoader(window.PRECACHE_VIDEOS || [], () => {
        callback();
      });
    });
  });
};

export { imageLoader, audioLoader };

export default preloader;
