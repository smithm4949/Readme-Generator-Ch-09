// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
  type: "input",
  name: "title",
  message: "What is your projects title?"
  },
  {
  type: "input",
  name: "description",
  message: "Describe your project:"
  },
  {
  type: "input",
  name: "installation",
  message: "How do you install your project?"
  },
  {
  type: "input",
  name: "usage",
  message: "How do you use your project?"
  },
  {
  type: "input",
  name: "contributing",
  message: "How do you contribute to your project?"
  },
  {
  type: "input",
  name: "githubUsername",
  message: "What is your github username?"
  },
  {
  type: "input",
  name: "email",
  message: "What is your email?"
  },
  {
  type: "input",
  name: "tests",
  message: "How can your project be tested?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName = "sample", data = {foo: "bar"}) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.log(error) : console.log(`Successfully generated readme file in current directory named: ${fileName}`);
  })
}

function addLicensesToQuestions() {
  const licenseQuestion = {
    type: "list",
    name: "license",
    message: "Select a license for your project"
  }
  const { licenses } = generateMarkdown;
  let licenseArray = [];
  for (const license in licenses) {
    licenseArray.push(license);
  }
  licenseQuestion.choices = licenseArray;
  questions.push(licenseQuestion);
}

// TODO: Create a function to initialize app
function init() {
  addLicensesToQuestions();
  inquirer.prompt(questions)
  .then(answers => {
    writeToFile(`${answers.title} README.md`, generateMarkdown.generateMarkdown(answers));
  })
}

// Function call to initialize app
init();
