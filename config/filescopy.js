const fs = require("fs");
const path = require("path");

const activityFoldersPath = path.join(__dirname, "../src/");

const globalFolders = ["app", "boilerplate", "test"];

const getFilesToCopy = (folder) => {
  return [path.join(__dirname, "../src/", folder, "/index.js")];
};

fs.readdir(activityFoldersPath, (err, folders) => {
  folders = folders.filter((x) => !globalFolders.includes(x));
  let filesToCopy = getFilesToCopy("boilerplate");
  filesToCopy.forEach((file, index) => {
    folders.forEach((folder) => {
      let copyFilePath = getFilesToCopy(folder)[index];
      fs.copyFileSync(file, copyFilePath);
    });
  });
});
