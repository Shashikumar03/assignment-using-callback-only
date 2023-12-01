const fs = require("fs");
function createAndDeleteTheDirectory(mkdirPath, n, callback) {
  if (n == 0) {
    console.log("sucessfully all files are deleted");
    return;
  }

  fs.mkdir(mkdirPath, { recursive: true }, (err) => {
    if (err) {
      callback(err);
      return;
    } else {
      createJsonFile(`./jsonDirectory/${n}.json`, (err, filePath) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`filepath is ${filePath} is createdSuccessfully`);
          deleteFiles(filePath, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`filePath is ${filePath} is deleted suceesfully`);
              createAndDeleteTheDirectory(mkdirPath, --n, callback);
            }
          });
        }
      });
      callback(null);
    }
  });
}

function deleteFiles(filePath, callback) {
  setTimeout(() => {
    fs.unlink(filePath, (err) => {
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
