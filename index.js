/*
Create a README generator that uses a set of user prompts.
User input is used to populate README contents, written to a new markdown file.
You will need to install inquirer to create the prompt for user inputs.
You will need to install axios to get the API request from github.
* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email
*/


const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const api = require("./api");
const readMeGen = require("./generateMarkdown");



const questions = [
    inquirer.prompt([
        {
            message: "Enter your GitHub username:",
            name: "username"
        },
    ]).then(function (response) {

        console.log(response.username);
        console.log(api.getUser(response.username));
        return api.getUser(response.username);

    }).then(function (val1) {

        inquirer.prompt([
            {
                message: "What is your title of your project?",
                name: "title"
            },
            {
                message: "State the current version",
                name: "version"
            },
            {
                message: "Provide a brief description.",
                name: "description"
            },
            {
                message: "Provide installation instructions.",
                name: "installation"
            },
            {
                message: "Describe how this project would be used.",
                name: "usage"
            },
            {
                message: "Who were the contributors?",
                name: "contributors"
            }
        ]).then(function (val2) {

            fs.writeFile("README.md", readMeGen({ ...val1, ...val2 }), function (err) {
                if (err) {
                    throw err;
                }
            })
        })
    })
];

/*function writeToFile(fileName, data) {
}

function init() {

}

init();*/
