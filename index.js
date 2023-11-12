//✓ TODO: Include packages needed for this application 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

//✓ TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project (what, why, and how!)"
    },
    {
        type: "confirm",
        name: "tableContents",
        message: "Would you like a table of contents?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is your project used and what are some examples or pictures?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines for your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How can someone test your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Select which license you want for your project",
        choices: ["Apache license 2.0", "Mozilla Public License 2.0", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(`Can't write ${fileName}: ${err}`)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            const generatedMarkdown = generateMarkdown(data);
            writeToFile("./assets/generatedREADME.md", generatedMarkdown);
        });
};

// Function call to initialize app
init();
