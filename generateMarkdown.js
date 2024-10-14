import inquirer from "inquirer";
import marked from 'marked';

//License badge
const licenseBadges = {
  'MIT': '[![License: MIT] (https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
};

function renderLicenseBadge(license) {
  return LicenseBadge;
}

function renderLicenseSection() {
  return `## License`
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
}
## Description

${data.description}

## Table of Contents

-[Installation] (#installation)
-[Usage] (#usage)
-[Contributing] (#contributing)
-[Tests] (#tests)
-[Questions] (#questions)
${data.license !== 'None' ? '- [License] (#license)' : ''}

## Installation
${data.installation}

## Usage
${usage}

##Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me:

GitHub: [${data.github}](https://github.com/Mchance176/ReadmeGenerator/${data.github})
Email: ${data.email} (matt.chance176@gmail.com)

${renderLicenseSection(data.license)}
`;

}
