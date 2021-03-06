const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const util = require("util");

const asyncWrite = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?:",
    name: "title",
  },
  {
    type: "input",
    message:
      "Is there an image url (or file relative to the current folder) you would like to include below the title?:",
    name: "imageLink",
  },
  {
    type: "input",
    message: "What is the name of the image?:",
    name: "imageName",
  },
  {
    type: "input",
    message:
      "What text would you like to include under the 'Description' section of your Readme?:",
    name: "description",
  },
  {
    type: "input",
    message: "What installations are needed for this project?:",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Please include any text you would like in the 'Usage' section of the Readme:",
    name: "usageText",
  },
  {
    type: "input",
    message:
      "Please enter the URL you would like to include in the 'Usage' section of the Readme:",
    name: "usageLink",
  },
  {
    type: "input",
    message:
      "What is the name of this URL?:",
    name: "usageName",
  },
  {
    type: "input",
    message:
      "What text would you like to include in the 'Contributing' section?:",
    name: "contributing",
  },
  {
    type: "input",
    message: "What test would you like to include in the project?:",
    name: "tests",
  },
  {
    type: "list",
    message:
      "Which of the following licenses would you like to use for your project?:",
    choices: ["MIT", "GNU", "Apache"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your Github username?:",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?:",
    name: "email",
  },
];

// function to initialize program
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    await asyncWrite("README.md", generateMarkdown(answers));
    console.log("README file successfully generated!")
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
