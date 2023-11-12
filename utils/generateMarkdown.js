// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "Apache license 2.0") {
    userLicense = ""
  } else if (data.license === "Mozilla Public License 2.0") {
    userLicense = ""
  } else {
    userLicense = ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## ${data.license}
  ${userLicense}
  
  ## Questions?
  Contact me!
  
  Github: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
