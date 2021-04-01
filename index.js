// Complete: Include packages needed for this application

const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Complete: Create an array of questions for user input. 
const questions = [
    {
    type: 'input', 
    name: 'title',     
    message: 'What is the Title of your project?',
    },
    {
    type: 'input', 
    name: 'description', 
    message: 'Add a Description?', 
    },   
    {
    type: 'input', 
    name: 'installation', 
    message: 'What are the Installation Steps?', 
    },
    {
    type: 'input', 
    name: 'usage',     
    message: 'How do you use this?',
    },
    {
    type: 'list', 
    name: 'license', 
    message: 'What Lincense covers this project?',
    choices: ['Mozzila Public License 2.0', 'Appache 2.0 License', 'The MIT License', 'Boost Software License 1.0','The Unlicense'] 
    },
    {
    type: 'input', 
    name: 'contributing', 
    message: 'How can you Contribute to the project?', 
    },
    {
    type: 'input', 
    name: 'tests',     
    message: 'How to test the project?',
    },
    {
    type: 'input', 
    name: 'gitHubUserName', 
    message: 'What is your GitHub username?', 
    },
    {
    type: 'input', 
    name: 'emailAddress', 
    message: 'What is your Email address you can be reached at?', 
    },
];


// Complete: Function to initialize app 
function setBadge() {
 
   let response = inquirer.prompt(questions) // this starts the questions
   .then ((response) => {                     // the following lines compare response, in order to assign badge and url 
      if(response.license === 'Mozzila Public License 2.0'){
         response.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
         response.licenseURL = 'https://opensource.org/licenses/MPL-2.0';
      };
      if(response.license === 'Appache 2.0 License'){
         response.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
         response.licenseURL = 'https://opensource.org/licenses/Apache-2.0';
      };
      if(response.license === 'The MIT License'){
         response.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
         response.licenseURL = 'https://opensource.org/licenses/MIT';
      };
      if(response.license === 'Boost Software License 1.0'){
         response.badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]';
         response.licenseURL = 'https://www.boost.org/LICENSE_1_0.txt';
      };
      if(response.license === 'The Unlicense'){
         response.badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
         response.licenseURL = 'http://unlicense.org/';
      };
      writeToFile(generateMarkdown(response));    // this sends the answers into the generateMarkdown.js file to create the readme. 
      });
   }

// Complete: Create a function to write README file.  

function writeToFile(data){
   fs.writeFile('createdREADME/README.md', data, (err) =>
   err ? console.log(err) : console.log('README.md has been created!'))
}

// Complete: Create a call to start 

setBadge();


