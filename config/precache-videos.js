class VideosListPlugin {
  apply(compiler) {
    // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    compiler.hooks.emit.tapAsync(
      "VideosListPlugin",
      (compilation, callback) => {
        let videosArray = [];
        const pattern = new RegExp(/\.(mp4|webm|ogg)$/);

        for (var filename in compilation.assets) {
          if (pattern.test(filename) && filename.indexOf("assets") !== -1) {
            console.log("\n\n\n Video: ", filename, "\n\n\n");
            videosArray.push(`./${filename}`);
          }
        }

        let videoListFileData = `window.PRECACHE_VIDEOS = ${JSON.stringify(
          videosArray
        )}`;

        // Insert this list into the webpack build as a new file asset:
        compilation.assets["video-list.js"] = {
          source: function () {
            return videoListFileData;
          },
          size: function () {
            return videoListFileData.length;
          },
        };

        callback();
      }
    );
  }
}

module.exports = VideosListPlugin;
