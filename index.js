// TODO: Include packages needed for this application
const util = require('util');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation information regarding your project?',
        name: 'iInfo',
    },
    {
        type: 'input',
        message: 'What is the usage information regarding your project?',
        name: 'uInfo',
    },
    {
        type: 'input',
        message: 'What are the contribution guidlines of your project?',
        name: 'cInfo',
    },
    {
        type: 'input',
        message: 'What are the test instructions of your project?',
        name: 'tInfo',
    },
    {
        type: 'list',
        message: 'What kind of license is your project under?',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License',
            'Mozilla Public Licence 2.0',
            'The Unlicense'
        ],
        name: 'lInfo',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    const userInput = inquirer.prompt(questions);
}

// Function call to initialize app
init();
