// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Creative Commons Zero v1.0 Universal':
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public License':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    case 'Mozilla Public Licence 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache License 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'GNU General Public License v3.0':
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'Creative Commons Zero v1.0 Universal':
      return `http://creativecommons.org/publicdomain/zero/1.0/`;
    case 'Eclipse Public License':
      return `https://opensource.org/licenses/EPL-1.0`;
    case 'Mozilla Public Licence 2.0':
      return `https://opensource.org/licenses/MPL-2.0`;
    case 'The Unlicense':
      return `http://unlicense.org/`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return `
## License

${licenseBadge}

${licenseLink}
`;
  }
  else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.lInfo);
  return `# ${data.title}

## Table of Contents

* [Description](#the-task)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution-guidlines)
* [Testing](#test-instructions)
* [Questions](#questions)

## The Task

${data.description}

## Installation

${data.iInfo}

## Usage

${data.uInfo}    

## Contribution Guidlines

${data.cInfo}

## Test Instructions

${data.tInfo}
${licenseSection}
## Questions

https://github.com/${data.user}

---`;
}

module.exports = generateMarkdown;
