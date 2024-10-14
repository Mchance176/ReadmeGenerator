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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
