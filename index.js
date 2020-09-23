const inquirer = require("inquirer");

// const promptAsync = util.promisify(inquirer.prompt);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
  } catch {
      if (err) throw err;
  }
}

// function call to initialize program
init();
