// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// License badge - https://img.shields.io/badge/License-GPL%20v2-blue.svg
// Public licenses:
//  (MIT) https://opensource.org/licenses/MIT
//  (ISC) https://opensource.org/licenses/ISC
//  (MPL 2.0) https://opensource.org/licenses/ISC
//  (GNU GPL v3) https://opensource.org/licenses/ISC


function renderLicenseBadge(license) {
  if(license === 'NONE'){
    return ''
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license[0]) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)'
      
    case 'ISC':
      return '(https://opensource.org/licenses/ISC)'
      
    case 'MPL 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)'
      
    case 'GNU GPL v3':
      return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return renderLicenseBadge(license) + renderLicenseLink(license)
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseSection(data.license)}
  
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  https://github.com/${data.githubUsername}
  ${data.emailAddress}
  `;
}

module.exports = generateMarkdown;
