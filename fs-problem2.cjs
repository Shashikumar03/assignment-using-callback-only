const fs = require("fs");
const LIPSUM_PATH = "./lipsum.txt";
const UPPERCASE_FILE_PATH = "./upper.txt";
const FILENAME_PATH = "./filename.txt";
const LOWER_FILE_PATH = "./lowertxt.txt";
const SORT_FILE_PATH = "./sort.txt";
function fsproblem2(callback) {
  fs.readFile(LIPSUM_PATH, "utf-8", (err, data) => {
    if (err) {
      callback(err);
      return;
    } else {
      const upperText = data.toUpperCase();
      fs.writeFile(UPPERCASE_FILE_PATH, upperText, (err) => {
        if (err) {
          callback(err);
          return;
        } else {
          fs.writeFile(FILENAME_PATH, UPPERCASE_FILE_PATH, (err) => {
            if (err) {
              callback(err);
              return;
            } else {
              fs.readFile(UPPERCASE_FILE_PATH, "utf-8", (err, upperCaseTxt) => {
                if (err) {
                  callback(err);
                  return;
                } else {
                  const lowerTxt = upperCaseTxt.toLowerCase();
                  const sentences = lowerTxt.replaceAll(".", "\n").trim();
                  fs.writeFile(LOWER_FILE_PATH, sentences, (err) => {
                    if (err) {
                      console.log(err);
                      callback(err);
                      return;
                    } else {
                      fs.appendFile(
                        FILENAME_PATH,
                        `\n${LOWER_FILE_PATH}`,
                        (err) => {
                          if (err) {
                            callback(err);
                            return;
                          } else {
                            fs.readFile(
                              LOWER_FILE_PATH,
                              "utf-8",
                              (err, data) => {
                                if (err) {
                                  callback(err);
                                  return;
                                } else {
                                  const sortedContent = data
                                    .split("\n")
                                    .sort()
                                    .join("");
                                  fs.writeFile(
                                    SORT_FILE_PATH,
                                    sortedContent,
                                    (err) => {
                                      if (err) {
                                        console.log(err);
                                        callback(err);
                                      } else {
                                        fs.appendFile(
                                          FILENAME_PATH,
                                          `\n${SORT_FILE_PATH}`,
                                          (err) => {
                                            if (err) {
                                              callback(err);
                                              return;
                                            } else {
                                              fs.readFile(
                                                FILENAME_PATH,
                                                "utf-8",
                                                (err, data) => {
                                                  if (err) {
                                                    callback(err);
                                                    return;
                                                  } else {
                                                    data
                                                      .split("\n")
                                                      .forEach((path) => {
                                                        const pathFile = path;
                                                        fs.unlink(
                                                          pathFile,
                                                          (err) => {
                                                            if (err) {
                                                              console.log(err);
                                                            } else {
                                                              console.log(
                                                                `${pathFile} deleted successfully`
                                                              );
                                                            }
                                                          }
                                                        );
                                                      });
                                                  }
                                                }
                                              );
                                            }
                                          }
                                        );
                                      }
                                    }
                                  );
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}
module.exports = fsproblem2;
