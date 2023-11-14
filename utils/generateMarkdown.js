function renderLicenseBadge(license) {
  var licenseBadge

  if (license === "Apache license 2.0") {
    licenseBadge = "![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  } else if (license === "Mozilla Public License 2.0") {
    licenseBadge = "![Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  } else {
    licenseBadge = ""
  };

  return licenseBadge;
}


function renderLicenseLink(license) {
  var userLicense

  if (license === "Apache license 2.0") {
    userLicense = "[Apache License 2.0](https://opensource.org/license/apache-2-0/)"
  } else if (license === "Mozilla Public License 2.0") {
    userLicense = "[Mozilla Public License 2.0](https://opensource.org/license/mpl-2-0/)"
  } else {
    userLicense = ""
  };

  return userLicense;
}


function renderLicenseSection(license) {
  var readmeLicense

  if (license === "Apache license 2.0" || license === "Mozilla Public License 2.0") {
    readmeLicense = `## License<br>${renderLicenseBadge(license)}<br>${renderLicenseLink(license)}`
  } else {
    readmeLicense = ""
  }

  return readmeLicense
}

function generateMarkdown(data) {
if (data.tableContents === true) {
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
  
  ${renderLicenseSection(data.license)}
  
  ## Questions?
  Contact me!
  
  Github: [${data.github}](https://github.com/${data.github})<br>Email: ${data.email}
`;
} else {
  return `# ${data.title}
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions?
  Contact me!
  
  Github: [${data.github}](https://github.com/${data.github})<br>Email: ${data.email}
`;
}
}

module.exports = generateMarkdown;
