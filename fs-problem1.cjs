const fs = require("fs");
function createAndDeleteTheDirectory(mkdirPath, n, callback) {
  fs.mkdir(mkdirPath, { recursive: true }, (err) => {
    if (err) {
      callback(err);
      return;
    } else {
      while (n > 0) {
        createJsonFile(`./jsonDirectory/${n}.json`, (err, filePath) => {
          if (err) {
            console.log(err);
            callback(err);
          } else {
            console.log(`filepath is ${filePath} is createdSuccessfully`);
            deleteFiles(filePath, (err) => {
              if (err) {
                console.log(err);
                callback(err);
              } else {
                console.log(`filePath is ${filePath} is deleted suceesfully`);
              }
            });
          }
        });
        n--;
      }
    }
  });
}

function deleteFiles(mkdirPath, callback) {
  setTimeout(() => {
    fs.unlink(mkdirPath, (err) => {
      if (err) {
        callback(err);
        return;
      } else {
        callback(null);
      }
    });
  }, 1000);
}

function createJsonFile(filePath, callback) {
  setTimeout(() => {
    fs.writeFile(filePath, "shashi", (err) => {
      if (err) {
        callback(err);
        return;
      } else {
        callback(null, filePath);
      }
    });
  }, 5000);
}

module.exports = createAndDeleteTheDirectory;
