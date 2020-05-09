const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);


inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your GitHub username:",
      name: "username"
    },

    {
      type: "input",
      message: "Enter your GitHub username:",
      name: "username"
    },
  ]);
};

function writeToFile(fileName, data) {

}

function init() {

}

init();
