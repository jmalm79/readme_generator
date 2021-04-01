function generateMarkdown(data) {
return `
# ${data.title}

  ${data.badge}

  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

## Installation

Please follow these steps to ensure a proper installation. 
${data.installation}

## Usage

The following will outline the steps needed to use this project.  
${data.usage}

## License
${data.license}

Please follow the link to learn more about the License this project is protected under. 
[${data.licenseURL}](${data.licenseURL})

## Contributing

How can you contribute? 
${data.contributing}

## Tests

The following test steps can be taken to ensure the project is running correctly. 
${data.tests}

## Questions

Please contact me with any questions about this project. 

My GitHub URL is [https://github.com/${data.gitHubUserName}](https://github.com/${data.gitHubUserName})

Email: ${data.emailAddress}

![ScreenShot of this.](images/projectScreenShot.jpg)
`;
}

module.exports = generateMarkdown;
