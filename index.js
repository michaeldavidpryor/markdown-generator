const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require('axios');
generateMarkdown = require('./generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);




function promptUser() {
  return inquirer.prompt([

    {
      type: "input",
      message: "Please enter your GitHub username",
      name: "username"
    },

    {
      type: "input",
      message: "Enter the title of your project",
      name: "title"
    },

    {
      type: "input",
      message: "Enter your email address",
      name: "email"
    },

    {
      type: "input",
      message: "Enter the name of your project repository",
      name: "repo"
    },

    {
      type: "input",
      message: "Describe your project. Make it short and concise.",
      name: "description"
    },

    {
      type: "input",
      message: "What block or blocks of code is needed to get started?",
      name: "installation"
    },

    {
      type: "input",
      message: "What are some unique features of this project?",
      name: "features"
    },

    {
      type: "input",
      message: "What are, if any, tests used to build your project?",
      name: "tests"
    },

    {
      type: "input",
      message: "What are some ways to contribute to your project?",
      name: "contributing"
    },

  ]);
};



async function init() {

  try {
    const data = await promptUser();

    const markdown = generateMarkdown(data, URL);

    await writeFileAsync("READMEE.md", markdown);

    console.log("Successfully wrote to READMEE.md");

  } catch (err) {
    console.log(err);
  }
}

init();
