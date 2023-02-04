class AudiosListPlugin {
  apply(compiler) {
    // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    compiler.hooks.emit.tapAsync(
      "AudiosListPlugin",
      (compilation, callback) => {
        let audiosArray = [];
        const pattern = new RegExp(/\.(wav|mp3)$/);

        for (var filename in compilation.assets) {
          if (pattern.test(filename) && filename.indexOf("assets") !== -1) {
            audiosArray.push(`./${filename}`);
          }
        }

        let audioListFileData = `window.PRECACHE_AUDIOS = ${JSON.stringify(
          audiosArray
        )}`;

        // Insert this list into the webpack build as a new file asset:
        compilation.assets["audio-list.js"] = {
          source: function () {
            return audioListFileData;
          },
          size: function () {
            return audioListFileData.length;
          },
        };

        callback();
      }
    );
  }
}

module.exports = AudiosListPlugin;
