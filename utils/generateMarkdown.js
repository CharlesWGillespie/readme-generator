// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    default:
      return '';
  }
}

// TODO:Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'GPLv2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    default:
      return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `
## License:

This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.
`;
    case 'Apache':
      return `
## License:

This project is licensed under the Apache License 2.0 - see the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) for details.
`;
    case 'GPLv3':
      return `
## License:

This project is licensed under the GNU General Public License v3.0 - see the [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0) for details.
`;
    case 'GPLv2':
      return `
## License:

This project is licensed under the GNU General Public License v2.0 - see the [GNU GPL v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) for details.
`;
    default:
      return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contribution, test, gitHubUserName, emailAddress }) {
  return `# ${title} ${renderLicenseBadge(license)}

## Description
  ${ description }

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Testing](#testing)
6. [License](#license)
7. [Questions](#questions)


## Installation
${ installation }

## Usage
${ usage }

## Contribution
${ contribution }

## Testing
${ test }

${ renderLicenseSection(license) }

## Questions
For questions the project, I can be contacted through GitHub or via email.

GitHub - https://github.com/${ gitHubUserName }

Email - ${ emailAddress }`;
}

module.exports = generateMarkdown;
