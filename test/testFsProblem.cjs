const createAndDeleteTheDirectory = require("../fs-problem1.cjs");
createAndDeleteTheDirectory("jsonDirectory", 5, (err) => {
  if (err) {
    console.log(err);
  }
});
