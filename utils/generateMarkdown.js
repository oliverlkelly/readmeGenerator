// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

* [Description](#the-task)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution-guidlines)
* [Testing](#test-instructions)

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

## License

${data.license}

---`;
}

module.exports = generateMarkdown;
