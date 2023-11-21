// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs").promises;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description of the project",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions for the project",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage for the project",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter the contributions for the project",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter the tests writen for the project",
    name: "test",
  },
  {
    type: "list",
    message: "Select a License for your project:",
    name: "license",
    choices: ["MIT", "GPLv2", "GPLv3", "Apache", "none"],
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "gitHubUserName",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "emailAddress",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(`./README-IS-IN-HERE/${fileName}`, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile("README.md", generateMarkdown(data)))
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
