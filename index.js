// TODO: Include packages needed for this application
const util = require('util');
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

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
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'user',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
async function init() {
    const userInput = await inquirer.prompt(questions);
    console.log(userInput);
    const user = {
        async getUserLink(){
            try{
                let response = await axios.get(`https://api.github.com/users/${userInput.user}`).then(resp => {
                    console.log(resp.data);
                })
                console.log(response.data);
                return response.data;
            }
            catch (error){
                console.log(error);
            }
        }
    }
    console.log(user.getUserLink().response);

    
}

// Function call to initialize app
init();
